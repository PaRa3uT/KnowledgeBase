#
##
```
pwd (текущая директория)
ls (содержимое директории)
cd (смена каталога)
cp (копирование файлов и папок)
mv (переименовывание или перемещение файлов и папок)
touch (создание пустых файлов, изменение временной метки файлов)
cat (просматривать содержимое файлов, создавать копии файлов, присоединять содержимое одних файлов к другим)
tree (сведения о директориях в древовидном формате)
echo (вывод данных на экран)
grep (поиск строк)
tail (вывести 10 последних строк файла)
rm (удаление файлов и папок)
```

## Пользователи


## Директории
```
/ (Корневая директория)
/home (Файлы пользователя)
/boot (Файлы необходимые для запуска)
/bin (Испольняемые файлы)
/var (Различные файлы, используемые системой и установленными в ней программами)
```

## at
```
systemctl status atd (Для того, чтобы планировщик at работал, должен быть запущен демон atd)

at 20:07 (Создание задания на выполнение в 20:07, Дальше откроется простая оболочка, где можно ввести текст. Напишите команду, которую хотите выполнить)
at> /usr/bin/echo "Hello" > /tmp/hello.txt (Затем нажмите ctrl+shift+d для сохранения задания. Получите об этом информацию)
at> <EOT> 
job 6 at Wed Oct 20 20:07:00 2021

echo '/usr/bin/echo "Hello" > /tmp/hello.txt' | at 20:55 (Можно автоматом создать эту же задачу одной командой через pipe)

atq (Посмотреть очередь задач)
at -с 7 (Подробности задачи)
atrm 7 (Удалить задачу)
```

## ss
```
ss -s (общая информация)
```

## netstat
```
netstat -an | wc -l (кол-во всех соединений)
netstat -an | grep ESTABLISHED (кол-во соединений в статусе ESTABLISHED)
netstat -an | grep ESTABLISHED | awk -F: '{print $2}' | awk '{print $1}' | sort | uniq -c | sort -n | tail -n 10 (10 портов с наиболее большим кол-вом соединений)
netstat -n | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}' (статистика соединений по состоянию (SYNC_RECV; CLOSE_WAIT; ESTABLISHED; FIN_WAIT; TIME_WAIT))
```

## Swap File
/# 2GB  
dd if=/dev/zero of=/swapfile bs=1024 count=2097152 (создать файл заполненый нулями)  
chmod 600 /swapfile (выставить права)  
mkswap /swapfile (/sbin/mkswap - Devuan 4) (создать формат подкачки в файле)  
swapon /swapfile (/sbin/swapon - Devuan 4) (включить файл подкачки)  
swapoff /swapfile (отключить файл подкачки)

add an entry in the /etc/fstab file of every instance of Linux that will be using that swap space
/# Swap file created on DATE
/swapfile       none    swap    sw      0       0

## awk

## sed

## grep

## SSH
```
ssh -L 127.0.0.1:3129:127.0.0.1:80 user@remoteserver
```
## Sudo
```
sudo -E
```
## Tmux
## Screen


## Работа с файловой системой

### XFS
```
mkfs.xfs /dev/sdb1
xfs_admin -U generate /dev/sdb6
```

### Mount: 
```
mount -o nouuid /dev/sdb7 disk-7
```

### fdisk: 
```
fdisk -l /dev/sda
fdisk /dev/sda
```
