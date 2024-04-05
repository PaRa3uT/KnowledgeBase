# [ClickHouse](https://clickhouse.com/)
```
clickhouse-client --host=... --port=... --user=... --password=...
SHOW DATABASES;
SHOW TABLES FROM <db_name>
DESCRIBE <table_name>
```

```
Данные по компрессии данных
SELECT toDate(modification_date) dt, column_data_uncompressed_bytes  / column_data_compressed_bytes  AS ratio FROM system.parts_columns WHERE database=? AND table=? AND column=? GROUP BY dt ORDER BY dt
```