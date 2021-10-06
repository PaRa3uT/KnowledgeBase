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
```
