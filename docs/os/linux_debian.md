# Deabian
## Upgrade Debian 9 to 10
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
```
