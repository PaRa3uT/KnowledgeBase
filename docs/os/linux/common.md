#
##
```
w (показывает текущее время, uptime, load average, залогиненного пользователя, его терминал, время логина, ip адрес и что у него запущено в данный момент)
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
find . -name \*.py | xargs wc -l (кол-во строк в файлах)
sudo blkid /dev/sda3
ionice [-c class] [-n classdata] [-t] COMMAND [ARG]...
    -c class Класс планирования. 0 ни для кого, 1 — для реального времени, 2 — для получения оптимального усилия, 3 — для «холостого хода» т.е idle.
    -p pid
```

## S.M.A.R.T.
```
sudo apt-get install smartmontools
sudo smartctl --scan
sudo smartctl -i /dev/sda
sudo smartctl -H /dev/sda
sudo smartctl -A /dev/sda
```

## Пользователи
```
useradd -m username  (-m create home directory)
passwd <username> (Сменить пароль пользователя)
usermod -aG sudo username
```

## Директории
```
/ (Корневая директория)
/home (Файлы пользователя)
/boot (Файлы необходимые для запуска)
/bin (Испольняемые файлы)
/var (Различные файлы, используемые системой и установленными в ней программами)
```

## Мониторинг
```
iotop -a (нагрузка диска) (--only; -o -a)
iostat [опции] интервал повторения
iostat -dx 10 360
```

## Работа с сетью
```
netstat -an -> ss -an
ss -ltn (-l listen; -t tcp; -n port numeric)
ss --summary (ss -s)
```

## Работа с файлами
```
ln -s file link - coздaниe cимвoличecкoй ccылки link нa фaйл file
touche file - ycтaнaвливaeт вpeмя дocтyпa и вpeмя мoдификaции фaйлa file. Уcли file нe cyщecтвyeт, oн coздaeтcя
cat > file - oбъeдиняeт фaйлы и нaпpaвляeт иx нa cтaндapтный вывoд
more file - вывecти coдepжимoe фaйлa file
head file - вывecти пepвыe 10 cтpoк фaйлa file
tail file - вывecти пocлeдниe 10 cтpoк фaйлa file
tail -t file -  output the contents of file as it
grows - starting with the last 10 lines
```

## Управление процессами
```
ps - пoкaзaть вaши тeкyщиe aктивныe пpoцeccы
ps aux - ps with a lot of detail
top - oтoбpaжaeт вce зaпyщeнныe пpoцeccы
kill pid - yбить пpoцecc пo eгo pid'y
kill proc - yбить вce пpoцeccы в имeни кoтopыx ecть proc
bg - oтoбpaзить cпиcoк ocтaнoвлeнныx или зaдaч в фoнe; зaпycк ocтaнoвлeнныx зaдaч в фoнe
fg - вoзoбнoвлeниe зaдaчи в peжимe пepeднeгo плaнa (foreground)
fg n - вoзoбнoвлeниe зaдaчи n в peжимe пepeднeгo плaнa
```

## Поиск
```
grep pattern files - пocик cтpoки в фaйлax files
grep -r pattern dir - пocик cтpoки в фaйлax диpeктopии dir
command | grep pattern - иcкaть cтpoкy в вывoдe кoмaнды
locate file - нaйти вce coвпaдaющиe вxoждeния фaйлa file
whereis file - пoкaзaть мecтoнaxoждeниe фaйлa file
find ./ -name &lt;file_name&gt; -print

# Быстро находит 5 самых больших файлов на CWD, не пересекая границы файловой системы.
find . -xdev -ls | sort -n -k 7 | tail -5 

#Находит все файлы меньше 100 Мб и отображает их читабельный размер.
find / -size +100M -exec du -h {} ;
```

## systemd
```
systemctl start|restart|status|stop service_name
systemctl enable service_name (включение автозапуска сервиса)
systemctl daemon-reload
journalctl -aemx
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
```
screen -ls
screen -r <id>
Ctrl+a c (Создать новое окно)
Ctrl+a <num> (перейти к окну по номеру закреплённым за окном)
Ctrl+a " (перейти к окну, выбрав окно из списка)
Ctrl+a n (перейти к следующему окну)
Ctrl+a p (перейти к предыдущенму окну)
Ctrl+a S (разделить экран по горизонтали)
Ctrl+a | (разделить экран по вертикали)
Ctrl+a Tab (выбор части разделённого экрана)
Ctrl+a X (закрыть активную часть разделённого экрана)
```
## Midnight Commander (mc)
```
Ctrl+s - быстрое перемещение по имени к нужному файлу или каталогу. После нажатия этой комбинации, внизу панели появляется строка для ввода. По мере её заполнения, фокус будет перемещаться к файлам и папкам, попадающим под вводимое имя.
Ctrl+o - свернуть окно MC. Мы просто перемещаемся обратно в консоль. Если снова нажимаем Ctrl+o, открываем свёрнутый MC.
Ctrl+\ - закладки. Как без них жить, не понимаю. У меня туда сразу идут /etc, /var/log а дальше уже в зависимости от функционала.
Shift+F5 - сделать тут же копию файла с другим именем. Удобно, когда правишь конфиги. Тут же сохраняешь старый с добавлением .old.
Shift+F6 - переименовать файл.
Shift++ (шифт и потом плюс) - выбрать все файлы или каталоги по маске.
Ctrl+x+o - Открыть интерфейс управления Chown.
Ctrl+x+c - Открыть интерфейс управления Chmod. Не очень удобно, пользуюсь редко. Чаще использую Advanced Chown, там более наглядно права доступа выставляются. Но, к сожалению, у этой команды нет горячих клавиш. Приходится жать F9 - File - A.
```

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
