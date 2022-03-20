# [Deabian](https://www.debian.org)

## Debian 6 (squeeze) -> 7 (wheezy):
    !!!Не обновляется
    sudo apt-get update
    sudo apt-get upgrade
    sed -i 's/squeeze/wheezy/g' /etc/apt/sources.list
    apt-get update
    apt-get upgrade
    apt-get dist-upgrade
    reboot

## Debian 9 (stretch) -> 10 (buster):
    sudo apt-get update
    sudo apt-get upgrade
    sed -i 's/stretch/buster/g' /etc/apt/sources.list
    apt-get update
    apt-get upgrade
    apt-get dist-upgrade
    reboot

## Upgrade Debian 9 (stretch) to 10 (buster)
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
mysql_secure_installation
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
```
apt-get-install php
echo '<?php phpinfo(); ?>' > /var/www/phpinfo.php
curl -sSfL https://raw.githubusercontent.com/amnuts/opcache-gui/master/index.php -o /var/www/opcache.php
curl -sSfL https://raw.githubusercontent.com/krakjoe/apcu/master/apc.php -o /var/www/apc.php
```

## [Docker](https://docs.docker.com/engine/install/debian/)
```
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

apt-get update
apt-get install docker-ce docker-ce-cli containerd.io
apt-get update
apt-get install -y docker-ce docker-ce-cli containerd.io
docker run hello-world

systemctl status docker
systemctl status containerd

apt-get install -y docker-compose
vim /etc/docker/daemon.json
{
    "log-driver": "local",
    "log-opts": {
        "max-size": "10m",
        "max-file":"3"
    },
    "userland-proxy": false
}

```

## Samba
```
apt-get install samba samba-common-bin
mkdir -m 1777 /share
vim /etc/samba/smb.conf
[share]
comment = Pi shared folder
path = /share
browseable = yes
writeable = Yes
only guest = no
create mask = 0777
directory mask = 0777
public = yes
guest ok = yes
smbpasswd -a <username>
```

## CUPS
```
apt-get install cups
apt-get install foomatic-db foomatic-db-engine
```
```
vim /etc/cups/cupsd.conf
#Listen localhost:631
Listen 631

# Restrict access to the server...
<Location />
  Order allow,deny
  Allow @Local /// add
</Location>
 
# Restrict access to the admin pages...
<Location /admin>
  Order allow,deny
  Allow @Local /// add
</Location>
 
# Restrict access to configuration files...
<Location /admin/conf>
  AuthType Default
  Require user @SYSTEM
  Order allow,deny
  Allow @Local /// add
</Location>
```

## qBittorrent
```
adduser --system --group qbittorrent-nox
apt-get install qbittorrent-nox
qbittorrent-nox
vim /etc/systemd/system/qbittorrent-nox.service
[Unit]
Description=qBittorrent Daemon Service
After=network.target
[Service]
Type=forking
User=qbittorrent-nox
Group=qbittorrent-nox
UMask=007
ExecStart=/usr/bin/qbittorrent-nox -d --webui-port=8080
[Install]
WantedBy=multi-user.target
```
http://<server_ip>:8080/  
admin:adminadmin  

## Redis
```
apt-get install redis (?redis-server)
systemctl status redis-server
/etc/redis/redis.conf
loglevel warning
logfile ""
syslog-enabled yes
always-show-logo no
```

## InfluxDB
```
apt-get install influxdb
systemctl status influxdb
```

## RabbitMQ
```
apt-get install rabbitmq-server
systemctl status rabbitmq-server
```

## PostgreSQL 13
```
apt-get install postgresql-13
systemctl status postgresql
```

## [TimescaleDB (PostgreSQL 13)](https://www.timescale.com/)
```
sudo sh -c "echo 'deb [signed-by=/usr/share/keyrings/timescale.keyring] https://packagecloud.io/timescale/timescaledb/debian/ $(lsb_release -c -s) main' > /etc/apt/sources.list.d/timescaledb.list"
wget --quiet -O - https://packagecloud.io/timescale/timescaledb/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/timescale.keyring
wget --quiet -O - https://packagecloud.io/timescale/timescaledb/gpgkey | apt-key add -
apt-get update
apt-get install timescaledb-2-postgresql-13
```

## [PostGIS (PostgreSQL 13)](https://postgis.net/)
```
```


## [Zabbix](https://www.zabbix.com/)
  [Install Apache](linux_debian#apache2)  
  [Install PHP](linux_debian#php)  
  [Install MariaDB](linux_debian#mariadb)  
  Install Zabbix repository
  ```
  wget https://repo.zabbix.com/zabbix/5.0/debian/pool/main/z/zabbix-release/zabbix-release_5.0-2+debian11_all.deb
  dpkg -i zabbix-release_5.0-2+debian11_all.deb
  apt-get update
  ```
  
  Install Zabbix server, frontend, agent
  ```
  apt-get install zabbix-server-mysql zabbix-frontend-php zabbix-agent
  # If Apache2
  apt-get install zabbix-apache-conf
  # If Nginx
  apt-get install zabbix-nginx-conf
  ```
  
  Create initial database
  ```
  # mysql -uroot -p
  password
  mysql> create database zabbix character set utf8 collate utf8_bin;
  mysql> create user zabbix@localhost identified by 'password';
  mysql> grant all privileges on zabbix.* to zabbix@localhost;
  mysql> quit;

  # zcat /usr/share/doc/zabbix-server-mysql*/create.sql.gz | mysql -uzabbix -p zabbix
  ```

  Configure Zabbix server database
  ```
  /etc/zabbix/zabbix_server.conf
      DBPassword=<password>
  ```
  http://SERVER_IP/zabbix  
  Admin:zabbix  

## Node.js

## [Home Assistant Core](https://www.home-assistant.io/installation/linux#install-home-assistant-core)

## fail2ban

## OpenVPN Server
## WireGuard

## [phpSysInfo](https://phpsysinfo.github.io/phpsysinfo/)
## phpMyAdmin
## [WebMin](https://webmin.com/)
## [Linux Dash](https://github.com/afaqurk/linux-dash/)
## Mosquitto
## [MiniDLNA](http://itadept.ru/linux-dlna-server-minidlna/)
```
apt-get install minidlna
systemctl status minidlna
vim /etc/sysctl.conf
#MiniDLNA warning fix
fs.inotify.max_user_watches = 100000
systemctl restart minidlna
vim /etc/minidlna.conf
```

## ClickHouse
```
apt-key adv --keyserver keyserver.ubuntu.com --recv E0C56BD4
echo "deb http://repo.yandex.ru/clickhouse/deb/stable/ main/" | sudo tee /etc/apt/sources.list.d/clickhouse.list
apt-get install clickhouse-server clickhouse-client
OrangePi PC Armbian install error
```