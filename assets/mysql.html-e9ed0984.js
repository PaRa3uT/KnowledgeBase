import{_ as e,o as s,c as i,e as l}from"./app-9ee1dfa4.js";const a={},d=l(`<h1 id="mariadb-mysql" tabindex="-1"><a class="header-anchor" href="#mariadb-mysql" aria-hidden="true">#</a> MariaDB/MySQL</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    /usr/bin/mysqldump -u root -p&quot;password&quot; db_name | gzip &gt; /opt/backup/mysql/filename.sql.gz
    
    SHOW DATABASES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Copy Database</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysqldump -u root -p db1 &gt; dump.sql
mysqladmin -u root -p create db2
mysql -u root -p db2 &lt; dump.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create User</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; grant all privileges on DBNAME.* to USERNAME@localhost identified by &#39;PASSWORD&#39;;
mysql&gt; grant all privileges on DBNAME.* to USERNAME@&quot;%&quot; identified by &#39;PASSWORD&#39;;
mysql&gt; flush privileges;
 
--all DB
mysql&gt; grant all privileges on *.* to USERNAME@localhost identified by &#39;PASSWORD&#39;;
mysql&gt; grant all privileges on *.* to USERNAME@&quot;%&quot; identified by &#39;PASSWORD&#39;;
mysql&gt; flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Delete User</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; drop user USERNAME;
or
mysql&gt; delete from mysql.user where user = &#39;USERNAME&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Change Password</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--User
mysql&gt; set password for USER@&quot;%&quot; = password(&#39;PASSWORD&#39;);
mysql&gt; set password for USER@localhost = password(&#39;PASSWORD&#39;);
 
--root
mysql&gt; set password for root=password(&#39;PASSWORD&#39;);
mysql&gt; set password for root@localhost=password(&#39;PASSWORD&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSV Import / Export</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ERROR 1045 (28000) at line 1: Access denied for user &#39;USER&#39;@&#39;localhost&#39; (using password: YES)
mysql&gt; grant file on *.* to USER@localhost;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Tips</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--Create table as same data and type
mysql&gt; create  table newtable as select * from orgtable;
 
--Create table with same type. data is null.
mysql&gt; create  table newtable as select * from orgtable where id is null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Export to CSV</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># mysql -uUSER -pPASS DATABASE -e &quot;select * from TABLE;&quot; | sed -e &#39;s/^/&quot;/g&#39; | sed -e &#39;s/$/&quot;/g&#39; | sed -e &#39;s/\\t/&quot;,&quot;/g&#39; &gt; /tmp/test.csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),n=[d];function t(r,o){return s(),i("div",null,n)}const c=e(a,[["render",t],["__file","mysql.html.vue"]]);export{c as default};
