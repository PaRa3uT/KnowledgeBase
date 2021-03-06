# Other

## [Firebird](https://firebirdsql.org/)
```
FTS (Full Text Search) - https://github.com/IBSurgeon/lucene_udr
```

## [IPFS](ipfs.io)


## [Redis](https://redis.io/)
```
DEL key [key ...] - Removes the specified keys. A key is ignored if it does not exist. Return value Integer reply: The number of keys that were removed
GET key  - Get the value of key. If the key does not exist the special value nil is returned. An error is returned if the value stored at key is not a string, because GET only handles string values. Return value Bulk string reply: the value of key, or nil when key does not exist.
```

## MSSQL
### Перенос TempDB
1. Создаём отдельную директорию, назовём её TempDB. На эту директорию необходимо выдать права на чтение и изменение учётной записи, от имени которой работает служба MSSQL (SQL Database Engine)
2. Теперь нам надо выяснить текущее расположение файлов tempdb 
```
SELECT name, physical_name AS CurrentLocation, state_desc FROM sys.master_files WHERE database_id = DB_ID(N'tempdb');
```
3. Для каждого файла нужно выполнить следующий код
```
ALTER DATABASE database_name MODIFY FILE(NAME = logical_name, FILENAME = 'new_path\file_name');
- database_name - имя базы (в нашем случае tempdb)
- logical_name - логическое имя файла базы
- new_path\file_name - новый путь и физическое имя файла
```
4. Рестартуем службу MSSQL (SQL Database Engine). Проверяем в настройках tempdb расположение файла


## [ClickHouse](https://clickhouse.com/)
```
clickhouse-client --host=... --port=... --user=... --password=...
SHOW DATABASES;
SHOW TABLES FROM <db_name>
DESCRIBE <table_name>
```

## [Mosquitto](https://mosquitto.org/)
1.6.9 (default) bind websockets port on windows
2.0.14 (default) don't bind websocket port on Windows
```
mosquitto
mosquitto -v -c mosquitto.conf
mosquitto_sub -t test/topic -v
mosquitto_pub -t test/topic -m 'hello world'
```

## PostgreSQL
```
\l (listing databases)
\c <database_name> (switching database)
\dt (listing tables)
```

## NodeJS 16
1. Get node binary https://nodejs.org/dist/v16.13.0/node-v16.13.0-win-x86.zip
2. Create the folder where node will reside and move node.exe, npx, npx.cmd, npm, npm.cmd, node_modules to it
3. Add the the node folder and the packages/bin folder to PATH
4. On a command prompt execute npm install -g npm to update npm to the latest version

```
npm list -g --depth=0
npm outdated (проверить есть ли устаревшие пакеты)
npm update (обновить все устаревшие пакеты)
npm update --save (обновить все устаревшие пакеты и записать версии в package.json)
npm update <package_name> (обновить пакет)
npm update --save <package_name> (обновить пакет и записать версию в package.json)
npm install <package_name>@latest --save (Обновить до полседней версии)
npm install <package_name>@latest --save --force
```

## RabbitMQ
```
rabbitmqctl list_queues name messages_ready messages_unacknowledged
rabbitmqctl delete_queue <queue_name>
rabbitmqctl list_exchanges
rabbitmqctl list_bindings
rabbitmq-diagnostics -q ping
rabbitmq-diagnostics -q status
rabbitmq-diagnostics -q alarms
rabbitmq-diagnostics -q check_running && rabbitmq-diagnostics -q check_local_alarms
rabbitmq-diagnostics -q memory_breakdown --unit "MB"
rabbitmq-diagnostics -q listeners
rabbitmq-diagnostics -q check_port_connectivity
rabbitmq-diagnostics -q check_virtual_hosts
rabbitmq-plugins -q list --enabled --minimal
rabbitmq-plugins -q is_enabled rabbitmq_shovel
rabbitmq-plugins enable rabbitmq_mqtt
```

```
rabbitmq-plugins enable rabbitmq_management
rabbitmqctl add_user mqtt-test mqtt-test
rabbitmqctl set_permissions -p / mqtt-test ".*" ".*" ".*"
rabbitmqctl set_user_tags mqtt-test management
```

## ZFS
```
zfs snapshot -r name_of_the_pool@name_of_the_snapshot
zfs send -R -c name_of_the_pool@name_of_the_snapshot > export_name
zfs send -R -c name_of_the_pool@name_of_the_snapshot | ssh example.com cat > mybackupfile
zfs send -R -c name_of_the_pool@name_of_the_snapshot | ssh example.com zfs receive storage/mybackup
zfs send -c -i name_of_previous_snapshot name_of_the_pool@name_of_the_snapshot | ssh example.com zfs receive storage/mybackup
```

## QEMU
qemu -m 512 -cdrom /путь/к_iso-образу/example.iso -boot d (Запуск Live CD из ISO-образа)
qemu -smp threads=2 -m 1024 -cdrom /путь/к_iso-образу/example.iso -boot d
qemu-img create -f raw disk.img mysize (create disk image)
qemu-system-i386.exe -smp threads=2 -hda myimage.img -m 1024 -cdrom /путь/к_iso-образу/example.iso -boot d
qemu-img info disk.img

