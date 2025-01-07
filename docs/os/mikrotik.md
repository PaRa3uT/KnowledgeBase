# Mikrotik
[Тема на 4PDA](https://4pda.to/forum/index.php?showtopic=624146&st=4020)
https://mikrotik.wiki/wiki/  

```
Установка LAN адреса: IP -> Addresses
Изменение сетевого имени: System -> Identity (/system identity set "whatever")
Настройка WAN (DHCP): IP -> DHCP client
Настройка DNS: IP -> DNS

Настройка WAN (Static)
    IP -> Addresses
    Add:
        address = x.x.x.x
        Interface = WAN
    IP -> Routes
    Add:
        Dst-address = 0.0.0.0/0
        Gateway = <provider_gateway>

Настройка LAN DHCP Server:
    IP -> DHCP Server -> Networks
    IP -> Pool

Backup configuration:
    BIN:
        Files -> Backup (system backup save name=test)
    TXT:
        New Terminal -> "export file=config_backup_20170403.rsc"
        New Terminal -> "export file=config_backup_20170403.rsc verbose=yes"
        Files -> "config_backup_20170403.rsc"

Restore configuration:
    BIN:
        (system backup load name=test)
    TXT:
        import file=test.rsc
        import file=test.rsc verbose=yes
```


обновляем прошивку на последнюю
    System -> RouterBOARD -> Upgrade
    System -> Reboot
    --------------------------------
    System -> Packages -> Check For Updates -> Download and Install
    --------------------------------
    /system package update install

для повышения безопасности, — отключить ненужную функциональность (System → Packages):
    ipv6 (IPv6)
    wireless (Wi-Fi)
    hotspot
    ppp
IP -> Services отключи ненужные службы:
    ?api
    ?api-ssl
    ftp
    www
    telnet
    /ip service disable ftp
    /ip service disable telnet,ftp,www,api
    открывать только SSH и Winbox с определенных адресов (по умолчанию доступен ли из интернета?), остальное — disable
    /ip service set ssh port=2200 (сменить порт сервиса)
    /ip service set winbox address=192.168.88.0/24 (разрешать подключения к сервису только с определённых адресов)
Так же проверь, не включены ли службы IP: Web Proxy, IP → UPnP, IP → Socks:
    /ip proxy
    /ip upnp
    /ip socks
- идем в Systen -> scripts удаляем mikrotik.php
- идем в sheduler удаляем не наши скрипты
- идем в firewall, скорее всего отключены правила DROP
- проверяем SOCKS
- меняем порт winbox на нестандартный, естественно если используете доступ с внешки, то правим новый порт в файрволе
- меняем пароли на вход и если есть pptp
- можно еще забанить 95.154.216.168

права групп подробнее:
    telnet, ssh, ftp, winbox, web, api, romon, dude, tikapp — понятны по названию. Разрешают юзеру подключаться по указанным протоколам;
    local — открывает доступ к роутеру через консоль. При отключении так же заберет право открывать терминал внутри Winbox;
    reboot — право на перезагрузку;
    read, write — права на чтение или запись;
    sniff — права на исполнение встроенного аналога tcpdump (tools → sniffer);
    test — запуск инструментов траблшутинга (ping, traceroute, bandwidth-test, wireless scan, snooper);
    password — право менять собственный пароль;
    policy — право управлять учетными записями и группами.

Проброс портов:
    /ip firewall nat add action=dst-nat chain=dstnat comment="7777-7778 tcp for 103" dst-port=7777-7778 \
    in-interface=pppoe-out1 protocol=tcp to-addresses=192.168.0.103 to-ports=\
    7777-7778

    /ip firewall nat add action=dst-nat chain=dstnat comment="7777-7778 udp for 103" dst-port=7777-7778 \
    in-interface=pppoe-out1 protocol=udp to-addresses=192.168.0.103 to-ports=\
    7777-7778
    RDP:
        /ip firewall nat add action=dst-nat chain=dstnat comment="RDP for 103" dst-port=3389 \
        in-interface=pppoe-out1 protocol=tcp to-addresses=192.168.0.103 to-ports=3389

/system package update check-for-updates
:delay 5
:if ( [/system package update get installed-version] != [/system package update get latest-version] ) do={
/system package update download
/system reboot
}

:if ( [/system routerboard get current-firmware] != [/system routerboard get upgrade-firmware] ) do={
/system routerboard upgrade
/system reboot
}

## As second router in LAN
```
Reset configuration: with no default
/system reset-configuration no-defaults=yes skip-backup=yes

Create bridge and add all interfaces
Create DHCP client on created bridge
```

## DNS-over-HTTPS
```
/tool fetch url=https://curl.se/ca/cacert.pem (загрузка сертификатов)
/certificate import file-name=cacert.pem passphrase="" (импорт сертификатов)
/ip dns set servers=195.133.25.16 (Настройка DNS серверов)
/ip dns set use-doh-server=https://dns.comss.one/mikrotik verify-doh-cert=yes (Включение DoH)
/ip dns print (проверка настроек)
```

## Commands
```
/interface print (список интерфейсов)
```

## Firewall rules:
    Разрешаем пинги
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

##
Небольшой комментарий по работе SafeMode
1. Что бы он сработал нужно подключаться именно УДАЛЕННО, а не запускать винбокс с удаленного сервера, на который зашли по РДП :) 
Неоднократно сталкивался с подобным "стилем работы" у новичков
2. Обязательно проверьте не открыт-ли винбокс еще где-то. Например в system, scripts, вкладка jobs (учтите, что каждый запущенный в Вашей сессии winbox терминал будет отображаться как отдельная сессия, плюс там будут отображаться запущенные на данный момент скрипты). Если в jobs'ах висит несколько сессий, проверьте подключения на firewall, вкладке connections.
Эта проблема может встречаться, когда кто-то из пункта 1 запустил винбокс в удаленной сети и просит Вас помочь посмотреть что у него не получается. Если запущено более одной сессии, то safemode не сработает.

SafeMode хранит порядка 100 изменений. Превысив эту планку они все откатываются обратно. т.е. сделали важное изменение, проверили, отжали/нажали сейфмод.
Третий момент из практики командной работы. Если подключаемся на сервер и выидим кем-то забытый не выключенный винбокс, обязательно возмущаемся и срочно его закрываем. Но! Нужно обращать внимание - не выдаст-ли он окошка вида: "Вы точно хотите закрыть сессию и откатить все изменения?" :)
Однажды так на автопилоте закрыл чужую сессию с кнопкой SafeMod нажатой и откатил свеженастроенных двух провайдеров (хорошо, что это было не удаленно).
P.S. Еще лайфхак с курсов. Если нужно удаленно рестартануть основной и единственный провайдерский интерфейс, то нажав на крестик (disable) мы отрубим интерфейс и связь прервется. В такой критичной ситуации надо нажимать на галочку (enable). Она на самом деле делает disable и сразу за ним enable. Так интерфейс перезапустится. Но сначала желательно проверить на установленной версии RouterOS на другом тестовом роутере. И делать только в крайнем случае - вдруг интерфейс не поднимется по каким-то причинам?)