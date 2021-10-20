# [FreeBSD](https://www.freebsd.org)

FreeBSD security patches may be downloaded and installed using these commands:
```
freebsd-update fetch
freebsd-update install
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
