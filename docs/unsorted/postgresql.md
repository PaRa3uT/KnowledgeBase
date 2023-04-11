# PostgreSQL
```
\l (listing databases)
\c <database_name> (switching database)
\dt (listing tables)
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
