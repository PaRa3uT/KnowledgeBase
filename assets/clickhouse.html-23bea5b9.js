import{_ as a,r as n,o as c,c as d,a as e,b as t,d as i,e as o}from"./app-9ee1dfa4.js";const l={},r={id:"clickhouse",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#clickhouse","aria-hidden":"true"},"#",-1),_={href:"https://clickhouse.com/",target:"_blank",rel:"noopener noreferrer"},m=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>clickhouse-client --host=... --port=... --user=... --password=...
SHOW DATABASES;
SHOW TABLES FROM &lt;db_name&gt;
DESCRIBE &lt;table_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Данные по компрессии данных
SELECT toDate(modification_date) dt, column_data_uncompressed_bytes  / column_data_compressed_bytes  AS ratio FROM system.parts_columns WHERE database=? AND table=? AND column=? GROUP BY dt ORDER BY dt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(v,b){const s=n("ExternalLinkIcon");return c(),d("div",null,[e("h1",r,[u,t(),e("a",_,[t("ClickHouse"),i(s)])]),m])}const x=a(l,[["render",h],["__file","clickhouse.html.vue"]]);export{x as default};
