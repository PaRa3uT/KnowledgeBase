## Aptutide
```
aptitude install package #установить пакет;
aptitude safe-upgrade package #обновить пакет;
aptitude update #проверить и установить обновления;
aptitude remove package #удалить пакет;
aptitude purge package #удалить пакета с концами, все данные и настройки;
aptitude search package #искать пакет.
aptitude why <package> # Кто поставил пакет
aptitude search '~i!~M' (посмотреть какие пакеты были установлены вручную)
```

## apt
```
apt-get dist-upgrade #обновить ОС, killer-feature и оно работает!
apt-cache depends package #зависимости пакета;
apt-cache rdepends package #обратные зависимости от пакета.
apt-get remove --purge package
apt-get clean
apt-mark showmanual (посмотреть какие пакеты были установлены вручную)
apt list --installed
apt-cache pkgnames (посмотреть какие пакеты были установлены вручную)
```

## dpkg
```
dpkg -l #список установленных программ;
dpkg -l | grep ^ii | awk '{ print $2}' > mylist.txt
dpkg --get-selections | grep -v deinstall
dpkg --get-selections | grep -v deinstall > mylist.txt
dpkg -L package #список файлов пакета
dpkg-query -l (отобразит все установленные пакеты вместе с информацией о них)
```
