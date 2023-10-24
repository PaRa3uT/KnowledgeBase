import{_ as e,o as n,c as i,e as d}from"./app-024c187f.js";const s={},a=d(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><p>docker inspect &lt;image_name&gt;<br> docker run &lt;image_name&gt; (запустить контейнер)<br> docker run &lt;image_id&gt;<br> docker stop &lt;image_name&gt;</p><h2 id="list-docker-cli-commands" tabindex="-1"><a class="header-anchor" href="#list-docker-cli-commands" aria-hidden="true">#</a> List Docker CLI commands</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker  
docker info
docker ps -a (состояние всех контейнеров)
docker restart &lt;ID контейнера&gt; (Перезапустить контейнер)
docker container --help  
docker exec -it awx_web bash  (запустить консоль контейнера)  
docker exec -it &lt;conainer_name&gt; &lt;command&gt; (запустить command в контейнере)
docker exec -it &lt;conainer_name&gt; sh|bash|python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="display-docker-version-and-info" tabindex="-1"><a class="header-anchor" href="#display-docker-version-and-info" aria-hidden="true">#</a> Display Docker version and info</h2><p>docker --version<br> docker version<br> docker info</p><h2 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> Images</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build -f &lt;Dockerfile&gt; -t &lt;iamge_name&gt; .
docker image ls
docker images
docker image prune -a (Удаление всех неиспользуемых образов)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="containers-running-all-all-in-quiet-mode" tabindex="-1"><a class="header-anchor" href="#containers-running-all-all-in-quiet-mode" aria-hidden="true">#</a> Containers (running, all, all in quiet mode)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker create --name &lt;container_name&gt; &lt;image_name&gt; (создание контейнера из образа)
docker start &lt;container_id&gt; [-ai] (запуск контейнера)

docker container start &lt;container_id&gt; (запуск контейнера)
docker container stop &lt;container_id&gt; (Остановка контейнера)

docker container ls
docker container ls -a
docker container ls -all
docker container ls -eq

docker container run &lt;image_name&gt;  
docker container run -it &lt;image_name&gt; /bin/bash  
docker container run -d &lt;image_name&gt;  
docker container run -d --name &lt;my_container_name&gt; &lt;image_name&gt;  
docker container run -d --network &lt;network_name&gt; &lt;image_name&gt; (run container in docker network)  
docker container run --rm nginx  
docker container run --name &lt;my_custom_name&gt; -d -p host_ip:host_port:container_port/protocol &lt;image_name&gt;  
docker container run --name &lt;custom_container_name&gt; -d -v host_src:container_dest:options  
docker container run --name &lt;custom_container_name&gt; -d -p 8080:80 -v $(pwd)/public_html:/usr/share/nginx/html &lt;image_name&gt;  

docker container attach

docker run:
    --rm — нужен для автоматического удаления контейнера после остановки контейнера.
    --name — нужен, чтобы назначить контейнеру имя. По умолчанию Docker генерирует забавные имена
    --network=&lt;network_name&gt;
    --mount type=bind|volume|tmpfs source|src=&lt;path to file or folder | volume_name&gt; destination|dest|target=&lt;path in container&gt; readonly
    --volume host_dir:container_dir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="volumes" tabindex="-1"><a class="header-anchor" href="#volumes" aria-hidden="true">#</a> volumes</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker volume ls
docker volume create --name &lt;volume_name&gt;
docker volume rm &lt;volume_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="network" tabindex="-1"><a class="header-anchor" href="#network" aria-hidden="true">#</a> Network</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network ls
docker network create -d bridge &lt;network_name&gt; (create docker network)
docker network list

docker network create --driver bridge my_network

bridge — это устройство или ПО, работающее на канальном уровне (2-ой уровень модели OSI). Оно перенаправляет трафик между сегментами сети. Мостом может быть аппаратное или программное устройство, работающее в ядре хост-машины. Docker использует программную реализацию, которая позволяет контейнерам, подключённым к одной сети, обмениваться данными. Этот тип сети доступен только в рамках одного хоста.
overlay — способ организации Docker между различными хостами. Оверлейные сети используют при развёртывании Swarm- или Kubernetes-кластера, так как в сети участвует более чем один хост.
host — в этом случае контейнеры не изолированы от хоста, поэтому они будут делить с ним сетевое пространство. Здесь нет необходимости публиковать порты у контейнера: если контейнер слушает 8000-й порт, то он будет доступен с хоста и у него будет такой же IP-адрес.
Macvlan — способ конфигурации сети, при котором Docker-контейнеру проставляется MAC-адрес. Такой способ подключения нужен для некоторых legacy-систем или для мониторинга сетевого трафика. В общем, все те случаи, где требуется эмуляция физического соединения к сети.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker-Compose</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker compose ls — для вывода всех запущенных контейнеров с их названиями.
docker-compose logs &lt;название контейнера&gt; — для просмотра логов конкретного контейнера.
docker-compose logs -f &lt;название контейнера&gt; - для просмотра логов конкретного контейнера в реальном времени
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Если вы вносите изменения в файл docker-compose уже запущенного проекта, для их применения нужно:</p><ol><li>Остановить проект, используя команду docker-compose down.</li><li>Запустить его снова с помощью docker-compose up -d</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>services:
  db_postgres:
    image: postgres:11
    ports:
      - &quot;5432:5432&quot;
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
      - &quot;5050:80&quot;
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
    command: bash -c &quot;uvicorn main:app --host 0.0.0.0 --port 8000 --reload&quot;
    volumes:
      - .:/code
    ports:
      - &quot;8000:8000&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-components" tabindex="-1"><a class="header-anchor" href="#docker-components" aria-hidden="true">#</a> Docker components</h2>`,20),r=[a];function l(c,o){return n(),i("div",null,r)}const v=e(s,[["render",l],["__file","docker.html.vue"]]);export{v as default};
