# Other

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
docker container ls -all  
docker container ls -eq  

### List Docker volumes
docker volume ls  


## Docker-Compose
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


## Наборы технологий
Backend: FastAPI (Python), Yii (PHP)
Frontend: Vue (JavaScript), Next (SSR) (Javascript)
Database: SQLite, MariaDB/MySQL, PostgreSQL, TimescaleDB, PostGIS
Other: uvicorn (ASGI), nginx (HTTP Server, Balancer), Redis (Memory Cache)
