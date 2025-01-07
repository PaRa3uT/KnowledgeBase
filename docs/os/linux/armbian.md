# armbian
Пароль root по умолчанию 1234  
```
armbian-config
armbianmonitor -m
```
arecord -f dat -d 60 | lame - -V2 -b 256 > record.mp3 (Запись звука через встроенный микрофон OrangePi PC, перед этим выкрутите ползунки в alsamixer на максимум и снимите мут)

## Update
```
apt update
apt upgrade
```

## Software
``
apt install -y vim --no-install-recommends
apt install -y htop --no-install-recommends
apt install -y tmux --no-install-recommends
apt install -y python3-venv --no-install-recommends
apt install -y python3-pip-whl --no-install-recommends
``

## NextCloud
```
wget https://raw.githubusercontent.com/nextcloud/nextcloudpi/master/install.sh
```
