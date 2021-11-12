# [Deabian](https://www.debian.org)
## Upgrade Debian 9 to 10
Обновление существующей системы
```
sudo apt update
sudo apt dist-upgrade
dpkg -C
apt-mark showhold
dpkg --audit
```

Настройка репозиториев
```
sed -i 's/stretch/buster/g' /etc/apt/sources.list
apt update
apt list --upgradable
```

Обновление до Debian 10
```
apt-get upgrade
apt-get dist-upgrade
```

## Upgrade Debian 10 to 11

Обновление до последней версии текущего релиза
```
sudo apt update
sudo apt dist-upgrade
sudo apt --fix-broken install
sudo apt autoremove
```

Замена репозиториев
```
sed -i 's/buster/bullseye/g' /etc/apt/sources.list
sed -i 's/buster\/updates/bullseye-security/g' /etc/apt/sources.list
sudo apt update
```

Минимальное обновление
```
sudo apt upgrade --without-new-pkgs
```

Полное обновление
```
sudo apt dist-upgrade
sudo apt autoremove
```


## MariaDB
```
apt-get install mariadb-server
apt-get install mariadb-client
```

## Apache2
```
apt-get install apache2
systemctl status apache2
```

## Nginx
```
apt-get install nginx
systemctl status nginx
```

## PHP
## Samba
## CUPS

## Zabbix
