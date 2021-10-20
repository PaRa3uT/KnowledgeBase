# FreeBSD

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
