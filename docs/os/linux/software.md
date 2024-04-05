# Software
[Sublime](https://www.sublimetext.com/docs/linux_repositories.html)
Firefox
LibreOffice/OpenOffice

## DE/WM
+ KDE  
GNOME  
XFCE  
LXQT
LXDE
MATE
Cinnamon
Budgie

## Console
mc  
vim  

## [Portainer](https://docs.portainer.io/start/install-ce/server/docker/linux)
```
Install:
    sudo docker volume create portainer_data
    sudo docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
    sudo docker ps

Upgrade:
    sudo docker stop portainer
    sudo docker rm portainer
    sudo docker pull portainer/portainer-ce:latest
    sudo docker run -d -p 8000:8000 -p 9443:9443 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```

## Панели управления серверами
### Webmin
### [Cockpit](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/managing_systems_using_the_rhel_9_web_console/index)