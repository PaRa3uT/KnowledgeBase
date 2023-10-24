# Mikrotik
## Config Backup (bin)
Files -> Backup -> Backup

## Config Restore (bin)
System -> Reset Configuration -> Check " No Default Configuration" -> Reset Configuration -> Yes
Files -> <file_name> -> Restore -> Yes

## Config Export (txt)
New Terminal -> "export file=config_backup_20170403.rsc"
Files -> "config_backup_20170403.rsc"

## Config Import (txt)
System -> Reset Configuration -> Check " No Default Configuration" -> Reset Configuration -> Yes
New Terminal -> "import file=config_backup_20170403.rsc"

## Частичный перенос настроек
```
ip address export file=ip.rsc
ip firewall mangle export file=mangle.rsc
ip firewall nat export file=nat.rsc
ip firewall filter export file=filter.rsc
queue simple export file=simple.rsc
ip dns export file=dns.rsc
system script export file=script.rsc
system scheduler export file=scheduler.rsc
tool e-mail export file=email.rsc
ip firewall address-list export file=address-list.rsc
ip route export file=route.rsc
ip dhcp-server network export file=network.rsc
queue type export file=type.rsc
queue tree export file=tree.rsc
queue simple export file=simple.rsc
interface ethernet export file=ethernet.rsc
ip pool export file=pool.rsc
ppp profile export file=profile.rsc
system logging export file=log.rsc
```

## Firewall Rules

## Первоначальная настройка
### WAN DHCP
### WAN Static
### LAN Static
### DHCP Server

##
```
/system logging print
/system logging remove 4

Also you might want to enable debug logging for dhcp.
/system logging add topics=dhcp,debug action=memory

/system logging add topics=dhcp,info action=memory
```
