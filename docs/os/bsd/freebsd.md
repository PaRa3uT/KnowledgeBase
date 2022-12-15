# [FreeBSD](https://www.freebsd.org)
For pkg updates and system updates:
```
pkg update
pkg upgrade
```

When using some production tools, it is also sensible to check if they do not have known vulnerabilities using:
```
pkg audit
```

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

##  Upgrading Packages After a Major Version Upgrade
```
pkg-static upgrade -f
freebsd-update install
```

## Settings

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
