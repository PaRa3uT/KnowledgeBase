# PostgreSQL
```
\l (listing databases)
\c <database_name> (switching database)
\dt (listing tables)
\dx (ist of installed extensions)
Просмотр списка баз: # sudo -u postgres psql -U postgres -l
Создание текстового дампа базы данных: # sudo -u postgres pg_dump -U postgres basa01 > ~/basa01.sql
Сжимаем дамп на лету с помощью pigz (умеет жать всеми ядрами): # sudo -u postgres pg_dump -U postgres basa01 | pigz > ~/basa01.sql.gz
Восстановление базы данных в новую базу (сначала создаём её):
  # sudo -u postgres createdb -U postgres -T template0 basa02
  # sudo -u postgres psql -U postgres basa02 < ~/basa01.sql
Выход из консоли psql (часто забываю): $ \q
Создать пользователя: # sudo -u postgres createuser -U postgres zabbix 
Задать пароль: # sudo -u postgres psql -U postgres -c "ALTER USER zabbix PASSWORD 'secpasswd'" 
Посмотреть список пользователей: # sudo -u postgres psql -U postgres -c "select * from pg_user" 
Дать полные права на базу: # sudo -u postgres psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE zabbixdb to zabbix"
Назначить пользователя владельцем базы: # sudo -u postgres psql -U postgres -c "ALTER DATABASE zabbixdb OWNER TO zabbix" 
Выполнить очистку (-f) и анализ (-z) базы данных Postgres Pro: # sudo -u postgres vacuumdb -U postgres -f -z -d basa01 
Переиндексировать базу: # sudo -u postgres reindexdb -U postgres -d basa01
Удалить базу данных: # sudo -u postgres psql -U postgres -c "DROP DATABASE basa01"
```

## Extensions
```
SELECT * FROM pg_available_extensions WHERE name = 'postgis' OR NAME = 'timescaledb';
```
### [PostGIS](https://postgis.net/)
```
Upgrade
Stop Postgres
Extract archive postgis to postgres
Start Postgres
ALTER EXTENSION postgis UPDATE TO "3.2.3"; -- Update to version 3.2.3 - PostGIS version
ALTER EXTENSION postgis UPDATE; -- Update to latest installed version
ALTER EXTENSION postgis_raster UPDATE;
ALTER EXTENSION postgis_sfcgal UPDATE;
ALTER EXTENSION postgis_tiger_geocoder UPDATE;
ALTER EXTENSION postgis_topology UPDATE;
ALTER EXTENSION address_standardizer UPDATE;
ALTER EXTENSION pgrouting UPDATE;
```

```
?Delete old versions
```
### [TimescalDB](https://docs.timescale.com/self-hosted/latest/install/)
```
Upgrade
Stop Postgres
Add to env path C:\Program Files\PostgreSQL\14\bin
run setup.exe
Start Postgres
Обновить через ALTER EXTENSION timescaledb UPDATE; не получилось, удалил расширение, перезапустил сервер и создал расширение
```

## Windows
```
cmd.exe /c chcp 1251
```

## Upgrade
### via pg_dumpall
```
1. pg_dumpall > outputfile
2. pg_ctl stop (/etc/rc.d/init.d/postgresql stop)
3. mv /usr/local/pgsql /usr/local/pgsql.old
4. Install the new version of PostgreSQL
5. /usr/local/pgsql/bin/initdb -D /usr/local/pgsql/data
6. Restore your previous pg_hba.conf and any postgresql.conf modifications.
7. /usr/local/pgsql/bin/postgres -D /usr/local/pgsql/data
8. /usr/local/pgsql/bin/psql -d postgres -f outputfile
```

### via pg_upgrade
```
1. mv /usr/local/pgsql /usr/local/pgsql.old
2. Install the new version of PostgreSQL
3. Init new cluster: /usr/local/pgsql/bin/initdb -D /usr/local/pgsql/data

4. Stop both servers
    pg_ctl -D /opt/PostgreSQL/9.6 stop
    pg_ctl -D /opt/PostgreSQL/15 stop

5.
    pg_upgrade.exe
            --old-datadir "C:/Program Files/PostgreSQL/9.6/data"
            --new-datadir "C:/Program Files/PostgreSQL/15/data"
            --old-bindir "C:/Program Files/PostgreSQL/9.6/bin"
            --new-bindir "C:/Program Files/PostgreSQL/15/bin"

    pg_upgrade.exe -U postgres
            --old-datadir "C:/Program Files/PostgreSQL/9.6/data"
            --new-datadir "C:/Program Files/PostgreSQL/15/data"
            --old-bindir "C:/Program Files/PostgreSQL/9.6/bin"
            --new-bindir "C:/Program Files/PostgreSQL/15/bin"

6.
    "d:/+CLOUD+/syncthing-data/+SERVER+/pgsql13/bin/vacuumdb" -U PaRa3uT --all --analyze-only
    PostgreSQL\15\bin\vacuumdb.exe -U postgres --all --analyze-in-stages

```

### with extensions
