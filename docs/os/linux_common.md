#
## SSH
```
ssh -L 127.0.0.1:3129:127.0.0.1:80 user@remoteserver
```
## Sudo
```
sudo -E
```
## Tmux
## Screen
## Пакетный менеджер YUM

```
yum help (отображение команд и опций)
yum list (список названий пакетов из репозиторий)
yum list available (список всех доступных пакетов)
yum list installed (список всех установленных пакетов)
yum list installed httpd (установлен ли указанный пакет)
yum list all (список установленных и доступных пакетов)
yum list kernel (список пакетов, относящихся к ядру)
yum info httpd (отображение информации о пакете)
yum deplist httpd (список зависимостей и необходимых пакетов)
yum provides "*bin/top" (найти пакет, который содержит файл)
yum search httpd (поиск пакета по имени и описанию)
yum updateinfo list security (получить информацию о доступных обновлениях безопасности)
yum grouplist (вывести список групп)
yum groupinfo "Basic Web Server" (вывести описание и содержимое группы)
yum groupinstall "Basic Web Server" (установка группы пакетов «Basic Web Server»)
yum groupremove "Basic Web Server" (удаление группы)
yum check-update (Проверка на доступные обновления)
yum repolist (список подключенных репозиториев)
yum repoinfo epel (информация об определенном репозитории)
yum repo-pkgs epel list (информация о пакетах в указанном репозитории)
yum repo-pkgs reponame install (установить все пакеты из репозитория)
yum repo-pkgs reponame remove (удалить пакеты установленные из репозитория)
yum makecache (создать кэш)
yum check (проверить локальную базу rpm (поддерживаются параметры dependencies, duplicates, obsoletes, provides))
yum history list (просмотр yum истории (вывод списка транзакций))
yum history info 9 (просмотр информации определенной транзакции (установленные пакеты, установленные зависимости))
yum history undo 9 (отмена транзакции)
yum history redo 9 (повторить)
yum clean packages (удалить пакеты сохраненные в кэше)
yum clean all (удалить все пакеты и метаданные)
yum install httpd (установить пакет)
yum remove httpd (удаление пакета)
yum update httpd (обновить пакет)
yum update (обновить все пакеты)
yum update-to (обновить до определенной версии)
yum localinstall httpd.rpm (установить из локальной директории (поиск/установка зависимостей будут произведены из подключенных репозиториев) )
yum localinstall http://server/repo/httpd.rpm (установить с http)
yum downgrade (откатиться к предыдущей версии пакета)
yum reinstall httpd (переустановка пакета (восстановление удаленных файлов))
yum autoremove (удаление ненужных более пакетов)

yum-cron (установка обновлений по расписанию (yum-cron устанавливается отдельно))
createrepo (создание локальных репозиториев (createrepo ставится отдельно))
cat /var/log/yum.log (дополнительно можно просмотреть лог)
```

Опции
```
-y (ответить «yes» при запросе)
--assumeno (ответить «no» при запросе)
--noplugins (использовать Yum без плагинов)
--disableplugin=fastestmirror (отключить определенный плагин)
--enableplugin=ps (включить плагины, которые установлены, но отключены)
yum update -y --enablerepo=epel (включить отключенный репозиторий)
yum update -y --disablerepo=epel (отключить репозиторий)
yum install httpd --downloadonly (скачать пакеты, но не устанавливать (на Centos 7 x86_64 будут скачаны в '/var/cache/yum/x86_64/7/base/packages/'))
```

Команды доступные после установки пакета yum-utils
```
find-repos-of-install httpd (найти из какого репозитория установлен пакет)
needs-restarting (найти процессы, пакеты которых обновлены и требуют рестарта)
repoquery  --requires --resolve httpd (запрос к репозиторию, узнать зависимости пакета, не устанавливая его)
reposync -p repo1 --repoid=updates (синхронизировать yum репозиторий updates в локальную директорию repo1)
verifytree URL (проверить локальный репозиторий на целостность)
yum-complete-transaction (завершить транзакции)
yum-builddep (установить необходимые зависимости для сборки RPM пакета)
yum-config-manager (управление конфигурационными опциями и репозиториями yum )
yumdb info httpd (запрос к локальной базе yum, отображение информации о пакете (использованная команда, контрольная сумма, URL с которого был установлен и другое))
yumdownloader (скачать rpm пакеты из репозитория)
yumdownloader --source php (скачать src.rpm пакет из репозитория (должен быть подключен соответствующий репозиторий, например в '/etc/yum.repos.d/CentOS-Sources.repo' в CentOS))
```

Конфигурационные файлы Yum и их расположение
```
/etc/yum.conf (Основной конфигурационный файл)
/etc/yum/ (директория, с конфигурациями (например, yum плагины))
/etc/yum.repos.d/ (директория, содержащая информацию о репозиториях)
```

Некоторые опции yum.conf:
```
cachedir=/var/cache/yum/$basearch/$releasever (Директория, где yum хранит кэш и файлы базы (по умолчанию '/var/cache/yum'))
keepcache=1 (Определяет должен или нет Yum хранить кэш заголовков и пакетов после успешной установки. Значения: 0 или 1. (по умолчанию 1))
debuglevel=2 (уровень вывода отладочных сообщений. Значения: 1-10 (по умолчанию 2))
logfile=/var/log/yum.log (лог файл (по умолчанию '/var/log/yum.log'))
obsoletes=1 (обновлять устаревшие пакеты)
gpgcheck=1 (проверка подписи пакетов. Значения: 0 или 1 (по умолчанию 1))
plugins=1 (включение плагинов. Значения: 0 или 1 (по умолчанию 1))
```

Некоторые полезные плагины
```
yum-plugin-changelog (Добавляет опцию командной строки для просмотра ченжлога перед/после обновлениями)
yum-plugin-fastestmirror (выбирает более быстрые репозитории из списка зеркал)
yum-plugin-keys (добавляет команды keys, keys-info, keys-data, keys-remove, которые позволяют работать с ключами)
yum-plugin-versionlock (блокировать указанные пакеты от обновления, команда yum versionlock)
yum-plugin-verify (добавление команд yum verify-all, verify-multilib, verify-rpm для проверки контрольных сумм пакетов)
```

Работа Yum через прокси сервер
```
proxy="http://server:3128" (Для всех пользователей: добавить в секцию [main] в /etc/yum.conf)
proxy_proxy_username=user proxy_password=pass (при необходимости указать пароль, добавить)
export http_proxy="http://server:3128" (указать прокси для отдельного пользователя)
```
