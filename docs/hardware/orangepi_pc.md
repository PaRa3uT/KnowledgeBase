# OrangePi PC
Allwinner H3 32bit 4core, 3 чистых/полноценных USB  

## OS
[armbian](https://www.armbian.com/orange-pi-pc/)  
[DietPie](https://dietpi.com/)  
[OpenELEC](http://openelec.tv)  
[RetroPie](http://www.retrorangepi.org/)  

## Links
[4PDA](https://4pda.to/forum/index.php?showtopic=750921)

## Soft
[Видеонаблюдение Xeoma](https://felenasoft.com/xeoma/ru/download/)  
Принтсервер CUPS (+ foomatic-db foomatic-db-engin)  
Облачный сервис NextCloud  
[qBittorent](/KnowledgeBase/os/linux_debian.html#qbittorrent)  
Firefox Sync Server  
Aria2  
Gogs/Gitea  
UrBackup  
MinIO  
Syncthing  

[Portainer (Docker container management)](https://docs.portainer.io/v/ce-2.9/start/install/server/docker/linux)  
```
docker volume create portainer_data
docker run -d -p 9002:9000 --name=portainer --restart=always -v 
/run/docker.sock:/var/run/docker.sock -v portainer_data:/data 
portainer/portainer-ce
http://<server_ip>:9002/
```

Pi-Hole / Unbound  

[AdGuard Home](https://github.com/AdguardTeam/AdguardHome)
```
wget https://static.adguard.com/adguardhome/release/AdGuardHome_linux_armv7.tar.gz
tar -zxvf AdGuardHome_linux_armv7.tar.gz
cd AdGuardHome
./AdGuardHome
```
Samba  
InfluxDB  
Grafana  
Mosquitto  
MPD + ympd / myMPD / Mopidy  
phpSysInfo 
RPi-Monitor  
WebMin  
Netdata  
OpenVPN  
LESP(Nginx+SQLite+PHP)  
LASP(Apache+SQLite+PHP)  
