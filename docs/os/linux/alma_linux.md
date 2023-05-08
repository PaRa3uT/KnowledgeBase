# [AlmaLinux](https://almalinux.org/)
## Upgrade 8.7 to 9.1
```
sudo yum update -y
sudo reboot

sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el8.noarch.rpm
sudo yum install -y leapp-upgrade leapp-data-almalinux
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

## Updates
```
yum update
```

## Sudo
```
su
usermod -aG wheel sergiy
```

## [Docker] (https://docs.docker.com/engine/install/centos/)
```
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sudo systemctl start docker
sudo systemctl enable docker
sudo docker run hello-world
```