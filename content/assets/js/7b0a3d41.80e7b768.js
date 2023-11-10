"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[44676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={title:"Record Level Index: Hudi's blazing fast indexing for large-scale datasets",excerpt:"Announcing the Record Level Index in Apache Hudi",author:"Shiyan Xu and Sivabalan Narayanan",category:"blog",image:"/assets/images/blog/record-level-index/03.RLI_bulkinsert.png",tags:["design","indexing","metadata","apache hudi"]},o=void 0,l={permalink:"/blog/2023/11/01/record-level-index",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2023-11-01-record-level-index.md",source:"@site/blog/2023-11-01-record-level-index.md",title:"Record Level Index: Hudi's blazing fast indexing for large-scale datasets",description:"Introduction",date:"2023-11-01T00:00:00.000Z",formattedDate:"November 1, 2023",tags:[{label:"design",permalink:"/blog/tags/design"},{label:"indexing",permalink:"/blog/tags/indexing"},{label:"metadata",permalink:"/blog/tags/metadata"},{label:"apache hudi",permalink:"/blog/tags/apache-hudi"}],readingTime:11.355,truncated:!1,authors:[{name:"Shiyan Xu and Sivabalan Narayanan"}],nextItem:{title:"Lakehouse Trifecta \u2014 Delta Lake, Apache Iceberg & Apache Hudi",permalink:"/blog/2023/08/09/Lakehouse-Trifecta-Delta-Lake-Apache-Iceberg-and-Apache-Hudi"}},s={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Metadata table",id:"metadata-table",children:[],level:2},{value:"Record Level Index",id:"record-level-index",children:[{value:"Initialization",id:"initialization",children:[],level:3},{value:"Updating RLI upon data table writes",id:"updating-rli-upon-data-table-writes",children:[],level:3},{value:"Writer Indexing",id:"writer-indexing",children:[],level:3},{value:"Read Flow",id:"read-flow",children:[],level:3},{value:"Storage",id:"storage",children:[],level:3},{value:"Performance",id:"performance",children:[{value:"Write latency",id:"write-latency",children:[],level:4},{value:"Index look-up latency",id:"index-look-up-latency",children:[],level:4},{value:"Data shuffling",id:"data-shuffling",children:[],level:4},{value:"Query latency",id:"query-latency",children:[],level:4}],level:3},{value:"When to Use",id:"when-to-use",children:[],level:3}],level:2},{value:"Future Work",id:"future-work",children:[],level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Index is a critical component that facilitates quick updates and deletes for Hudi writers, and it plays a pivotal\nrole in boosting query executions as well. Hudi provides several index types, including the Bloom and Simple indexes with global\nvariations, the HBase Index that leverages a HBase server, the hash-based Bucket index, and the multi-modal index\nrealized through the metadata table. The choice of an index depends on factors such as table sizes, partition data distributions,\nor traffic patterns, where a specific index may be more suitable for simpler operation or better performance",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".\nUsers often face trade-offs when selecting index types for different tables, since there hasn't been\na generally performant index capable of facilitating both writes and reads with minimal operational overhead."),(0,i.kt)("p",null,"Starting from ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.14.0"},"Hudi 0.14.0"),", we are thrilled to announce a\ngeneral purpose index for Apache Hudi - the Record Level Index (RLI). This innovation not only dramatically boosts\nwrite efficiency but also improves read efficiency for relevant queries. Integrated seamlessly within the table storage layer,\nRLI can easily work without any additional operational efforts."),(0,i.kt)("p",null,"In the subsequent sections of this blog, we will give a brief introduction to Hudi's metadata table, a pre-requisite for discussing RLI.\nFollowing that, we will delve into the design and workflows of RLI, and then show performance analysis and index type comparisons. The blog\nwill conclude with insights into future work for RLI."),(0,i.kt)("h2",{id:"metadata-table"},"Metadata table"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/metadata"},"Hudi metadata table")," is a Merge-on-Read (MoR) table within the ",(0,i.kt)("inlineCode",{parentName:"p"},".hoodie/metadata/")," directory. It contains various\nmetadata pertaining to records, seamlessly integrated into both the writer and reader paths to improve indexing efficiency.\nThe metadata is segregated into four partitions: ",(0,i.kt)("inlineCode",{parentName:"p"},"files"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"column stats"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bloom filters"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"record level index"),"."),(0,i.kt)("img",{src:"/assets/images/blog/record-level-index/01.metadatatable_layout.png",alt:"Hudi metadata table layout",width:"800",align:"middle"}),(0,i.kt)("p",null,"The metadata table is updated synchronously with each commit action on the Timeline, in other words, the commits to the\nmetadata table are part of the transactions to the Hudi data table. With four partitions containing different types of\nmetadata, this layout serves the purpose of a multi-modal index:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"files")," partition keeps track of the Hudi data table\u2019s partitions, and data files of each partition"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"column stats")," partition records statistics about each column of the data table"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bloom filter")," partition stores serialized bloom filters for base files"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"record level index")," partition contains mappings of individual record key and the corresponding file group id")),(0,i.kt)("p",null,"Users can activate the metadata table by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.enable=true"),". Once activated, the ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," partition\nwill always be enabled. Other partitions can be enabled and configured individually to harness additional indexing\ncapabilities."),(0,i.kt)("h2",{id:"record-level-index"},"Record Level Index"),(0,i.kt)("p",null,"Starting from release 0.14.0, the Record Level Index (RLI) can be activated by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.record.index.enable=true"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.index.type=RECORD_INDEX"),'. The core concept behind RLI is the ability to determine the location of records, thus\nreducing the number of files that need to be scanned to extract the desired data. This process is usually referred to as "index look-up".\nHudi employs a primary-key model, requiring each record to be associated with a key\nto satisfy the uniqueness constraint. Consequently, we can establish one-to-one mappings between record keys and file groups,\nprecisely the data we intend to store within the ',(0,i.kt)("inlineCode",{parentName:"p"},"record level index")," partition."),(0,i.kt)("p",null,"Performance is paramount when it comes to indexes. The metadata table, which includes the RLI partition, chooses ",(0,i.kt)("a",{parentName:"p",href:"https://hbase.apache.org/book.html#_hfile_format_2"},"HFile"),(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),",\nHBase\u2019s file format that utilizes B+ tree-like structures for fast look-up, as the file format. Real-world benchmarking\nhas shown that an HFile containing 1 million RLI mappings can look up a batch of 100k records in just 600 ms.\nWe will cover the performance topic in a later section with detailed analysis."),(0,i.kt)("h3",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"Initializing the RLI partition for an existing Hudi table can be a laborious and time-consuming task, contingent on the number\nof records. Just like with a typical database, building indexes takes time, but the investment ultimately pays off by speeding up\nnumerous queries in the future."),(0,i.kt)("img",{src:"/assets/images/blog/record-level-index/02.RLI_init_flow.png",alt:"RLI init flow",width:"800",align:"middle"}),(0,i.kt)("p",null,"The diagram above shows the high-level steps of RLI initialization. Since these jobs are all parallelizable, users can\nscale the cluster and configure relevant parallelism settings (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.metadata.max.init.parallelism"),") accordingly\nto meet their time requirement."),(0,i.kt)("p",null,'Focusing on the final step, "Bulk insert to RLI partition," the metadata table writer employs a hash function to\npartition the RLI records, ensuring that the number of resulting file groups aligns with the number of partitions.\nThis guarantees consistent record key look-ups.'),(0,i.kt)("img",{src:"/assets/images/blog/record-level-index/03.RLI_bulkinsert.png",alt:"RLI bulkinsert",width:"800",align:"middle"}),(0,i.kt)("p",null,"It\u2019s important to note that the current implementation fixes the number of file groups in the RLI partition once it\u2019s initialized.\nTherefore, users should lean towards over-provisioning the file groups and adjust these configurations accordingly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hoodie.metadata.record.index.max.filegroup.count\nhoodie.metadata.record.index.min.filegroup.count\nhoodie.metadata.record.index.max.filegroup.size\nhoodie.metadata.record.index.growth.factor\n")),(0,i.kt)("p",null,"In future development iterations, RLI should be able to overcome this limitation by dynamically rebalancing file groups to\naccommodate the ever-increasing number of records."),(0,i.kt)("h3",{id:"updating-rli-upon-data-table-writes"},"Updating RLI upon data table writes"),(0,i.kt)("p",null,"During regular writes, the RLI partition will be updated as part of the transactions. Metadata records will be generated\nusing the incoming record keys with their corresponding location info. Given that the RLI partition contains the exact\nmappings of record keys and locations, upserts to the data table will result in upsertion of the corresponding keys to the\nRLI partition, The hash function employed will guarantee that identical keys are routed to the same file group."),(0,i.kt)("h3",{id:"writer-indexing"},"Writer Indexing"),(0,i.kt)("p",null,"Being part of the write flow, RLI follows the high-level indexing flow, similar to any other global index: for a given\nset of records, it tags each record with location information if the index finds them present in any existing file group.\nThe key distinction lies in the source of truth for the existence test\u2014the RLI partition. The diagram below illustrates\nthe tagging flow with detailed steps."),(0,i.kt)("img",{src:"/assets/images/blog/record-level-index/04.RLI_tagging.png",alt:"RLI tagging",width:"800",align:"middle"}),(0,i.kt)("p",null,"The tagged records will be passed to Hudi write handles and will undergo write operations to their respective file groups.\nThe indexing process is a critical step in applying updates to the table, as its efficiency directly influences the write\nlatency. In a later section, we will demonstrate the Record Level Index performance using benchmarking results."),(0,i.kt)("h3",{id:"read-flow"},"Read Flow"),(0,i.kt)("p",null,"The Record Level Index is also integrated on the query side",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". In queries that involve equality check (e.g., EqualTo or IN)\nagainst the record key column, Hudi\u2019s file index implementation optimizes the file pruning process. This optimization is\nachieved by leveraging RLI to precisely locate the file groups that need to be read for completing the queries."),(0,i.kt)("h3",{id:"storage"},"Storage"),(0,i.kt)("p",null,"Storage efficiency is another vital aspect of the design. Each RLI mapping entry must include some necessary information\nto precisely locate files, such as record key, partition path, file group id, etc. To optimize the storage, RLI adopts\nsome compression techniques such as encoding file group id (in the form of UUID) into 2 Longs to represent the high and\nlow bits. Using Gzip compression and a 4MB block size, an individual RLI record averages only 48 bytes in size. To\nillustrate this more practically, let\u2019s assume we have a table of 100TB data with about 1 billion records (average record size = 100Kb).\nThe storage space required by the RLI partition will be approximately 48 Gb, which is less than 0.05% of the total data size.\nSince RLI contains the same number of entries as the data table, storage optimization is crucial to make RLI practical,\nespecially for tables of petabyte size and beyond."),(0,i.kt)("p",null,"RLI exploits the low cost of storage to enable the rapid look-up process similar to the HBase index, while avoiding the\noperational overhead of running an extra server. In the next section, we will review some benchmarking results to demonstrate\nits performance advantages."),(0,i.kt)("h3",{id:"performance"},"Performance"),(0,i.kt)("p",null,"We conducted a comprehensive benchmarking analysis of the Record Level Index evaluating aspects such write latency,\nindex look-up latency, and data shuffling in comparison to existing indexing mechanisms in Hudi. In addition to the\nbenchmarks for write operations, we will also showcase the reduction in query latencies for point look-ups. Hudi 0.14.0\nand Spark 3.2.1 were used throughout the experiments."),(0,i.kt)("p",null,"In comparison to the Global Simple Index (GSI) in Hudi, Record Level Index (RLI) is crafted for significant performance\nadvantages stemming from a greatly reduced scan space and minimized data shuffling. GSI conducts join operations between\nincoming records and existing data across all partitions of the data table, resulting in substantial data shuffling and\ncomputational overhead to pinpoint the records. On the other hand, RLI efficiently extracts location info through a\nhash function, leading to a considerably smaller amount of data shuffling by only loading the file groups of interest\nfrom the metadata table."),(0,i.kt)("h4",{id:"write-latency"},"Write latency"),(0,i.kt)("p",null,"In the first set of experiments, we established two pipelines: one configured using GSI, and the other configured with RLI.\nEach pipeline was executed on an EMR cluster of 10 m5.4xlarge core instances, and was set to ingest batches of 200Mb data\ninto a 1TB dataset of 2 billion records. The RLI partition was configured with 1000 file groups. For N batches of ingestion,\n",(0,i.kt)("strong",{parentName:"p"},"the average write latency using RLI showed a remarkable 72% improvement over GSI"),"."),(0,i.kt)("img",{src:"/assets/images/blog/record-level-index/write-latency.png",alt:"metadata-rli",width:"600",align:"middle"}),(0,i.kt)("p",null,"Note: Between Global Simple Index and Global Bloom Index in Hudi, the former yielded better results due to the randomness\nof record keys. Therefore, we omitted the presentation of the Global Bloom Index in the chart."),(0,i.kt)("h4",{id:"index-look-up-latency"},"Index look-up latency"),(0,i.kt)("p",null,"We also isolated the index look-up step using HoodieReadClient to accurately gauge indexing efficiency. Through\nexperiments involving the look-up of 400,000 records (0.02%) in a 1TB dataset of 2 billion records, ",(0,i.kt)("strong",{parentName:"p"},"RLI showcased a\n72% improvement over GSI, consistent with the end-to-end write latency results"),"."),(0,i.kt)("img",{src:"/assets/images/blog/record-level-index/index-latency.png",alt:"index-latency",width:"600",align:"middle"}),(0,i.kt)("h4",{id:"data-shuffling"},"Data shuffling"),(0,i.kt)("p",null,"In the index look-up experiments, we observed that around 85Gb of data was shuffled for GSI, whereas only 700Mb was shuffled\nfor RLI. ",(0,i.kt)("strong",{parentName:"p"},"This reflects an impressive 92% reduction in data shuffling when using RLI compared to GSI"),"."),(0,i.kt)("h4",{id:"query-latency"},"Query latency"),(0,i.kt)("p",null,"The Record Level Index will greatly boost Spark queries with \u201cEqualTo\u201d and \u201cIN\u201d predicates on record key columns.\nWe created a 400GB Hudi table comprising 20,000 file groups. When we executed a query predicated on a single record key,\nwe observed a significant improvement in query time. ",(0,i.kt)("strong",{parentName:"p"},"With RLI enabled, the query time decreased from 977 seconds to just\n12 seconds, representing an impressive 98% reduction in latency"),(0,i.kt)("sup",{parentName:"p",id:"fnref-4"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),"."),(0,i.kt)("h3",{id:"when-to-use"},"When to Use"),(0,i.kt)("p",null,"RLI demonstrates outstanding performance in general, elevating update and delete efficiency to a new level and\nfast-tracking reads when executing key-matching queries. Enabling RLI is also as simple as setting some configuration flags.\nBelow, we have summarized a comparison table highlighting these important characteristics of RLI in contrast to other common Hudi index types."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Record Level Index"),(0,i.kt)("th",{parentName:"tr",align:null},"Global Simple Index"),(0,i.kt)("th",{parentName:"tr",align:null},"Global Bloom Index"),(0,i.kt)("th",{parentName:"tr",align:null},"HBase Index"),(0,i.kt)("th",{parentName:"tr",align:null},"Bucket Index"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Performant look-up in general"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes, with possible throttling issues"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Boost both writes and reads"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No, write-only"),(0,i.kt)("td",{parentName:"tr",align:null},"No, write-only"),(0,i.kt)("td",{parentName:"tr",align:null},"No, write-only"),(0,i.kt)("td",{parentName:"tr",align:null},"No, write-only")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Easy to enable"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No, require HBase server"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("p",null,"Many real-world applications will significantly benefit from using RLI. A common example is fulfilling the GDPR requirements.\nTypically, when users make requests, a set of IDs will be provided to identify the to-be-deleted records,\nwhich will either be updated (columns being nullified) or permanently removed.\nBy enabling RLI, offline jobs performing such changes will become notably more efficient, resulting in cost savings.\nOn the read side, analysts or engineers collecting historical events through certain tracing IDs will also\nexperience blazing fast responses from the key-matching queries."),(0,i.kt)("p",null,"While RLI holds the above-mentioned advantages over all other index types, it is important to consider certain\naspects when using it. Similar to any other global index, RLI requires record-key uniqueness across all partitions in a table.\nAs RLI keeps track of all record keys and locations, the initialization process may take time for large tables.\nIn scenarios with extremely skewed large workloads, RLI might not achieve the desired performance due to limitations in the current design."),(0,i.kt)("h2",{id:"future-work"},"Future Work"),(0,i.kt)("p",null,'In this initial version of the Record Level Index, certain limitations are acknowledged. As mentioned in the\n"Initialization" section, the number of file groups must be predetermined during the creation of the RLI partition.\nHudi does use some heuristics and a growth factor for an existing table, but for a new table, it is recommended to\nset appropriate file group configs for RLI. As the data volume increases, the RLI partition requires re-bootstrapping\nwhen additional file groups are needed for scaling out. To address the need for rebalancing, a consistent hashing\ntechnique could be employed.'),(0,i.kt)("p",null,"Another valuable enhancement would involve supporting the indexing of secondary columns alongside the record key\nfields, thus catering to a broader range of queries. On the reader side, there is a plan to integrate more query\nengines, such as Presto and Trino, with the Record Level Index to fully leverage the performance benefits offered\nby Hudi metadata tables."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2020/11/11/hudi-indexing-mechanisms/"},"This blog")," well-explained some best practices regarding index selection and configuration."),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," Other formats like Parquet can also be supported in the future."),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," As of now, query engine integration is only available for Spark, with plans to support additional engines in the future."),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-4"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," The query improvement is specific to record-key-matching queries and does not reflect a general reduction in latency by enabling RLI. In the case of the single record-key query, 99.995% of file groups (19999 out of 20000) were pruned during query execution."))}u.isMDXComponent=!0}}]);