# Storage
fdisk - 
sgdisk - manage GPT partitions

## S.M.A.R.T.
```
smartctl /dev/sda -i (отобразит идентификационную информацию о диске)
smartctl --scan (список дисков)

smartctl /dev/sda -t short (запустить короткий тест)
smartctl /dev/sda -t long (запустить расширенное тестирование)
smartctl /dev/sda -l selftest (отобразить информацию как прошло тестирование)

sudo apt-get install smartmontools
sudo smartctl -H /dev/sda
sudo smartctl -A /dev/sda
```

## 4K aligned (Advanced Format)
```
wmic partition get Blocksize,StartingOffset, Name
fsutil fsinfo ntfsinfo <drive letter>
```
## SSD Windows
```
проверить, включена ли поддержка TRIM
cmd -> fsutil behavior query disabledeletenotify
NTFS DisableDeleteNotify = 0 (TRIM включен)
```
```
включить TRIM для SSD в Windows
cmd -> fsutil behavior set disabledeletenotify NTFS 0
    -> fsutil behavior set disabledeletenotify ReFS 0 
```
## Partioning
### Server
/boot   xfs     ~1GB
/       xfs(LVM)

## GEOM (BSD)
### RAID 0
```
1. # kldload geom_stripe (Загрузите модуль geom_stripe.ko)
2. # gstripe label -v st0 /dev/ad2 /dev/ad3 (создание дисковой последовательности из двух неиспользуемых и неразмеченных ATA дисков /dev/ad2 и /dev/ad3)
3. # bsdlabel -wB /dev/stripe/st0 (записываем стандартную метку (таблицу разделов), в новый том, и устанавливаем стандартный загрузчик)
    Теперь в /dev/stripe кроме st0 появились ещё два устройства - st0a и st0c
4. # newfs -U /dev/stripe/st0a (создём файловую систему на устройстве st0a, используя утилиту newfs)
5. # mount /dev/stripe/st0a /mnt (Монтируем вручную)
6. # mkdir /stripe && echo "/dev/stripe/st0a /stripe ufs rw 2 2" >> /etc/fstab (Создайте постоянную точку монтирования /stripe и добавляем о ней информацию в /etc/fstab для автоматического монтирования при загрузке)
7. # echo 'geom_stripe_load="YES"' >> /boot/loader.conf (автоматическая загрузка модуля во время инициализации системы)
```

### RAID 1

## MDADM (Soft Raid)
```
Сначала создаём разделы
mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sda /dev/sdb
```

## LVM
PV (physical volume)  
VG (volume group)  
LV (logical volume)  

pvs  
pvcreate

vgs
vgdisplay

lvs
lvdisplay

### Increase size
```
Extend 'extended' partition
    GParted

Extend the Volume Group
    GParted

Extend the Logical Volume
    sudo lvextend -l +100%FREE /dev/srv-debian-2-vg/root

Extend the filesystem
    check the filesystem with lsblk -f or df -Th
    if XFS
        sudo xfs_growfs /dev/mapper/srv--debian--2--vg-root
    if Ext4
        resize2fs /dev/mapper/lvm_system-root
    if btrfs
        btrfs filesystem resize max /mounted_volume
```

## LVM on MDADM
(/dev/sda1, /dev/sdb1) -> md0 -> /boot
(/dev/sda5, /dev/sdb5) -> md1 -> VG -> LV (root, home) -> (/, /home)

## SSD:
    Over-Provisioning (OP) - 10% (home), 30% (server)

## NTFS:
    сжатие на NTFS не работает с размером кластера больше 4К
    системный - 4К
    Раздел под большие файлы (Музыка, видео, дистрибутивы) размер кластера 64к
    Раздел для рабочих файлов (Документы) размер кластера 16к-32к
    Своп, гибернейт 64к
    Удаление раздела восстановления, который не удаляется через диспетчер дисков
    ```
    Одновременно нажмите клавиши [Win] и [R], чтобы открылось командное окно «Выполнить».
    Введите «diskmgmt.msc» и нажмите «OK». Запустится меню «Управление дисками».
    Найдите раздел восстановления и посмотрите, на каком диске он находится. Как правило, это «Диск 0».
    Нажмите [Win] и [R] еще раз и введите «diskpart». Снова подтвердите нажатием «OK».
    Используйте команду «select disk 0», если этот раздел находится на диске 0.
    Затем введите «list partition» и в списке найдите раздел восстановления.
    Теперь напишите следующую команду: «select partition N», где N — это номер раздела например, 1. Измените число в формулировке команды, в зависимости от расположения раздела в вашей системе.
    Затем введите «delete partition override». Раздел восстановления будет удален.
    ```

## ZFS
```
?Pool
?Dataset
?Partition
zfs snapshot -r name_of_the_pool@name_of_the_snapshot
zfs send -R -c name_of_the_pool@name_of_the_snapshot > export_name
zfs send -R -c name_of_the_pool@name_of_the_snapshot | ssh example.com cat > mybackupfile
zfs send -R -c name_of_the_pool@name_of_the_snapshot | ssh example.com zfs receive storage/mybackup
zfs send -c -i name_of_previous_snapshot name_of_the_pool@name_of_the_snapshot | ssh example.com zfs receive storage/mybackup

convert nonredundant pool (1 disk) to mirror poll:
    zpool attach <pool_name> <existing_disk> <new_disk>
```

## XFS
## Ext 4
## Ext 3
## Ext 2
## ReiserFS
## FAT 32
## FAT 16
## FAT 12
## exFAT
## MBR to GPT
```
Offline
Settings -> Update & Security ->  Recovery -> "Advanced startup" -> Restart now button
Troubleshoot -> Advanced options -> Command Prompt
mbr2gpt /validate
mbr2gpt /convert

Online
mbr2gpt /validate /allowFullOS

У меня была ошибка, команда mbr2gpt не выполнялась. Похоже из-за того что у меня было два раздела восстановления. У знать какой используется можно reagentc /info, неиспользуемый раздел можно удалить. Удалить через diskpart не получилось, удалил с помощью EaseUS Partition Master Free Edition
```