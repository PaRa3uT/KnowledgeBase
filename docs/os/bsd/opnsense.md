# [OPNsense](https://opnsense.org)
(FreeBSD) (Firewall, OpenVPN Server)  
Install
* -RAM 256 MB (Install error)
* +RAM 512 MB (Нормально работает)
* -HDD 2 GB (Мало, нехватило для обновлений)
* ?HDD 4 GB
```
Resize partition:
    sysctl kern.geom.debugflags=16
    gpart show ada0
    gpart resize -i 1 ada0
    gpart resize -i 1 ada0s1
    growfs -y /dev/ufs/OPNsense
```
