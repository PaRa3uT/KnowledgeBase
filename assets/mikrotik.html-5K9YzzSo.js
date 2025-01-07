import{_ as s,c as n,b as a,o as i}from"./app-BsHIgujo.js";const t={};function l(r,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="mikrotik" tabindex="-1"><a class="header-anchor" href="#mikrotik"><span>Mikrotik</span></a></h1><p><a href="https://4pda.to/forum/index.php?showtopic=624146&amp;st=4020" target="_blank" rel="noopener noreferrer">Тема на 4PDA</a> https://mikrotik.wiki/wiki/</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Установка LAN адреса: IP -&gt; Addresses</span>
<span class="line">Изменение сетевого имени: System -&gt; Identity (/system identity set &quot;whatever&quot;)</span>
<span class="line">Настройка WAN (DHCP): IP -&gt; DHCP client</span>
<span class="line">Настройка DNS: IP -&gt; DNS</span>
<span class="line"></span>
<span class="line">Настройка WAN (Static)</span>
<span class="line">    IP -&gt; Addresses</span>
<span class="line">    Add:</span>
<span class="line">        address = x.x.x.x</span>
<span class="line">        Interface = WAN</span>
<span class="line">    IP -&gt; Routes</span>
<span class="line">    Add:</span>
<span class="line">        Dst-address = 0.0.0.0/0</span>
<span class="line">        Gateway = &lt;provider_gateway&gt;</span>
<span class="line"></span>
<span class="line">Настройка LAN DHCP Server:</span>
<span class="line">    IP -&gt; DHCP Server -&gt; Networks</span>
<span class="line">    IP -&gt; Pool</span>
<span class="line"></span>
<span class="line">Backup configuration:</span>
<span class="line">    BIN:</span>
<span class="line">        Files -&gt; Backup (system backup save name=test)</span>
<span class="line">    TXT:</span>
<span class="line">        New Terminal -&gt; &quot;export file=config_backup_20170403.rsc&quot;</span>
<span class="line">        New Terminal -&gt; &quot;export file=config_backup_20170403.rsc verbose=yes&quot;</span>
<span class="line">        Files -&gt; &quot;config_backup_20170403.rsc&quot;</span>
<span class="line"></span>
<span class="line">Restore configuration:</span>
<span class="line">    BIN:</span>
<span class="line">        (system backup load name=test)</span>
<span class="line">    TXT:</span>
<span class="line">        import file=test.rsc</span>
<span class="line">        import file=test.rsc verbose=yes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>обновляем прошивку на последнюю System -&gt; RouterBOARD -&gt; Upgrade System -&gt; Reboot -------------------------------- System -&gt; Packages -&gt; Check For Updates -&gt; Download and Install -------------------------------- /system package update install</p><p>для повышения безопасности, — отключить ненужную функциональность (System → Packages): ipv6 (IPv6) wireless (Wi-Fi) hotspot ppp IP -&gt; Services отключи ненужные службы: ?api ?api-ssl ftp www telnet /ip service disable ftp /ip service disable telnet,ftp,www,api открывать только SSH и Winbox с определенных адресов (по умолчанию доступен ли из интернета?), остальное — disable /ip service set ssh port=2200 (сменить порт сервиса) /ip service set winbox address=192.168.88.0/24 (разрешать подключения к сервису только с определённых адресов) Так же проверь, не включены ли службы IP: Web Proxy, IP → UPnP, IP → Socks: /ip proxy /ip upnp /ip socks</p><ul><li>идем в Systen -&gt; scripts удаляем mikrotik.php</li><li>идем в sheduler удаляем не наши скрипты</li><li>идем в firewall, скорее всего отключены правила DROP</li><li>проверяем SOCKS</li><li>меняем порт winbox на нестандартный, естественно если используете доступ с внешки, то правим новый порт в файрволе</li><li>меняем пароли на вход и если есть pptp</li><li>можно еще забанить 95.154.216.168</li></ul><p>права групп подробнее: telnet, ssh, ftp, winbox, web, api, romon, dude, tikapp — понятны по названию. Разрешают юзеру подключаться по указанным протоколам; local — открывает доступ к роутеру через консоль. При отключении так же заберет право открывать терминал внутри Winbox; reboot — право на перезагрузку; read, write — права на чтение или запись; sniff — права на исполнение встроенного аналога tcpdump (tools → sniffer); test — запуск инструментов траблшутинга (ping, traceroute, bandwidth-test, wireless scan, snooper); password — право менять собственный пароль; policy — право управлять учетными записями и группами.</p><p>Проброс портов: /ip firewall nat add action=dst-nat chain=dstnat comment=&quot;7777-7778 tcp for 103&quot; dst-port=7777-7778 <br> in-interface=pppoe-out1 protocol=tcp to-addresses=192.168.0.103 to-ports=<br> 7777-7778</p><pre><code>/ip firewall nat add action=dst-nat chain=dstnat comment=&quot;7777-7778 udp for 103&quot; dst-port=7777-7778 \\
in-interface=pppoe-out1 protocol=udp to-addresses=192.168.0.103 to-ports=\\
7777-7778
RDP:
    /ip firewall nat add action=dst-nat chain=dstnat comment=&quot;RDP for 103&quot; dst-port=3389 \\
    in-interface=pppoe-out1 protocol=tcp to-addresses=192.168.0.103 to-ports=3389
</code></pre><p>/system package update check-for-updates :delay 5 :if ( [/system package update get installed-version] != [/system package update get latest-version] ) do={ /system package update download /system reboot }</p><p>:if ( [/system routerboard get current-firmware] != [/system routerboard get upgrade-firmware] ) do={ /system routerboard upgrade /system reboot }</p><h2 id="as-second-router-in-lan" tabindex="-1"><a class="header-anchor" href="#as-second-router-in-lan"><span>As second router in LAN</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Reset configuration: with no default</span>
<span class="line">/system reset-configuration no-defaults=yes skip-backup=yes</span>
<span class="line"></span>
<span class="line">Create bridge and add all interfaces</span>
<span class="line">Create DHCP client on created bridge</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dns-over-https" tabindex="-1"><a class="header-anchor" href="#dns-over-https"><span>DNS-over-HTTPS</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/tool fetch url=https://curl.se/ca/cacert.pem (загрузка сертификатов)</span>
<span class="line">/certificate import file-name=cacert.pem passphrase=&quot;&quot; (импорт сертификатов)</span>
<span class="line">/ip dns set servers=195.133.25.16 (Настройка DNS серверов)</span>
<span class="line">/ip dns set use-doh-server=https://dns.comss.one/mikrotik verify-doh-cert=yes (Включение DoH)</span>
<span class="line">/ip dns print (проверка настроек)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands"><span>Commands</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/interface print (список интерфейсов)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="firewall-rules" tabindex="-1"><a class="header-anchor" href="#firewall-rules"><span>Firewall rules:</span></a></h2><pre><code>Разрешаем пинги
add chain=input action=accept protocol=icmp
add chain=forward action=accept protocol=icmp

Разрешаем установленные подключения
add chain=input action=accept connection-state=established
add chain=forward action=accept connection-state=established

Разрешаем связанные подключения
add chain=input action=accept connection-state=related
add chain=forward action=accept connection-state=related

Разрешаем все подключения из нашей локальной сети
add chain=input action=accept src-address=192.168.1.0/24 in-interface=!ether2

Разрешаем входящие подключения для торрента
add chain=forward action=accept protocol=tcp in-interface=ether2 dst-port=45000

Обрубаем инвалидные подключения
add chain=input action=drop connection-state=invalid
add chain=forward action=drop connection-state=invalid

Обрубаем все остальные входящие подключения
add chain=input action=drop in-interface=ether2

Разрешаем доступ из локальной сети в интернет
add chain=forward action=accept in-interface=!ether2 out-interface=ether2

Обрубаем все остальные подключения
add chain=forward action=drop
</code></pre><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2><p>Небольшой комментарий по работе SafeMode</p><ol><li>Что бы он сработал нужно подключаться именно УДАЛЕННО, а не запускать винбокс с удаленного сервера, на который зашли по РДП 😃 Неоднократно сталкивался с подобным &quot;стилем работы&quot; у новичков</li><li>Обязательно проверьте не открыт-ли винбокс еще где-то. Например в system, scripts, вкладка jobs (учтите, что каждый запущенный в Вашей сессии winbox терминал будет отображаться как отдельная сессия, плюс там будут отображаться запущенные на данный момент скрипты). Если в jobs&#39;ах висит несколько сессий, проверьте подключения на firewall, вкладке connections. Эта проблема может встречаться, когда кто-то из пункта 1 запустил винбокс в удаленной сети и просит Вас помочь посмотреть что у него не получается. Если запущено более одной сессии, то safemode не сработает.</li></ol><p>SafeMode хранит порядка 100 изменений. Превысив эту планку они все откатываются обратно. т.е. сделали важное изменение, проверили, отжали/нажали сейфмод. Третий момент из практики командной работы. Если подключаемся на сервер и выидим кем-то забытый не выключенный винбокс, обязательно возмущаемся и срочно его закрываем. Но! Нужно обращать внимание - не выдаст-ли он окошка вида: &quot;Вы точно хотите закрыть сессию и откатить все изменения?&quot; 😃 Однажды так на автопилоте закрыл чужую сессию с кнопкой SafeMod нажатой и откатил свеженастроенных двух провайдеров (хорошо, что это было не удаленно). P.S. Еще лайфхак с курсов. Если нужно удаленно рестартануть основной и единственный провайдерский интерфейс, то нажав на крестик (disable) мы отрубим интерфейс и связь прервется. В такой критичной ситуации надо нажимать на галочку (enable). Она на самом деле делает disable и сразу за ним enable. Так интерфейс перезапустится. Но сначала желательно проверить на установленной версии RouterOS на другом тестовом роутере. И делать только в крайнем случае - вдруг интерфейс не поднимется по каким-то причинам?)</p>`,23)]))}const c=s(t,[["render",l],["__file","mikrotik.html.vue"]]),p=JSON.parse('{"path":"/os/mikrotik.html","title":"Mikrotik","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"As second router in LAN","slug":"as-second-router-in-lan","link":"#as-second-router-in-lan","children":[]},{"level":2,"title":"DNS-over-HTTPS","slug":"dns-over-https","link":"#dns-over-https","children":[]},{"level":2,"title":"Commands","slug":"commands","link":"#commands","children":[]},{"level":2,"title":"Firewall rules:","slug":"firewall-rules","link":"#firewall-rules","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"git":{"updatedTime":1736250118000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":2,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"os/mikrotik.md"}');export{c as comp,p as data};
