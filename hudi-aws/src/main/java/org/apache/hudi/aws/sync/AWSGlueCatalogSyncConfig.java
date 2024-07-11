package org.apache.hudi.aws.sync;
import org.apache.hudi.common.config.ConfigClassProperty;
import org.apache.hudi.common.config.ConfigGroups;
import org.apache.hudi.common.config.ConfigProperty;
import org.apache.hudi.common.config.TypedProperties;
import org.apache.hudi.common.util.ValidationUtils;
import org.apache.hudi.sync.common.HoodieSyncConfig;

import com.beust.jcommander.Parameter;
import com.beust.jcommander.ParametersDelegate;
import org.apache.hadoop.conf.Configuration;

import javax.annotation.concurrent.Immutable;

import java.util.Properties;

/**
 * Configurations needed for syncing data into AWS Glue Catalog.
 */
@Immutable
@ConfigClassProperty(name = "AWS Glue Catalog Sync Configs",
        groupName = ConfigGroups.Names.META_SYNC,
        description = "Configurations used by Hudi to sync metadata to AWS Glue Catalog.")
public class AwsGlueCatalogSyncConfig extends HoodieSyncConfig {

    public static final ConfigProperty<String> GLUE_SYNC_ENABLED = ConfigProperty
            .key("hoodie.datasource.hive_sync.glue_sync_enabled")
            .defaultValue("false")
            .withDocumentation("Enable syncing metadata to AWS Glue Catalog");

    public static final ConfigProperty<String> GLUE_REGION = ConfigProperty
            .key("hoodie.datasource.hive_sync.glue_region")
            .noDefaultValue()
            .withDocumentation("AWS region for AWS Glue Catalog");

    @ParametersDelegate
    public final AwsGlueCatalogSyncConfig.HiveSyncConfigParams hiveSyncConfigParams = new AwsGlueCatalogSyncConfig.HiveSyncConfigParams();

    public AwsGlueCatalogSyncConfig(Properties props) {
        super(props);
        validateParameters();
    }

    public AwsGlueCatalogSyncConfig(Properties props, Configuration hadoopConf) {
        super(props, hadoopConf);
        validateParameters();
    }

    public TypedProperties toProps() {
        final TypedProperties props = super.toProps();
        props.setPropertyIfNonNull(GLUE_REGION.key(), getString(GLUE_REGION));
        return props;
    }

    public String getGlueRegion() {
        return getString(GLUE_REGION);
    }

    public boolean isGlueSyncEnabled() {
        return getBooleanOrDefault(GLUE_SYNC_ENABLED);
    }
    public static class HiveSyncConfigParams {

        @ParametersDelegate()
        public final HoodieSyncConfigParams hoodieSyncConfigParams = new HoodieSyncConfigParams();

        @Parameter(names = {"--user"}, description = "Hive username")
        public String hiveUser;
        @Parameter(names = {"--pass"}, description = "Hive password")
        public String hivePass;
        @Parameter(names = {"--jdbc-url"}, description = "Hive jdbc connect url")
        public String jdbcUrl;
        @Parameter(names = {"--use-pre-apache-input-format"},
                description = "Use InputFormat under com.uber.hoodie package "
                        + "instead of org.apache.hudi package. Use this when you are in the process of migrating from "
                        + "com.uber.hoodie to org.apache.hudi. Stop using this after you migrated the table definition to "
                        + "org.apache.hudi input format.")
        public Boolean usePreApacheInputFormat;
        @Deprecated
        @Parameter(names = {"--use-jdbc"}, description = "Hive jdbc connect url")
        public Boolean useJdbc;
        @Parameter(names = {"--metastore-uris"}, description = "Hive metastore uris")
        public String metastoreUris;
        @Parameter(names = {"--sync-mode"}, description = "Mode to choose for Hive ops. Valid values are hms,glue,jdbc and hiveql")
        public String syncMode;
        @Parameter(names = {"--auto-create-database"}, description = "Auto create hive database")
        public Boolean autoCreateDatabase;
        @Parameter(names = {"--ignore-exceptions"}, description = "Ignore hive exceptions")
        public Boolean ignoreExceptions;
        @Parameter(names = {"--skip-ro-suffix"}, description = "Skip the `_ro` suffix for Read optimized table, when registering")
        public Boolean skipROSuffix;
        @Parameter(names = {"--table-properties"}, description = "Table properties to hive table")
        public String tableProperties;
        @Parameter(names = {"--serde-properties"}, description = "Serde properties to hive table")
        public String serdeProperties;
        @Parameter(names = {"--support-timestamp"}, description = "'INT64' with original type TIMESTAMP_MICROS is converted to hive 'timestamp' type."
                + "Disabled by default for backward compatibility.")
        public Boolean supportTimestamp;
        @Parameter(names = {"--managed-table"}, description = "Create a managed table")
        public Boolean createManagedTable;
        @Parameter(names = {"--omit-metafields"}, description = "Omit metafields in schema")
        public Boolean omitMetaFields;
        @Parameter(names = {"--batch-sync-num"}, description = "The number of partitions one batch when synchronous partitions to hive")
        public Integer batchSyncNum;
        @Parameter(names = {"--spark-datasource"}, description = "Whether sync this table as spark data source table.")
        public Boolean syncAsSparkDataSourceTable;
        @Parameter(names = {"--spark-schema-length-threshold"}, description = "The maximum length allowed in a single cell when storing additional schema information in Hive's metastore.")
        public Integer sparkSchemaLengthThreshold;
        @Parameter(names = {"--bucket-sync"}, description = "use bucket sync")
        public Boolean bucketSync;
        @Parameter(names = {"--bucket-spec"}, description = "bucket spec stored in metastore")
        public String bucketSpec;
        @Parameter(names = {"--sync-comment"}, description = "synchronize table comments to hive")
        public Boolean syncComment;

