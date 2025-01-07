import{_ as e,c as n,b as a,o as i}from"./app-BsHIgujo.js";const l={};function t(d,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h1 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql"><span>PostgreSQL</span></a></h1><p><a href="https://pgconfigurator.cybertec.at/" target="_blank" rel="noopener noreferrer">PostgreSQL Configurator</a><a href="https://www.pgconfig.org" target="_blank" rel="noopener noreferrer">PostgreSQL Configuration Builder</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">\\l (listing databases)</span>
<span class="line">\\c &lt;database_name&gt; (switching database)</span>
<span class="line">\\dt (listing tables)</span>
<span class="line">\\dx (ist of installed extensions)</span>
<span class="line">Просмотр списка баз: # sudo -u postgres psql -U postgres -l</span>
<span class="line">Создание текстового дампа базы данных: # sudo -u postgres pg_dump -U postgres basa01 &gt; ~/basa01.sql</span>
<span class="line">Сжимаем дамп на лету с помощью pigz (умеет жать всеми ядрами): # sudo -u postgres pg_dump -U postgres basa01 | pigz &gt; ~/basa01.sql.gz</span>
<span class="line">Восстановление базы данных в новую базу (сначала создаём её):</span>
<span class="line">  # sudo -u postgres createdb -U postgres -T template0 basa02</span>
<span class="line">  # sudo -u postgres psql -U postgres basa02 &lt; ~/basa01.sql</span>
<span class="line">Выход из консоли psql (часто забываю): $ \\q</span>
<span class="line">Создать пользователя: # sudo -u postgres createuser -U postgres zabbix </span>
<span class="line">Задать пароль: # sudo -u postgres psql -U postgres -c &quot;ALTER USER zabbix PASSWORD &#39;secpasswd&#39;&quot; </span>
<span class="line">Посмотреть список пользователей: # sudo -u postgres psql -U postgres -c &quot;select * from pg_user&quot; </span>
<span class="line">Дать полные права на базу: # sudo -u postgres psql -U postgres -c &quot;GRANT ALL PRIVILEGES ON DATABASE zabbixdb to zabbix&quot;</span>
<span class="line">Назначить пользователя владельцем базы: # sudo -u postgres psql -U postgres -c &quot;ALTER DATABASE zabbixdb OWNER TO zabbix&quot; </span>
<span class="line">Выполнить очистку (-f) и анализ (-z) базы данных Postgres Pro: # sudo -u postgres vacuumdb -U postgres -f -z -d basa01 </span>
<span class="line">Переиндексировать базу: # sudo -u postgres reindexdb -U postgres -d basa01</span>
<span class="line">Удалить базу данных: # sudo -u postgres psql -U postgres -c &quot;DROP DATABASE basa01&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="backup" tabindex="-1"><a class="header-anchor" href="#backup"><span>Backup</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">pg_dump -d database_name -F p -f dump.sql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="extensions" tabindex="-1"><a class="header-anchor" href="#extensions"><span>Extensions</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT * FROM pg_available_extensions WHERE name = &#39;postgis&#39; OR NAME = &#39;timescaledb&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="postgis" tabindex="-1"><a class="header-anchor" href="#postgis"><span><a href="https://postgis.net/" target="_blank" rel="noopener noreferrer">PostGIS</a></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Upgrade</span>
<span class="line">Stop Postgres</span>
<span class="line">Extract archive postgis to postgres</span>
<span class="line">Start Postgres</span>
<span class="line">ALTER EXTENSION postgis UPDATE TO &quot;3.2.3&quot;; -- Update to version 3.2.3 - PostGIS version</span>
<span class="line">ALTER EXTENSION postgis UPDATE; -- Update to latest installed version</span>
<span class="line">ALTER EXTENSION postgis_raster UPDATE;</span>
<span class="line">ALTER EXTENSION postgis_sfcgal UPDATE;</span>
<span class="line">ALTER EXTENSION postgis_tiger_geocoder UPDATE;</span>
<span class="line">ALTER EXTENSION postgis_topology UPDATE;</span>
<span class="line">ALTER EXTENSION address_standardizer UPDATE;</span>
<span class="line">ALTER EXTENSION pgrouting UPDATE;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">?Delete old versions</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="timescaldb" tabindex="-1"><a class="header-anchor" href="#timescaldb"><span><a href="https://docs.timescale.com/self-hosted/latest/install/" target="_blank" rel="noopener noreferrer">TimescalDB</a></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Upgrade</span>
<span class="line">Stop Postgres</span>
<span class="line">Add to env path C:\\Program Files\\PostgreSQL\\14\\bin</span>
<span class="line">run setup.exe</span>
<span class="line">Start Postgres</span>
<span class="line">Обновить через ALTER EXTENSION timescaledb UPDATE; не получилось, удалил расширение, перезапустил сервер и создал расширение</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cmd.exe /c chcp 1251</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade"><span>Upgrade</span></a></h2><h3 id="via-pg-dumpall" tabindex="-1"><a class="header-anchor" href="#via-pg-dumpall"><span>via pg_dumpall</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. pg_dumpall &gt; outputfile</span>
<span class="line">2. pg_ctl stop (/etc/rc.d/init.d/postgresql stop)</span>
<span class="line">3. mv /usr/local/pgsql /usr/local/pgsql.old</span>
<span class="line">4. Install the new version of PostgreSQL</span>
<span class="line">5. /usr/local/pgsql/bin/initdb -D /usr/local/pgsql/data</span>
<span class="line">6. Restore your previous pg_hba.conf and any postgresql.conf modifications.</span>
<span class="line">7. /usr/local/pgsql/bin/postgres -D /usr/local/pgsql/data</span>
<span class="line">8. /usr/local/pgsql/bin/psql -d postgres -f outputfile</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="via-pg-upgrade" tabindex="-1"><a class="header-anchor" href="#via-pg-upgrade"><span>via pg_upgrade</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. mv /usr/local/pgsql /usr/local/pgsql.old</span>
<span class="line">2. Install the new version of PostgreSQL</span>
<span class="line">3. Init new cluster: /usr/local/pgsql/bin/initdb -D /usr/local/pgsql/data</span>
<span class="line"></span>
<span class="line">4. Stop both servers</span>
<span class="line">    pg_ctl -D /opt/PostgreSQL/9.6 stop</span>
<span class="line">    pg_ctl -D /opt/PostgreSQL/15 stop</span>
<span class="line"></span>
<span class="line">5.</span>
<span class="line">    pg_upgrade.exe</span>
<span class="line">            --old-datadir &quot;C:/Program Files/PostgreSQL/9.6/data&quot;</span>
<span class="line">            --new-datadir &quot;C:/Program Files/PostgreSQL/15/data&quot;</span>
<span class="line">            --old-bindir &quot;C:/Program Files/PostgreSQL/9.6/bin&quot;</span>
<span class="line">            --new-bindir &quot;C:/Program Files/PostgreSQL/15/bin&quot;</span>
<span class="line"></span>
<span class="line">    pg_upgrade.exe -U postgres</span>
<span class="line">            --old-datadir &quot;C:/Program Files/PostgreSQL/9.6/data&quot;</span>
<span class="line">            --new-datadir &quot;C:/Program Files/PostgreSQL/15/data&quot;</span>
<span class="line">            --old-bindir &quot;C:/Program Files/PostgreSQL/9.6/bin&quot;</span>
<span class="line">            --new-bindir &quot;C:/Program Files/PostgreSQL/15/bin&quot;</span>
<span class="line"></span>
<span class="line">6.</span>
<span class="line">    &quot;d:/+CLOUD+/syncthing-data/+SERVER+/pgsql13/bin/vacuumdb&quot; -U PaRa3uT --all --analyze-only</span>
<span class="line">    PostgreSQL\\15\\bin\\vacuumdb.exe -U postgres --all --analyze-in-stages</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="with-extensions" tabindex="-1"><a class="header-anchor" href="#with-extensions"><span>with extensions</span></a></h3>`,20)]))}const p=e(l,[["render",t],["__file","postgresql.html.vue"]]),c=JSON.parse('{"path":"/unsorted/postgresql.html","title":"PostgreSQL","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Backup","slug":"backup","link":"#backup","children":[]},{"level":2,"title":"Extensions","slug":"extensions","link":"#extensions","children":[{"level":3,"title":"PostGIS","slug":"postgis","link":"#postgis","children":[]},{"level":3,"title":"TimescalDB","slug":"timescaldb","link":"#timescaldb","children":[]}]},{"level":2,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":2,"title":"Upgrade","slug":"upgrade","link":"#upgrade","children":[{"level":3,"title":"via pg_dumpall","slug":"via-pg-dumpall","link":"#via-pg-dumpall","children":[]},{"level":3,"title":"via pg_upgrade","slug":"via-pg-upgrade","link":"#via-pg-upgrade","children":[]},{"level":3,"title":"with extensions","slug":"with-extensions","link":"#with-extensions","children":[]}]}],"git":{"updatedTime":1736250118000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":4,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"unsorted/postgresql.md"}');export{p as comp,c as data};