## Ansible
ansible --version  
ansible [all | ungrouped | <group_name> | <host_name> | host_ip] --list-hosts  
ansible-playbook playbooks/&lt;playbook&gt;.yml
ansible-vault
ansible-vault encrypt host_vars/cdn-01.example.com/secret (Зашифровать файл)
ansible-vault edit host_vars/cdn-01.example.com/secret (Отредактировать зашифрованный файл)
ansible-vault view host_vars/cdn-01.example.com/secret (Показать зашифрованный файл)

## Docker
  docker inspect <image_name>  
  docker run <image_name> (запустить контейнер)  
  docker run <image_id>  
  docker container run <image_name>  
  docker container run -it <image_name> /bin/bash  
  docker container run -d <image_name>  
  docker container run -d --name <my_container_name> <image_name>  
  docker container run --rm nginx  
  docker container attach  
  docker stop <image_name>  
  docker container run --name <my_custom_name> -d -p host_ip:host_port:container_port/protocol <image_name>  
  docker container run --name <custom_container_name> -d -v host_src:container_dest:options  
  docker container run --name <custom_container_name> -d -p 8080:80 -v $(pwd)/public_html:/usr/share/nginx/html <image_name>  
  docker network create -d bridge <network_name> (create docker network)  
  docker container run -d --network <network_name> <image_name> (run container in docker network)  
  docker network list  
  
### List Docker CLI commands
docker  
docker container --help  
docker exec -it awx_web bash  (запустить консоль контейнера)  

### Display Docker version and info
docker --version  
docker version  
docker info  

### List Docker images
docker image ls  

### List Docker containers (running, all, all in quiet mode)
docker container ls  
docker container ls -a
docker container ls -all  
docker container ls -eq  

### List Docker volumes
docker volume ls  


## Docker-Compose
docker-compose logs (посмотреть логи)  
docker-compose pause  
docker-compose unpause  
docker-compose stop  
docker-compose down  
docker image rm name:tag  

```
services:
  db_postgres:
    image: postgres:11
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=test_db
  pgadmin:
    container_name: pgadmin
    image: dpage/pgadmin4
    environment:
      - PGADMIN_DEFAULT_EMAIL=pgadmin4@pgadmin.org
      - PGADMIN_DEFAULT_PASSWORD=admin
    ports:
      - "5050:80"
    depends_on:
      - db_postgres
  db_mariadb:
    image: mariadb
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
    restart: always
    volumes:
      - /data/nextcloud_db:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=#put some password here
      - MYSQL_PASSWORD=#put some other password here
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
  web_app_1:
    build: .
    command: bash -c "uvicorn main:app --host 0.0.0.0 --port 8000 --reload"
    volumes:
      - .:/code
    ports:
      - "8000:8000"
    depends_on:
      - db_postgres
  app:
    image: nextcloud
    depends_on:
      - db_mariadb
    restart: always
  nginx:
    depends_on:
      - app
```

## Minikube
### Install
```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```
minikube start  
minikube status  
minikube stop  
minikube delete  
minikube service list  
minikube kubectl -- get pods  
minikube dashboard  
minikube logs  
minikube version --components  
kubectl version ()  

## Защита от фрода
```
Верификация транзакции
  При новом заказе от неверифицированного клиента, мы:
      Проверяем его по модулю FraudRecord. Это международная база ненадежных клиентов, мошенников и прочих нехороших.
      Проверяем количество неудачных попыток оплаты. Если их менее двух — всё ОК. Если их больше — переходим к верификации клиента и ставим метку «подозрительный».
      Проверяем, уникален ли IP клиента. Часто уже заблокированные из-за фрода клиенты создают новые аккаунты на другие имена.
      Проверяем соответствие гео-IP со страной биллинга. Очень многие мошенники платят картами из Европы и США, но сами находятся в СНГ или Китае.
  При повторных заказах и продлениях, клиенту нужно пройти только пункт 2.

Верификация клиента

  Верификация личности нужна для того, чтобы убедиться, что клиент является живым человеком и удостовериться, что платежный метод действительно принадлежит ему. Для этого мы запрашиваем у клиента документы, подтверждающие его личность.

  Принимаются только документы государственного образца из следующего списка:
      Паспорт (Passport);
      Идентификационная карточка (Identity Card, он же ID) — аналог паспорта во многих странах;
      Водительское удостоверение (Driving Licence) с фотографией;
      Свидетельство о временном гражданстве (Temporary Resident Card)
      Свидетельство о временном/постоянном виде на жительство (Residence permit)

  Мы тщательно проверяем все документы на соответствие госстандартам. Хотя зачастую подделка определяется с первого взгляда. Так, один из клиентов прислал паспорт с датой рождения «30 декабря 1792 года».

  Для проверки платежного метода, мы требуем фото банковской карты (с видимой лицевой стороной, но закрытым CVV) или скриншот оплаты из PayPal, где видно, что оплата была совершена на нашем сайте. Этот пункт уже привычен многим.
```