        @Parameter(names = {"--sync-strategy"}, description = "Hive table synchronization strategy. Available option: RO, RT, ALL")
        public String syncStrategy;

        public boolean isHelp() {
            return hoodieSyncConfigParams.isHelp();
        }

        public TypedProperties toProps() {
            final TypedProperties props = hoodieSyncConfigParams.toProps();
            props.setPropertyIfNonNull(HIVE_USER.key(), hiveUser);
            props.setPropertyIfNonNull(HIVE_PASS.key(), hivePass);
            props.setPropertyIfNonNull(HIVE_URL.key(), jdbcUrl);
            props.setPropertyIfNonNull(HIVE_USE_PRE_APACHE_INPUT_FORMAT.key(), usePreApacheInputFormat);
            props.setPropertyIfNonNull(HIVE_USE_JDBC.key(), useJdbc);
            props.setPropertyIfNonNull(HIVE_SYNC_MODE.key(), syncMode);
            props.setPropertyIfNonNull(METASTORE_URIS.key(), metastoreUris);
            props.setPropertyIfNonNull(HIVE_AUTO_CREATE_DATABASE.key(), autoCreateDatabase);
            props.setPropertyIfNonNull(HIVE_IGNORE_EXCEPTIONS.key(), ignoreExceptions);
            props.setPropertyIfNonNull(HIVE_SKIP_RO_SUFFIX_FOR_READ_OPTIMIZED_TABLE.key(), skipROSuffix);
            props.setPropertyIfNonNull(HIVE_SUPPORT_TIMESTAMP_TYPE.key(), supportTimestamp);
            props.setPropertyIfNonNull(HIVE_TABLE_PROPERTIES.key(), tableProperties);
            props.setPropertyIfNonNull(HIVE_TABLE_SERDE_PROPERTIES.key(), serdeProperties);
            props.setPropertyIfNonNull(HIVE_SYNC_AS_DATA_SOURCE_TABLE.key(), syncAsSparkDataSourceTable);
            props.setPropertyIfNonNull(HIVE_SYNC_SCHEMA_STRING_LENGTH_THRESHOLD.key(), sparkSchemaLengthThreshold);
            props.setPropertyIfNonNull(HIVE_CREATE_MANAGED_TABLE.key(), createManagedTable);
            props.setPropertyIfNonNull(HIVE_SYNC_OMIT_METADATA_FIELDS.key(), omitMetaFields);
            props.setPropertyIfNonNull(HIVE_BATCH_SYNC_PARTITION_NUM.key(), batchSyncNum);
            props.setPropertyIfNonNull(HIVE_SYNC_BUCKET_SYNC.key(), bucketSync);
            props.setPropertyIfNonNull(HIVE_SYNC_BUCKET_SYNC_SPEC.key(), bucketSpec);
            props.setPropertyIfNonNull(HIVE_SYNC_COMMENT.key(), syncComment);
            props.setPropertyIfNonNull(HIVE_SYNC_TABLE_STRATEGY.key(), syncStrategy);
            return props;
        }
    }
    }
    public static void main(String[] args) {
        final AwsGlueCatalogSyncConfig cfg = new AwsGlueCatalogSyncConfig(new Properties());
        System.out.println("Glue Sync Enabled: " + cfg.isGlueSyncEnabled());
    }

    public void validateParameters() {
        // Add any additional validation if needed
        ValidationUtils.checkArgument(isGlueSyncEnabled(), "AWS Glue Catalog sync must be enabled.");
    }
}