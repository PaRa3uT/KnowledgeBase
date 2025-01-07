import{_ as s,c as e,b as a,o as i}from"./app-BsHIgujo.js";const l={};function d(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h1><p>docker inspect &lt;image_name&gt;<br> docker run &lt;image_name&gt; (запустить контейнер)<br> docker run &lt;image_id&gt;<br> docker stop &lt;image_name&gt;</p><h2 id="list-docker-cli-commands" tabindex="-1"><a class="header-anchor" href="#list-docker-cli-commands"><span>List Docker CLI commands</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker  </span>
<span class="line">docker info</span>
<span class="line">docker ps -a (состояние всех контейнеров)</span>
<span class="line">docker restart &lt;ID контейнера&gt; (Перезапустить контейнер)</span>
<span class="line">docker container --help  </span>
<span class="line">docker exec -it awx_web bash  (запустить консоль контейнера)  </span>
<span class="line">docker exec -it &lt;conainer_name&gt; &lt;command&gt; (запустить command в контейнере)</span>
<span class="line">docker exec -it &lt;conainer_name&gt; sh|bash|python</span>
<span class="line"></span>
<span class="line">docker stats –no-stream (Использование памяти запущенными контейнерами)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="display-docker-version-and-info" tabindex="-1"><a class="header-anchor" href="#display-docker-version-and-info"><span>Display Docker version and info</span></a></h2><p>docker --version<br> docker version<br> docker info</p><h2 id="images" tabindex="-1"><a class="header-anchor" href="#images"><span>Images</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker build -f &lt;Dockerfile&gt; -t &lt;iamge_name&gt; .</span>
<span class="line">docker image ls</span>
<span class="line">docker images</span>
<span class="line">docker image prune -a (Удаление всех неиспользуемых образов)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="containers-running-all-all-in-quiet-mode" tabindex="-1"><a class="header-anchor" href="#containers-running-all-all-in-quiet-mode"><span>Containers (running, all, all in quiet mode)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker create --name &lt;container_name&gt; &lt;image_name&gt; (создание контейнера из образа)</span>
<span class="line">docker start &lt;container_id&gt; [-ai] (запуск контейнера)</span>
<span class="line"></span>
<span class="line">docker container start &lt;container_id&gt; (запуск контейнера)</span>
<span class="line">docker container stop &lt;container_id&gt; (Остановка контейнера)</span>
<span class="line"></span>
<span class="line">docker container ls</span>
<span class="line">docker container ls -a</span>
<span class="line">docker container ls -all</span>
<span class="line">docker container ls -eq</span>
<span class="line"></span>
<span class="line">docker container run &lt;image_name&gt;  </span>
<span class="line">docker container run -it &lt;image_name&gt; /bin/bash  </span>
<span class="line">docker container run -d &lt;image_name&gt;  </span>
<span class="line">docker container run -d --name &lt;my_container_name&gt; &lt;image_name&gt;  </span>
<span class="line">docker container run -d --network &lt;network_name&gt; &lt;image_name&gt; (run container in docker network)  </span>
<span class="line">docker container run --rm nginx  </span>
<span class="line">docker container run --name &lt;my_custom_name&gt; -d -p host_ip:host_port:container_port/protocol &lt;image_name&gt;  </span>
<span class="line">docker container run --name &lt;custom_container_name&gt; -d -v host_src:container_dest:options  </span>
<span class="line">docker container run --name &lt;custom_container_name&gt; -d -p 8080:80 -v $(pwd)/public_html:/usr/share/nginx/html &lt;image_name&gt;  </span>
<span class="line"></span>
<span class="line">docker container attach</span>
<span class="line"></span>
<span class="line">docker run:</span>
<span class="line">    --rm — нужен для автоматического удаления контейнера после остановки контейнера.</span>
<span class="line">    --name — нужен, чтобы назначить контейнеру имя. По умолчанию Docker генерирует забавные имена</span>
<span class="line">    --network=&lt;network_name&gt;</span>
<span class="line">    --mount type=bind|volume|tmpfs source|src=&lt;path to file or folder | volume_name&gt; destination|dest|target=&lt;path in container&gt; readonly</span>
<span class="line">    --volume host_dir:container_dir</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="volumes" tabindex="-1"><a class="header-anchor" href="#volumes"><span>volumes</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker volume ls</span>
<span class="line">docker volume create --name &lt;volume_name&gt;</span>
<span class="line">docker volume rm &lt;volume_name&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="network" tabindex="-1"><a class="header-anchor" href="#network"><span>Network</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker network ls</span>
<span class="line">docker network create -d bridge &lt;network_name&gt; (create docker network)</span>
<span class="line">docker network list</span>
<span class="line"></span>
<span class="line">docker network create --driver bridge my_network</span>
<span class="line"></span>
<span class="line">bridge — это устройство или ПО, работающее на канальном уровне (2-ой уровень модели OSI). Оно перенаправляет трафик между сегментами сети. Мостом может быть аппаратное или программное устройство, работающее в ядре хост-машины. Docker использует программную реализацию, которая позволяет контейнерам, подключённым к одной сети, обмениваться данными. Этот тип сети доступен только в рамках одного хоста.</span>
<span class="line">overlay — способ организации Docker между различными хостами. Оверлейные сети используют при развёртывании Swarm- или Kubernetes-кластера, так как в сети участвует более чем один хост.</span>
<span class="line">host — в этом случае контейнеры не изолированы от хоста, поэтому они будут делить с ним сетевое пространство. Здесь нет необходимости публиковать порты у контейнера: если контейнер слушает 8000-й порт, то он будет доступен с хоста и у него будет такой же IP-адрес.</span>
<span class="line">Macvlan — способ конфигурации сети, при котором Docker-контейнеру проставляется MAC-адрес. Такой способ подключения нужен для некоторых legacy-систем или для мониторинга сетевого трафика. В общем, все те случаи, где требуется эмуляция физического соединения к сети.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span>Docker-Compose</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">docker compose ls — для вывода всех запущенных контейнеров с их названиями.</span>
<span class="line">docker-compose logs &lt;название контейнера&gt; — для просмотра логов конкретного контейнера.</span>
<span class="line">docker-compose logs -f &lt;название контейнера&gt; - для просмотра логов конкретного контейнера в реальном времени</span>
<span class="line">docker-compose up -d --build (запуск и остановка с полной очисткой)</span>
<span class="line">docker-compose up -d --build postgres service1</span>
<span class="line">docker-compose start (Запуск остановленных контейнеров)</span>
<span class="line">docker-compose stop (остановить все сервисы)</span>
<span class="line">docker-compose restart (перезапустить все сервисы)</span>
<span class="line">docker-compose logs (посмотреть логи)</span>
<span class="line">docker-compose down (остановить и удалить все сервисы)</span>
<span class="line">docker-compose down -v (Полное удаление запущенных контейнеров с удалением именованных volume)</span>
<span class="line">docker-compose rm (удалить все сервисы)</span>
<span class="line">docker-compose build (пересобрать все использующиеся образы)</span>
<span class="line">docker-compose pause</span>
<span class="line">docker-compose unpause</span>
<span class="line">docker-compose ps (Посмотреть список запущенных сервисов)</span>
<span class="line">docker image rm name:tag</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Если вы вносите изменения в файл docker-compose уже запущенного проекта, для их применения нужно:</p><ol><li>Остановить проект, используя команду docker-compose down.</li><li>Запустить его снова с помощью docker-compose up -d</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">services:</span>
<span class="line">  db_postgres:</span>
<span class="line">    image: postgres:11</span>
<span class="line">    ports:</span>
<span class="line">      - &quot;5432:5432&quot;</span>
<span class="line">    environment:</span>
<span class="line">      - POSTGRES_USER=postgres</span>
<span class="line">      - POSTGRES_PASSWORD=postgres</span>
<span class="line">      - POSTGRES_DB=test_db</span>
<span class="line">  pgadmin:</span>
<span class="line">    container_name: pgadmin</span>
<span class="line">    image: dpage/pgadmin4</span>
<span class="line">    environment:</span>
<span class="line">      - PGADMIN_DEFAULT_EMAIL=pgadmin4@pgadmin.org</span>
<span class="line">      - PGADMIN_DEFAULT_PASSWORD=admin</span>
<span class="line">    ports:</span>
<span class="line">      - &quot;5050:80&quot;</span>
<span class="line">    depends_on:</span>
<span class="line">      - db_postgres</span>
<span class="line">  db_mariadb:</span>
<span class="line">    image: mariadb</span>
<span class="line">    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW</span>
<span class="line">    restart: always</span>
<span class="line">    volumes:</span>
<span class="line">      - /data/nextcloud_db:/var/lib/mysql</span>
<span class="line">    environment:</span>
<span class="line">      - MYSQL_ROOT_PASSWORD=#put some password here</span>
<span class="line">      - MYSQL_PASSWORD=#put some other password here</span>
<span class="line">      - MYSQL_DATABASE=nextcloud</span>
<span class="line">      - MYSQL_USER=nextcloud</span>
<span class="line">  web_app_1:</span>
<span class="line">    build: .</span>
<span class="line">    command: bash -c &quot;uvicorn main:app --host 0.0.0.0 --port 8000 --reload&quot;</span>
<span class="line">    volumes:</span>
<span class="line">      - .:/code</span>
<span class="line">    ports:</span>
<span class="line">      - &quot;8000:8000&quot;</span>
<span class="line">    depends_on:</span>
<span class="line">      - db_postgres</span>
<span class="line">  app:</span>
<span class="line">    image: nextcloud</span>
<span class="line">    depends_on:</span>
<span class="line">      - db_mariadb</span>
<span class="line">    restart: always</span>
<span class="line">  nginx:</span>
<span class="line">    depends_on:</span>
<span class="line">      - app</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-components" tabindex="-1"><a class="header-anchor" href="#docker-components"><span>Docker components</span></a></h2>`,20)]))}const t=s(l,[["render",d],["__file","docker.html.vue"]]),o=JSON.parse('{"path":"/unsorted/docker.html","title":"Docker","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"List Docker CLI commands","slug":"list-docker-cli-commands","link":"#list-docker-cli-commands","children":[]},{"level":2,"title":"Display Docker version and info","slug":"display-docker-version-and-info","link":"#display-docker-version-and-info","children":[]},{"level":2,"title":"Images","slug":"images","link":"#images","children":[]},{"level":2,"title":"Containers (running, all, all in quiet mode)","slug":"containers-running-all-all-in-quiet-mode","link":"#containers-running-all-all-in-quiet-mode","children":[]},{"level":2,"title":"volumes","slug":"volumes","link":"#volumes","children":[]},{"level":2,"title":"Network","slug":"network","link":"#network","children":[]},{"level":2,"title":"Docker-Compose","slug":"docker-compose","link":"#docker-compose","children":[]},{"level":2,"title":"Docker components","slug":"docker-components","link":"#docker-components","children":[]}],"git":{"updatedTime":1736250118000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":3,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"unsorted/docker.md"}');export{t as comp,o as data};
