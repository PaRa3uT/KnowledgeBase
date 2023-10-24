# Docker
  docker inspect <image_name>  
  docker run <image_name> (запустить контейнер)  
  docker run <image_id>  
  docker stop <image_name>  

## List Docker CLI commands
```
docker  
docker info
docker ps -a (состояние всех контейнеров)
docker restart <ID контейнера> (Перезапустить контейнер)
docker container --help  
docker exec -it awx_web bash  (запустить консоль контейнера)  
docker exec -it <conainer_name> <command> (запустить command в контейнере)
docker exec -it <conainer_name> sh|bash|python
```

## Display Docker version and info
docker --version  
docker version  
docker info  

## Images
```
docker build -f <Dockerfile> -t <iamge_name> .
docker image ls
docker images
docker image prune -a (Удаление всех неиспользуемых образов)
```

## Containers (running, all, all in quiet mode)
```
docker create --name <container_name> <image_name> (создание контейнера из образа)
docker start <container_id> [-ai] (запуск контейнера)

docker container start <container_id> (запуск контейнера)
docker container stop <container_id> (Остановка контейнера)

docker container ls
docker container ls -a
docker container ls -all
docker container ls -eq

docker container run <image_name>  
docker container run -it <image_name> /bin/bash  
docker container run -d <image_name>  
docker container run -d --name <my_container_name> <image_name>  
docker container run -d --network <network_name> <image_name> (run container in docker network)  
docker container run --rm nginx  
docker container run --name <my_custom_name> -d -p host_ip:host_port:container_port/protocol <image_name>  
docker container run --name <custom_container_name> -d -v host_src:container_dest:options  
docker container run --name <custom_container_name> -d -p 8080:80 -v $(pwd)/public_html:/usr/share/nginx/html <image_name>  

docker container attach

docker run:
    --rm — нужен для автоматического удаления контейнера после остановки контейнера.
    --name — нужен, чтобы назначить контейнеру имя. По умолчанию Docker генерирует забавные имена
    --network=<network_name>
    --mount type=bind|volume|tmpfs source|src=<path to file or folder | volume_name> destination|dest|target=<path in container> readonly
    --volume host_dir:container_dir
```

## volumes
```
docker volume ls
docker volume create --name <volume_name>
docker volume rm <volume_name>
```

## Network
```
docker network ls
docker network create -d bridge <network_name> (create docker network)
docker network list

docker network create --driver bridge my_network

bridge — это устройство или ПО, работающее на канальном уровне (2-ой уровень модели OSI). Оно перенаправляет трафик между сегментами сети. Мостом может быть аппаратное или программное устройство, работающее в ядре хост-машины. Docker использует программную реализацию, которая позволяет контейнерам, подключённым к одной сети, обмениваться данными. Этот тип сети доступен только в рамках одного хоста.
overlay — способ организации Docker между различными хостами. Оверлейные сети используют при развёртывании Swarm- или Kubernetes-кластера, так как в сети участвует более чем один хост.
host — в этом случае контейнеры не изолированы от хоста, поэтому они будут делить с ним сетевое пространство. Здесь нет необходимости публиковать порты у контейнера: если контейнер слушает 8000-й порт, то он будет доступен с хоста и у него будет такой же IP-адрес.
Macvlan — способ конфигурации сети, при котором Docker-контейнеру проставляется MAC-адрес. Такой способ подключения нужен для некоторых legacy-систем или для мониторинга сетевого трафика. В общем, все те случаи, где требуется эмуляция физического соединения к сети.
```

## Docker-Compose
```
docker compose ls — для вывода всех запущенных контейнеров с их названиями.
docker-compose logs <название контейнера> — для просмотра логов конкретного контейнера.
docker-compose logs -f <название контейнера> - для просмотра логов конкретного контейнера в реальном времени
docker-compose up -d --build (запуск и остановка с полной очисткой)
docker-compose up -d --build postgres service1
docker-compose start (Запуск остановленных контейнеров)
docker-compose stop (остановить все сервисы)
docker-compose restart (перезапустить все сервисы)
docker-compose logs (посмотреть логи)
docker-compose down (остановить и удалить все сервисы)
docker-compose down -v (Полное удаление запущенных контейнеров с удалением именованных volume)
docker-compose rm (удалить все сервисы)
docker-compose build (пересобрать все использующиеся образы)
docker-compose pause
docker-compose unpause
docker-compose ps (Посмотреть список запущенных сервисов)
docker image rm name:tag
```
Если вы вносите изменения в файл docker-compose уже запущенного проекта, для их применения нужно: 
1. Остановить проект, используя команду docker-compose down. 
2. Запустить его снова с помощью docker-compose up -d

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

## Docker components
