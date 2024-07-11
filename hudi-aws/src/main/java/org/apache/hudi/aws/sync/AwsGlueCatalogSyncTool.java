package org.apache.hudi.aws.sync;

import com.beust.jcommander.JCommander;
import org.apache.hudi.common.config.TypedProperties;
import org.apache.hudi.config.GlueCatalogSyncClientConfig;
import org.apache.hudi.hadoop.fs.HadoopFSUtils;
import org.apache.hudi.sync.common.HoodieSyncConfig;
import org.apache.hudi.sync.common.HoodieSyncTool;
import org.apache.hadoop.conf.Configuration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;

import static org.apache.hudi.config.GlueCatalogSyncClientConfig.RECREATE_GLUE_TABLE_ON_ERROR;
import static org.apache.hudi.sync.common.HoodieSyncConfig.META_SYNC_BASE_PATH;

/**
 * Currently Experimental. Utility class that implements syncing a Hudi Table with the
 * AWS Glue Data Catalog (https://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html)
 * to enable querying via Glue ETLs, Athena etc.
 *
 * @Experimental
 */
public class AwsGlueCatalogSyncTool extends HoodieSyncTool {

  private static final Logger LOG = LoggerFactory.getLogger(AwsGlueCatalogSyncTool.class);
  private AWSGlueCatalogSyncClient awsGlueSyncClient;
  private final Properties props;
  private final Configuration hadoopConf;

  public AwsGlueCatalogSyncTool(Properties props, Configuration hadoopConf) {
    super(props, hadoopConf);
    this.props = props;
    this.hadoopConf = hadoopConf;
  }

  protected void initSyncClient(GlueCatalogSyncClientConfig glueConfig) {
    String databaseName = props.getProperty("glue.database.name");
    awsGlueSyncClient = new AWSGlueCatalogSyncClient(glueConfig);
  }

  protected boolean shouldRecreateAndSyncTable() {
    return Boolean.parseBoolean(props.getProperty(RECREATE_GLUE_TABLE_ON_ERROR.key()));
  }

  @Override
  public void syncHoodieTable() {
    try {
      initSyncClient();
      if (awsGlueSyncClient != null) {
        String tableName = props.getProperty("hoodie.datasource.hive_sync.table");
        if (tableName == null || tableName.isEmpty()) {
          throw new IllegalArgumentException("Table name is empty");
        }
        LOG.info("Syncing target hoodie table with Glue Data Catalog table ("
                + tableName + "). AWS Glue Data Catalog URL: " + awsGlueSyncClient.getDatabaseName());

        boolean tableExists = awsGlueSyncClient.tableExists(tableName);

        if (!tableExists || shouldRecreateAndSyncTable()) {
          if (tableExists) {
            LOG.info("Dropping existing Glue table: " + tableName);
            awsGlueSyncClient.dropTable(tableName);
          }
          LOG.info("Creating new Glue table: " + tableName);
          awsGlueSyncClient.createTable(tableName);
        } else {
          LOG.info("Updating existing Glue table: " + tableName);
          awsGlueSyncClient.updateTable(tableName);
        }
      }
    } catch (Exception e) {
      LOG.error("Error while syncing with Glue Data Catalog", e);
    }
  }

  public static void main(String[] args) {
    final HoodieSyncConfig.HoodieSyncConfigParams params = new HoodieSyncConfig.HoodieSyncConfigParams();
    JCommander cmd = JCommander.newBuilder().addObject(params).build();
    cmd.parse(args);
    if (params.isHelp()) {
      cmd.usage();
      System.exit(0);
    }
    TypedProperties props = params.toProps();
    Configuration hadoopConf = HadoopFSUtils.getFs(props.getString(META_SYNC_BASE_PATH.key()), new Configuration()).getConf();
    try (AwsGlueCatalogSyncTool tool = new AwsGlueCatalogSyncTool(props, hadoopConf)) {
      tool.syncHoodieTable();
    }
  }
}