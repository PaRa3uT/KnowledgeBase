# [FreeBSD](https://www.freebsd.org)
## Binary Updates
```
freebsd-update fetch
freebsd-update install
```

## Major and Minor Upgrade
```
freebsd-update -r 9.1-RELEASE upgrade
```
### Upgrade 12.2 to 12.3
```
freebsd-update -r 12.3-RELEASE upgrade
freebsd-update install
shutdown -r now
freebsd-update install
```

### Upgrade 12.3 to 12.4
```
freebsd-update -r 12.4-RELEASE upgrade
freebsd-update install
shutdown -r now
freebsd-update install
```

### Upgrade 12.4 to 13.2 (Major) (BIN)
```
freebsd-update fetch
freebsd-update install
execute the commands freebsd-version -k and uname -r, reboot the system if the outputs differ
freebsd-update -r 13.2-RELEASE upgrade
freebsd-update install
reboot
freebsd-update install
pkg-static upgrade -f
freebsd-update install
```

##  Upgrading Packages After a Major Version Upgrade
```
pkg-static upgrade -f
freebsd-update install
```

## Install application
### Ports (source and packages)
```
portsnap fetch
portsnap extract (только в первый раз, либо надо получить чистое дерево портов, удаляет существующее дерево портов)
portsnap update
```

### Packages (binaries)
```
pkg search <name>
pkg install <name>
pkg info <name>
pkg info
```

For pkg updates and system updates:
```
pkg update
pkg upgrade
```

When using some production tools, it is also sensible to check if they do not have known vulnerabilities using:
```
pkg audit
```

## Settings

### User managment
```
    adduser
```

### Enabling ASLR:
Add this entries to /boot/loader.conf to enable them on the startup
```
sysctl kern.elf64.aslr.enable=1
sysctl kern.elf32.aslr.enable=1
```

### Randomizing PID
/etc/sysctl.conf
```
kern.randompid=1
```

### Hide process running as other user or group
/etc/sysctl.conf
```
security.bsd.see_other_uids=0
security.bsd.see_other_gids=0
```
