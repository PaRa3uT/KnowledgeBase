# Docker
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

## List Docker CLI commands
docker  
docker container --help  
docker exec -it awx_web bash  (запустить консоль контейнера)  

## Display Docker version and info
docker --version  
docker version  
docker info  

## List Docker images
docker image ls  

## List Docker containers (running, all, all in quiet mode)
docker container ls  
docker container ls -a
docker container ls -all  
docker container ls -eq  

## List Docker volumes
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
