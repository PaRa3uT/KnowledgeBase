import{_ as i,r as a,o as s,c as o,a as e,b as t,d,e as r}from"./app-9ee1dfa4.js";const c={},l=e("h1",{id:"mikrotik",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mikrotik","aria-hidden":"true"},"#"),t(" Mikrotik")],-1),p={href:"https://4pda.to/forum/index.php?showtopic=624146&st=4020",target:"_blank",rel:"noopener noreferrer"},u=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Установка LAN адреса: IP -&gt; Addresses
Изменение сетевого имени: System -&gt; Identity (/system identity set &quot;whatever&quot;)
Настройка WAN (DHCP): IP -&gt; DHCP client
Настройка DNS: IP -&gt; DNS

Настройка WAN (Static)
    IP -&gt; Addresses
    Add:
        address = x.x.x.x
        Interface = WAN
    IP -&gt; Routes
    Add:
        Dst-address = 0.0.0.0/0
        Gateway = &lt;provider_gateway&gt;

Настройка LAN DHCP Server:
    IP -&gt; DHCP Server -&gt; Networks
    IP -&gt; Pool

Backup configuration:
    BIN:
        Files -&gt; Backup
    TXT:
        New Terminal -&gt; &quot;export file=config_backup_20170403.rsc&quot; 
        Files -&gt; &quot;config_backup_20170403.rsc&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>обновляем прошивку на последнюю System -&gt; RouterBOARD -&gt; Upgrade System -&gt; Reboot -------------------------------- System -&gt; Packages -&gt; Check For Updates -&gt; Download and Install -------------------------------- /system package update install</p><p>для повышения безопасности, — отключить ненужную функциональность (System → Packages): ipv6 (IPv6) wireless (Wi-Fi) hotspot ppp IP -&gt; Services отключи ненужные службы: ?api ?api-ssl ftp www telnet /ip service disable ftp открывать только SSH и Winbox с определенных адресов (по умолчанию доступен ли из интернета?), остальное — disable Так же проверь, не включены ли службы IP: Web Proxy, IP → UPnP, IP → Socks: /ip proxy /ip upnp /ip socks</p><ul><li>идем в Systen -&gt; scripts удаляем mikrotik.php</li><li>идем в sheduler удаляем не наши скрипты</li><li>идем в firewall, скорее всего отключены правила DROP</li><li>проверяем SOCKS</li><li>меняем порт winbox на нестандартный, естественно если используете доступ с внешки, то правим новый порт в файрволе</li><li>меняем пароли на вход и если есть pptp</li><li>можно еще забанить 95.154.216.168</li></ul><p>права групп подробнее: telnet, ssh, ftp, winbox, web, api, romon, dude, tikapp — понятны по названию. Разрешают юзеру подключаться по указанным протоколам; local — открывает доступ к роутеру через консоль. При отключении так же заберет право открывать терминал внутри Winbox; reboot — право на перезагрузку; read, write — права на чтение или запись; sniff — права на исполнение встроенного аналога tcpdump (tools → sniffer); test — запуск инструментов траблшутинга (ping, traceroute, bandwidth-test, wireless scan, snooper); password — право менять собственный пароль; policy — право управлять учетными записями и группами.</p><p>Проброс портов: /ip firewall nat add action=dst-nat chain=dstnat comment=&quot;7777-7778 tcp for 103&quot; dst-port=7777-7778 <br> in-interface=pppoe-out1 protocol=tcp to-addresses=192.168.0.103 to-ports=<br> 7777-7778</p><pre><code>/ip firewall nat add action=dst-nat chain=dstnat comment=&quot;7777-7778 udp for 103&quot; dst-port=7777-7778 \\
in-interface=pppoe-out1 protocol=udp to-addresses=192.168.0.103 to-ports=\\
7777-7778
RDP:
    /ip firewall nat add action=dst-nat chain=dstnat comment=&quot;RDP for 103&quot; dst-port=3389 \\
    in-interface=pppoe-out1 protocol=tcp to-addresses=192.168.0.103 to-ports=3389
</code></pre><p>/system package update check-for-updates :delay 5 :if ( [/system package update get installed-version] != [/system package update get latest-version] ) do={ /system package update download /system reboot }</p><p>:if ( [/system routerboard get current-firmware] != [/system routerboard get upgrade-firmware] ) do={ /system routerboard upgrade /system reboot }</p><h2 id="firewall-rules" tabindex="-1"><a class="header-anchor" href="#firewall-rules" aria-hidden="true">#</a> Firewall rules:</h2><pre><code>Разрешаем пинги
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
</code></pre><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><p>Небольшой комментарий по работе SafeMode</p><ol><li>Что бы он сработал нужно подключаться именно УДАЛЕННО, а не запускать винбокс с удаленного сервера, на который зашли по РДП 😃 Неоднократно сталкивался с подобным &quot;стилем работы&quot; у новичков</li><li>Обязательно проверьте не открыт-ли винбокс еще где-то. Например в system, scripts, вкладка jobs (учтите, что каждый запущенный в Вашей сессии winbox терминал будет отображаться как отдельная сессия, плюс там будут отображаться запущенные на данный момент скрипты). Если в jobs&#39;ах висит несколько сессий, проверьте подключения на firewall, вкладке connections. Эта проблема может встречаться, когда кто-то из пункта 1 запустил винбокс в удаленной сети и просит Вас помочь посмотреть что у него не получается. Если запущено более одной сессии, то safemode не сработает.</li></ol><p>SafeMode хранит порядка 100 изменений. Превысив эту планку они все откатываются обратно. т.е. сделали важное изменение, проверили, отжали/нажали сейфмод. Третий момент из практики командной работы. Если подключаемся на сервер и выидим кем-то забытый не выключенный винбокс, обязательно возмущаемся и срочно его закрываем. Но! Нужно обращать внимание - не выдаст-ли он окошка вида: &quot;Вы точно хотите закрыть сессию и откатить все изменения?&quot; 😃 Однажды так на автопилоте закрыл чужую сессию с кнопкой SafeMod нажатой и откатил свеженастроенных двух провайдеров (хорошо, что это было не удаленно). P.S. Еще лайфхак с курсов. Если нужно удаленно рестартануть основной и единственный провайдерский интерфейс, то нажав на крестик (disable) мы отрубим интерфейс и связь прервется. В такой критичной ситуации надо нажимать на галочку (enable). Она на самом деле делает disable и сразу за ним enable. Так интерфейс перезапустится. Но сначала желательно проверить на установленной версии RouterOS на другом тестовом роутере. И делать только в крайнем случае - вдруг интерфейс не поднимется по каким-то причинам?)</p>`,15);function m(v,b){const n=a("ExternalLinkIcon");return s(),o("div",null,[l,e("p",null,[e("a",p,[t("Тема на 4PDA"),d(n)]),t(" https://mikrotik.wiki/wiki/")]),u])}const f=i(c,[["render",m],["__file","mikrotik.html.vue"]]);export{f as default};
