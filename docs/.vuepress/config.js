import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
//import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    base: "/KnowledgeBase/",

    bundler: viteBundler(),

    theme: defaultTheme({
       navbar: [
           {text: 'Главная', link: '/'},
           {text: 'Ссылки', link: '/links'},
           {text: 'Dev', children: [
               {text: 'Python', link: '/dev/python'},
               {text: 'Rust', link: '/dev/rust'},
               {text: 'Git', link: '/dev/git'},
               {text: 'JavaScript', link: '/dev/java_script'},
               {text: 'JS. Vue 3', link: '/dev/js_vue_3'},
               {text: 'GO', link: '/dev/go'},
               {text: 'SQL', link: '/dev/sql'},
               {text: 'PHP', link: '/dev/php'},
               {text: 'Tailwind CSS', link: '/dev/tailwind'},
               {text: 'CMD', link: '/dev/cmd'},
               {text: 'RT-Thread', link: '/dev/rt-thread'},
           ]},
           {text: 'OS', children: [
               {text: 'Storages', link: '/os/storage'},
               {text: 'Linux', children: [
                   {text: 'Common', link: '/os/linux/common'},
                   {text: 'Common DEB', link: '/os/linux/deb'},
                   {text: 'Common RPM', link: '/os/linux/rpm'},
                   {text: 'Software', link: '/os/linux/software'},
                   {text: 'Debian', link: '/os/linux/debian'},
                   {text: 'Devuan', link: '/os/linux/devuan'},
                   {text: 'Slackware', link: '/os/linux/slackware'},
                   {text: 'Slax', link: '/os/linux/slax'},
                   {text: 'Alpine', link: '/os/linux/alpine'},
                   {text: 'armbian', link: '/os/linux/armbian'},
                   {text: 'CentOS', link: '/os/linux/centos'},
                   {text: 'LFS', link: '/os/linux/lfs'},
                   {text: 'Void', link: '/os/linux/void'},
                   {text: 'Astra', link: '/os/linux/astra'},
                   {text: 'РЕД ОС', link: '/os/linux/red_os'},
                   {text: 'AlmaLinux', link: '/os/linux/alma_linux'},
                   {text: 'Fedora Server', link: '/os/linux/fedora_server'},
                   {text: 'Fedora Desktop', link: '/os/linux/fedora_desktop'},
                   {text: 'Fedora Core', link: '/os/linux/fedora_core'},
                   {text: 'Ubuntu Server', link: '/os/linux/ubuntu_server'},
               ]},
               {text: 'Windows', children: [
                   {text: 'Windows', link: '/os/windows/windows'},
                   {text: 'Windows Server', link: '/os/windows/server'},
                   {text: 'Software', link: '/os/windows/soft'},
                   {text: 'WSL', link: '/os/windows/WSL'},
                   {text: 'CMD', link: '/os/windows/cmd'},
                   {text: 'PoweShell', link: '/os/windows/powershell'},
                   {text: 'Services', link: '/os/windows/services'},
               ]},
               {text: 'BSD', children: [
                   {text: 'FreeBSD', link: '/os/bsd/freebsd'},
                   {text: 'OpenBSD', link: '/os/bsd/openbsd'},
                   {text: 'OPNsense', link: '/os/bsd/opnsense'},
                   {text: 'XigmaNAS', link: '/os/bsd/xigmanas'},
               ]},
               {text: 'Other', children: [
                   {text: 'OpenWRT', link: '/os/openwrt'},
                   {text: 'Android', link: '/os/android'},
                   {text: 'Mikrotik', link: '/os/mikrotik'}
               ]},
           ]},
           {text: 'Сети', children: [
               {text: 'TCP', link: '/network/tcp'},
           ]},
           {text: 'Unsorted', children: [
               {text: 'AWX', link: '/unsorted/awx'},
               {text: 'Остальное', link: '/unsorted/other'},
               {text: 'Scylla DB', link: '/unsorted/scylladb'},
               {text: 'Zabbix', link: '/unsorted/zabbix'},
               {text: 'SEO', link: '/unsorted/seo'},
               {text: 'SMM', link: '/unsorted/smm'},
               {text: 'Mikrotik', link: '/unsorted/mikrotik'},
               {text: 'ClickHouse', link: '/unsorted/clickhouse'},
               {text: 'Docker', link: '/unsorted/docker'},
               {text: 'Firebird', link: '/unsorted/firebird'},
               {text: 'Mosquitto', link: '/unsorted/mosquitto'},
               {text: 'MSSQL', link: '/unsorted/mssql'},
               {text: 'MySQL', link: '/unsorted/mysql'},
               {text: 'NodeJS', link: '/unsorted/nodejs'},
               {text: 'PostgreSQL', link: '/unsorted/postgresql'},
               {text: 'RabbitMQ', link: '/unsorted/rabbitmq'},
               {text: 'Radio', link: '/unsorted/radio'},
               {text: 'Redis', link: '/unsorted/redis'},
               {text: 'Электрокомпоненты', link: '/unsorted/electrocomponents'}
           ]},
           {text: 'Заметки', link: '/notes'},
           {text: 'Путешествия', children: [
               {text: 'Москва', link: '/travel/moscow'},
               {text: 'Челябинск', link: '/travel/chelyabinsk'},
           ]},
           {text: 'Финансы', children: [
               {text: 'Инвестирование', link: '/finance/investing'}
           ]},
           {text: 'Hardware', children: [
               {text: 'OrangePi PC', link: '/hardware/orangepi_pc'},
               {text: 'AVR', link: '/hardware/avr'},
               {text: 'STM', link: '/hardware/stm'},
               {text: 'ESP', link: '/hardware/esp'},
           ]}
       ]
    })
})
