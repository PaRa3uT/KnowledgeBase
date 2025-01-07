import{_ as e,c as a,b as n,o as l}from"./app-BsHIgujo.js";const i={};function t(d,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="mariadb-mysql" tabindex="-1"><a class="header-anchor" href="#mariadb-mysql"><span>MariaDB/MySQL</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    /usr/bin/mysqldump -u root -p&quot;password&quot; db_name | gzip &gt; /opt/backup/mysql/filename.sql.gz</span>
<span class="line">    </span>
<span class="line">    SHOW DATABASES;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Copy Database</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mysqldump -u root -p db1 &gt; dump.sql</span>
<span class="line">mysqladmin -u root -p create db2</span>
<span class="line">mysql -u root -p db2 &lt; dump.sql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create User</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mysql&gt; grant all privileges on DBNAME.* to USERNAME@localhost identified by &#39;PASSWORD&#39;;</span>
<span class="line">mysql&gt; grant all privileges on DBNAME.* to USERNAME@&quot;%&quot; identified by &#39;PASSWORD&#39;;</span>
<span class="line">mysql&gt; flush privileges;</span>
<span class="line"> </span>
<span class="line">--all DB</span>
<span class="line">mysql&gt; grant all privileges on *.* to USERNAME@localhost identified by &#39;PASSWORD&#39;;</span>
<span class="line">mysql&gt; grant all privileges on *.* to USERNAME@&quot;%&quot; identified by &#39;PASSWORD&#39;;</span>
<span class="line">mysql&gt; flush privileges;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Delete User</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mysql&gt; drop user USERNAME;</span>
<span class="line">or</span>
<span class="line">mysql&gt; delete from mysql.user where user = &#39;USERNAME&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Change Password</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">--User</span>
<span class="line">mysql&gt; set password for USER@&quot;%&quot; = password(&#39;PASSWORD&#39;);</span>
<span class="line">mysql&gt; set password for USER@localhost = password(&#39;PASSWORD&#39;);</span>
<span class="line"> </span>
<span class="line">--root</span>
<span class="line">mysql&gt; set password for root=password(&#39;PASSWORD&#39;);</span>
<span class="line">mysql&gt; set password for root@localhost=password(&#39;PASSWORD&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSV Import / Export</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ERROR 1045 (28000) at line 1: Access denied for user &#39;USER&#39;@&#39;localhost&#39; (using password: YES)</span>
<span class="line">mysql&gt; grant file on *.* to USER@localhost;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Tips</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">--Create table as same data and type</span>
<span class="line">mysql&gt; create  table newtable as select * from orgtable;</span>
<span class="line"> </span>
<span class="line">--Create table with same type. data is null.</span>
<span class="line">mysql&gt; create  table newtable as select * from orgtable where id is null;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Export to CSV</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># mysql -uUSER -pPASS DATABASE -e &quot;select * from TABLE;&quot; | sed -e &#39;s/^/&quot;/g&#39; | sed -e &#39;s/$/&quot;/g&#39; | sed -e &#39;s/\\t/&quot;,&quot;/g&#39; &gt; /tmp/test.csv</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,16)]))}const p=e(i,[["render",t],["__file","mysql.html.vue"]]),c=JSON.parse('{"path":"/unsorted/mysql.html","title":"MariaDB/MySQL","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1681201131000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":1,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"unsorted/mysql.md"}');export{p as comp,c as data};
