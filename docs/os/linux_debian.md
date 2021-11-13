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
apt-get install redis
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

## PostgreSQL
```
apt-get install 
systemctl status 
```

## Zabbix

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
