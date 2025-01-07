import{_ as n,c as e,b as a,o as l}from"./app-BsHIgujo.js";const i={};function d(r,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h1 id="пакетныи-менеджер-yum" tabindex="-1"><a class="header-anchor" href="#пакетныи-менеджер-yum"><span>Пакетный менеджер YUM</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">yum help (отображение команд и опций)</span>
<span class="line">yum list (список названий пакетов из репозиторий)</span>
<span class="line">yum list available (список всех доступных пакетов)</span>
<span class="line">yum list installed (список всех установленных пакетов)</span>
<span class="line">yum list installed httpd (установлен ли указанный пакет)</span>
<span class="line">yum list all (список установленных и доступных пакетов)</span>
<span class="line">yum list kernel (список пакетов, относящихся к ядру)</span>
<span class="line">yum info httpd (отображение информации о пакете)</span>
<span class="line">yum deplist httpd (список зависимостей и необходимых пакетов)</span>
<span class="line">yum provides &quot;*bin/top&quot; (найти пакет, который содержит файл)</span>
<span class="line">yum search httpd (поиск пакета по имени и описанию)</span>
<span class="line">yum updateinfo list security (получить информацию о доступных обновлениях безопасности)</span>
<span class="line">yum grouplist (вывести список групп)</span>
<span class="line">yum groupinfo &quot;Basic Web Server&quot; (вывести описание и содержимое группы)</span>
<span class="line">yum groupinstall &quot;Basic Web Server&quot; (установка группы пакетов «Basic Web Server»)</span>
<span class="line">yum groupremove &quot;Basic Web Server&quot; (удаление группы)</span>
<span class="line">yum check-update (Проверка на доступные обновления)</span>
<span class="line">yum repolist (список подключенных репозиториев)</span>
<span class="line">yum repoinfo epel (информация об определенном репозитории)</span>
<span class="line">yum repo-pkgs epel list (информация о пакетах в указанном репозитории)</span>
<span class="line">yum repo-pkgs reponame install (установить все пакеты из репозитория)</span>
<span class="line">yum repo-pkgs reponame remove (удалить пакеты установленные из репозитория)</span>
<span class="line">yum makecache (создать кэш)</span>
<span class="line">yum check (проверить локальную базу rpm (поддерживаются параметры dependencies, duplicates, obsoletes, provides))</span>
<span class="line">yum history list (просмотр yum истории (вывод списка транзакций))</span>
<span class="line">yum history info 9 (просмотр информации определенной транзакции (установленные пакеты, установленные зависимости))</span>
<span class="line">yum history undo 9 (отмена транзакции)</span>
<span class="line">yum history redo 9 (повторить)</span>
<span class="line">yum clean packages (удалить пакеты сохраненные в кэше)</span>
<span class="line">yum clean all (удалить все пакеты и метаданные)</span>
<span class="line">yum install httpd (установить пакет)</span>
<span class="line">yum remove httpd (удаление пакета)</span>
<span class="line">yum update httpd (обновить пакет)</span>
<span class="line">yum update (обновить все пакеты)</span>
<span class="line">yum update-to (обновить до определенной версии)</span>
<span class="line">yum localinstall httpd.rpm (установить из локальной директории (поиск/установка зависимостей будут произведены из подключенных репозиториев) )</span>
<span class="line">yum localinstall http://server/repo/httpd.rpm (установить с http)</span>
<span class="line">yum downgrade (откатиться к предыдущей версии пакета)</span>
<span class="line">yum reinstall httpd (переустановка пакета (восстановление удаленных файлов))</span>
<span class="line">yum autoremove (удаление ненужных более пакетов)</span>
<span class="line"></span>
<span class="line">yum-cron (установка обновлений по расписанию (yum-cron устанавливается отдельно))</span>
<span class="line">createrepo (создание локальных репозиториев (createrepo ставится отдельно))</span>
<span class="line">cat /var/log/yum.log (дополнительно можно просмотреть лог)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="опции" tabindex="-1"><a class="header-anchor" href="#опции"><span>Опции</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">-y (ответить «yes» при запросе)</span>
<span class="line">--assumeno (ответить «no» при запросе)</span>
<span class="line">--noplugins (использовать Yum без плагинов)</span>
<span class="line">--disableplugin=fastestmirror (отключить определенный плагин)</span>
<span class="line">--enableplugin=ps (включить плагины, которые установлены, но отключены)</span>
<span class="line">yum update -y --enablerepo=epel (включить отключенный репозиторий)</span>
<span class="line">yum update -y --disablerepo=epel (отключить репозиторий)</span>
<span class="line">yum install httpd --downloadonly (скачать пакеты, но не устанавливать (на Centos 7 x86_64 будут скачаны в &#39;/var/cache/yum/x86_64/7/base/packages/&#39;))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="команды-доступные-после-установки-пакета-yum-utils" tabindex="-1"><a class="header-anchor" href="#команды-доступные-после-установки-пакета-yum-utils"><span>Команды доступные после установки пакета yum-utils</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">find-repos-of-install httpd (найти из какого репозитория установлен пакет)</span>
<span class="line">needs-restarting (найти процессы, пакеты которых обновлены и требуют рестарта)</span>
<span class="line">repoquery  --requires --resolve httpd (запрос к репозиторию, узнать зависимости пакета, не устанавливая его)</span>
<span class="line">reposync -p repo1 --repoid=updates (синхронизировать yum репозиторий updates в локальную директорию repo1)</span>
<span class="line">verifytree URL (проверить локальный репозиторий на целостность)</span>
<span class="line">yum-complete-transaction (завершить транзакции)</span>
<span class="line">yum-builddep (установить необходимые зависимости для сборки RPM пакета)</span>
<span class="line">yum-config-manager (управление конфигурационными опциями и репозиториями yum )</span>
<span class="line">yumdb info httpd (запрос к локальной базе yum, отображение информации о пакете (использованная команда, контрольная сумма, URL с которого был установлен и другое))</span>
<span class="line">yumdownloader (скачать rpm пакеты из репозитория)</span>
<span class="line">yumdownloader --source php (скачать src.rpm пакет из репозитория (должен быть подключен соответствующий репозиторий, например в &#39;/etc/yum.repos.d/CentOS-Sources.repo&#39; в CentOS))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="конфигурационные-фаилы-yum-и-их-расположение" tabindex="-1"><a class="header-anchor" href="#конфигурационные-фаилы-yum-и-их-расположение"><span>Конфигурационные файлы Yum и их расположение</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/etc/yum.conf (Основной конфигурационный файл)</span>
<span class="line">/etc/yum/ (директория, с конфигурациями (например, yum плагины))</span>
<span class="line">/etc/yum.repos.d/ (директория, содержащая информацию о репозиториях)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="некоторые-опции-yum-conf" tabindex="-1"><a class="header-anchor" href="#некоторые-опции-yum-conf"><span>Некоторые опции yum.conf</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cachedir=/var/cache/yum/$basearch/$releasever (Директория, где yum хранит кэш и файлы базы (по умолчанию &#39;/var/cache/yum&#39;))</span>
<span class="line">keepcache=1 (Определяет должен или нет Yum хранить кэш заголовков и пакетов после успешной установки. Значения: 0 или 1. (по умолчанию 1))</span>
<span class="line">debuglevel=2 (уровень вывода отладочных сообщений. Значения: 1-10 (по умолчанию 2))</span>
<span class="line">logfile=/var/log/yum.log (лог файл (по умолчанию &#39;/var/log/yum.log&#39;))</span>
<span class="line">obsoletes=1 (обновлять устаревшие пакеты)</span>
<span class="line">gpgcheck=1 (проверка подписи пакетов. Значения: 0 или 1 (по умолчанию 1))</span>
<span class="line">plugins=1 (включение плагинов. Значения: 0 или 1 (по умолчанию 1))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="некоторые-полезные-плагины" tabindex="-1"><a class="header-anchor" href="#некоторые-полезные-плагины"><span>Некоторые полезные плагины</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">yum-plugin-changelog (Добавляет опцию командной строки для просмотра ченжлога перед/после обновлениями)</span>
<span class="line">yum-plugin-fastestmirror (выбирает более быстрые репозитории из списка зеркал)</span>
<span class="line">yum-plugin-keys (добавляет команды keys, keys-info, keys-data, keys-remove, которые позволяют работать с ключами)</span>
<span class="line">yum-plugin-versionlock (блокировать указанные пакеты от обновления, команда yum versionlock)</span>
<span class="line">yum-plugin-verify (добавление команд yum verify-all, verify-multilib, verify-rpm для проверки контрольных сумм пакетов)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="работа-yum-через-прокси-сервер" tabindex="-1"><a class="header-anchor" href="#работа-yum-через-прокси-сервер"><span>Работа Yum через прокси сервер</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">proxy=&quot;http://server:3128&quot; (Для всех пользователей: добавить в секцию [main] в /etc/yum.conf)</span>
<span class="line">proxy_proxy_username=user proxy_password=pass (при необходимости указать пароль, добавить)</span>
<span class="line">export http_proxy=&quot;http://server:3128&quot; (указать прокси для отдельного пользователя)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)]))}const c=n(i,[["render",d],["__file","rpm.html.vue"]]),u=JSON.parse('{"path":"/os/linux/rpm.html","title":"Пакетный менеджер YUM","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Опции","slug":"опции","link":"#опции","children":[]},{"level":2,"title":"Команды доступные после установки пакета yum-utils","slug":"команды-доступные-после-установки-пакета-yum-utils","link":"#команды-доступные-после-установки-пакета-yum-utils","children":[]},{"level":2,"title":"Конфигурационные файлы Yum и их расположение","slug":"конфигурационные-фаилы-yum-и-их-расположение","link":"#конфигурационные-фаилы-yum-и-их-расположение","children":[]},{"level":2,"title":"Некоторые опции yum.conf","slug":"некоторые-опции-yum-conf","link":"#некоторые-опции-yum-conf","children":[]},{"level":2,"title":"Некоторые полезные плагины","slug":"некоторые-полезные-плагины","link":"#некоторые-полезные-плагины","children":[]},{"level":2,"title":"Работа Yum через прокси сервер","slug":"работа-yum-через-прокси-сервер","link":"#работа-yum-через-прокси-сервер","children":[]}],"git":{"updatedTime":1656352528000,"contributors":[{"name":"Tarasov Artur","username":"Tarasov Artur","email":"para3ut.74@gmail.com","commits":2,"url":"https://github.com/Tarasov Artur"}]},"filePathRelative":"os/linux/rpm.md"}');export{c as comp,u as data};
