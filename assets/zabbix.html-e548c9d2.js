import{_ as e,o as i,c as t,e as n}from"./app-9ee1dfa4.js";const s={},a=n(`<h1 id="zabbix" tabindex="-1"><a class="header-anchor" href="#zabbix" aria-hidden="true">#</a> Zabbix</h1><p>Предпочтительнее выбирать активный агент<br> Что бы в элементах данных отбрасывались не изменённые данные, в &quot;Элементах данных&quot; добавляем предобработку &quot;Тротлинг&quot; -&gt; &quot;Отбрасывать неизменившиеся с периодическим контролем&quot; = 86400<br> В триггерах в имени {HOST.HOST}</p><p>Перезапуск подов в k8s</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ЭД  
  Имя  
    Kube перезапуск подов
  Ключ  
    system.run[&quot;sudo kubectl get pods -n mts-ermir-prod-dmz --sort-by=&#39;.metadata.creationTimestamp&#39; -o jsonpath=&#39;{range .items[*]} {.metadata.creationTimestamp}{\\&quot;\\n\\&quot;}{end}&#39;&quot;]
Триггер  
  Имя  
    Произошёл рестарт pods на {HOST.HOST}
  Выражение  
    {Template app Kube:system.run[&quot;sudo kubectl get pods -n mts-ermir-prod-dmz --sort-by=&#39;.metadata.creationTimestamp&#39; -o jsonpath=&#39;{range .items[*]} {.metadata.creationTimestamp}{\\&quot;\\n\\&quot;}{end}&#39;&quot;].diff()}=1  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Отключить автообнаружение windows сервисов CDPUserSvc_*, WpnUserService_*
Administration -&gt; General -&gt; Regular expressions -&gt; Windows service names for discovery   ^(MMCSS|gupdate|SysmonLog|clr_optimization_v2.0.50727_32|clr_optimization_v4.0.30319_32|WpnUserService.*|CDPUserSvc.*|CDPUserSvc_*|WpnUserService_*)$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[a];function r(o,c){return i(),t("div",null,d)}const m=e(s,[["render",r],["__file","zabbix.html.vue"]]);export{m as default};
