# CentOS

## Migrate CentOS 8 to CentOS Stream
```
dnf install centos-release-stream
dnf update
```

## Migrate CentOS 8 to RHEL 8
```
https://github.com/oamg/convert2rhel/
```

## Migrate CentOS 7 to AlmaLinux
```
sudo yum update -y
sudo reboot

sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el7.noarch.rpm
sudo yum install -y leapp-upgrade leapp-data-centos
sudo leapp preupgrade

most popular fixes for RHEL8-based operating systems:
    sudo sed -i "s/^AllowZoneDrifting=.*/AllowZoneDrifting=no/" /etc/firewalld/firewalld.conf
    leapp answer --section check_vdo.no_vdo_devices=True

leapp upgrade
reboot

cat /etc/redhat-release
cat /etc/os-release
rpm -qa | grep el7 # for 7 to 8 migration
rpm -qa | grep el8 # for 8 to 9 migration
cat /var/log/leapp/leapp-report.txt
cat /var/log/leapp/leapp-upgrade.log

```
## Migrate CentOS 8 to AlmaLinux
```
https://github.com/AlmaLinux/almalinux-deploy
```

## Migrate CentOS 8 to Rocky Linux
```
https://github.com/rocky-linux/rocky-tools/tree/main/migrate2rocky
```

## Migrate CentOS 8 to VzLinux
```
https://github.com/vzlinux/vzdeploy
```

## Migrate CentOS 8 to Oracle Linux
```
https://github.com/oracle/centos2ol
```

## RabbitMQ
```
```

## Redis
```
sudo yum install redis
```
