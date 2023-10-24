import{_ as d,r as t,o as l,c as r,a as e,b as s,d as a,e as i}from"./app-024c187f.js";const o={},u=i(`<h1 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> PostgreSQL</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\\l (listing databases)
\\c &lt;database_name&gt; (switching database)
\\dt (listing tables)
\\dx (ist of installed extensions)
Просмотр списка баз: # sudo -u postgres psql -U postgres -l
Создание текстового дампа базы данных: # sudo -u postgres pg_dump -U postgres basa01 &gt; ~/basa01.sql
Сжимаем дамп на лету с помощью pigz (умеет жать всеми ядрами): # sudo -u postgres pg_dump -U postgres basa01 | pigz &gt; ~/basa01.sql.gz
Восстановление базы данных в новую базу (сначала создаём её):
  # sudo -u postgres createdb -U postgres -T template0 basa02
  # sudo -u postgres psql -U postgres basa02 &lt; ~/basa01.sql
Выход из консоли psql (часто забываю): $ \\q
Создать пользователя: # sudo -u postgres createuser -U postgres zabbix 
Задать пароль: # sudo -u postgres psql -U postgres -c &quot;ALTER USER zabbix PASSWORD &#39;secpasswd&#39;&quot; 
Посмотреть список пользователей: # sudo -u postgres psql -U postgres -c &quot;select * from pg_user&quot; 
Дать полные права на базу: # sudo -u postgres psql -U postgres -c &quot;GRANT ALL PRIVILEGES ON DATABASE zabbixdb to zabbix&quot;
Назначить пользователя владельцем базы: # sudo -u postgres psql -U postgres -c &quot;ALTER DATABASE zabbixdb OWNER TO zabbix&quot; 
Выполнить очистку (-f) и анализ (-z) базы данных Postgres Pro: # sudo -u postgres vacuumdb -U postgres -f -z -d basa01 
Переиндексировать базу: # sudo -u postgres reindexdb -U postgres -d basa01
Удалить базу данных: # sudo -u postgres psql -U postgres -c &quot;DROP DATABASE basa01&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extensions" tabindex="-1"><a class="header-anchor" href="#extensions" aria-hidden="true">#</a> Extensions</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM pg_available_extensions WHERE name = &#39;postgis&#39; OR NAME = &#39;timescaledb&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),c={id:"postgis",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#postgis","aria-hidden":"true"},"#",-1),g={href:"https://postgis.net/",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Upgrade
Stop Postgres
Extract archive postgis to postgres
Start Postgres
ALTER EXTENSION postgis UPDATE TO &quot;3.2.3&quot;; -- Update to version 3.2.3 - PostGIS version
ALTER EXTENSION postgis UPDATE; -- Update to latest installed version
ALTER EXTENSION postgis_raster UPDATE;
ALTER EXTENSION postgis_sfcgal UPDATE;
ALTER EXTENSION postgis_tiger_geocoder UPDATE;
ALTER EXTENSION postgis_topology UPDATE;
ALTER EXTENSION address_standardizer UPDATE;
ALTER EXTENSION pgrouting UPDATE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>?Delete old versions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),p={id:"timescaldb",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#timescaldb","aria-hidden":"true"},"#",-1),h={href:"https://docs.timescale.com/self-hosted/latest/install/",target:"_blank",rel:"noopener noreferrer"},x=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Upgrade
Stop Postgres
Add to env path C:\\Program Files\\PostgreSQL\\14\\bin
run setup.exe
Start Postgres
Обновить через ALTER EXTENSION timescaledb UPDATE; не получилось, удалил расширение, перезапустил сервер и создал расширение
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cmd.exe /c chcp 1251
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade" aria-hidden="true">#</a> Upgrade</h2><h3 id="via-pg-dumpall" tabindex="-1"><a class="header-anchor" href="#via-pg-dumpall" aria-hidden="true">#</a> via pg_dumpall</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. pg_dumpall &gt; outputfile
2. pg_ctl stop (/etc/rc.d/init.d/postgresql stop)
3. mv /usr/local/pgsql /usr/local/pgsql.old
4. Install the new version of PostgreSQL
5. /usr/local/pgsql/bin/initdb -D /usr/local/pgsql/data
6. Restore your previous pg_hba.conf and any postgresql.conf modifications.
7. /usr/local/pgsql/bin/postgres -D /usr/local/pgsql/data
8. /usr/local/pgsql/bin/psql -d postgres -f outputfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="via-pg-upgrade" tabindex="-1"><a class="header-anchor" href="#via-pg-upgrade" aria-hidden="true">#</a> via pg_upgrade</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. mv /usr/local/pgsql /usr/local/pgsql.old
2. Install the new version of PostgreSQL
3. Init new cluster: /usr/local/pgsql/bin/initdb -D /usr/local/pgsql/data

4. Stop both servers
    pg_ctl -D /opt/PostgreSQL/9.6 stop
    pg_ctl -D /opt/PostgreSQL/15 stop

5.
    pg_upgrade.exe
            --old-datadir &quot;C:/Program Files/PostgreSQL/9.6/data&quot;
            --new-datadir &quot;C:/Program Files/PostgreSQL/15/data&quot;
            --old-bindir &quot;C:/Program Files/PostgreSQL/9.6/bin&quot;
            --new-bindir &quot;C:/Program Files/PostgreSQL/15/bin&quot;

    pg_upgrade.exe -U postgres
            --old-datadir &quot;C:/Program Files/PostgreSQL/9.6/data&quot;
            --new-datadir &quot;C:/Program Files/PostgreSQL/15/data&quot;
            --old-bindir &quot;C:/Program Files/PostgreSQL/9.6/bin&quot;
            --new-bindir &quot;C:/Program Files/PostgreSQL/15/bin&quot;

6.
    &quot;d:/+CLOUD+/syncthing-data/+SERVER+/pgsql13/bin/vacuumdb&quot; -U PaRa3uT --all --analyze-only
    PostgreSQL\\15\\bin\\vacuumdb.exe -U postgres --all --analyze-in-stages

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="with-extensions" tabindex="-1"><a class="header-anchor" href="#with-extensions" aria-hidden="true">#</a> with extensions</h3>`,9);function q(E,_){const n=t("ExternalLinkIcon");return l(),r("div",null,[u,e("h3",c,[v,s(),e("a",g,[s("PostGIS"),a(n)])]),b,e("h3",p,[m,s(),e("a",h,[s("TimescalDB"),a(n)])]),x])}const S=d(o,[["render",q],["__file","postgresql.html.vue"]]);export{S as default};
