# [Devuan](https://www.devuan.org)
```
/etc/apt/sources.list (Default configurations)

Devuan 4.0 Chimaera (stable)
deb http://deb.devuan.org/merged chimaera          main
deb http://deb.devuan.org/merged chimaera-updates  main
deb http://deb.devuan.org/merged chimaera-security main

Devuan Daedalus (testing)
deb http://deb.devuan.org/merged daedalus          main
deb http://deb.devuan.org/merged daedalus-updates  main
deb http://deb.devuan.org/merged daedalus-security main
```

## Upgrade 4 (Chimera) to 5 (Daedalus)
```
Control-Alt-F1

apt-get update && apt-get upgrade
vim /etc/apt/sources.list
    deb http://deb.devuan.org/merged daedalus main
    deb http://deb.devuan.org/merged daedalus-updates main
    deb http://deb.devuan.org/merged daedalus-security main
    #deb http://deb.devuan.org/merged daedalus-backports main

apt-get update

killall xscreensaver

apt-get upgrade
apt-get dist-upgrade

apt-get -f install
apt-get dist-upgrade

reboot

apt-get autoremove --purge
apt-get autoclean
```