import{_ as e,o as a,c as i,e as n}from"./app-024c187f.js";const d={},s=n(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>w (показывает текущее время, uptime, load average, залогиненного пользователя, его терминал, время логина, ip адрес и что у него запущено в данный момент)
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
find . -name \\*.py | xargs wc -l (кол-во строк в файлах)
sudo blkid /dev/sda3
ionice [-c class] [-n classdata] [-t] COMMAND [ARG]...
    -c class Класс планирования. 0 ни для кого, 1 — для реального времени, 2 — для получения оптимального усилия, 3 — для «холостого хода» т.е idle.
    -p pid
diff file_1 file_2
diff -c file_1 file_2
diff -u file_1 file_2

Место занятое в директории
    ls -A | xargs -I {} du -sh -BM {} | sort -rn
    du -hs $(ls -A) -BM | sort -nr  (показывает чуть меньше чем предыдущая команда)
    du -sh -BM &lt;path&gt;/* | sort -rn | head -10 (Показывает не все файлы)

    du -hs .[^.]*
    du -xsh /media/* 2&gt;/dev/null | sort -rh
    du -hs ..[^.]* .[^.]* *
    du -cks | sort -nr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="s-m-a-r-t" tabindex="-1"><a class="header-anchor" href="#s-m-a-r-t" aria-hidden="true">#</a> S.M.A.R.T.</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install smartmontools
sudo smartctl --scan
sudo smartctl -i /dev/sda
sudo smartctl -H /dev/sda
sudo smartctl -A /dev/sda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="пользователи" tabindex="-1"><a class="header-anchor" href="#пользователи" aria-hidden="true">#</a> Пользователи</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useradd -m username  (-m create home directory)
passwd &lt;username&gt; (Сменить пароль пользователя)
usermod -aG sudo username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="директории" tabindex="-1"><a class="header-anchor" href="#директории" aria-hidden="true">#</a> Директории</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/ (Корневая директория)
/home (Файлы пользователя)
/boot (Файлы необходимые для запуска)
/bin (Испольняемые файлы)
/var (Различные файлы, используемые системой и установленными в ней программами)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="мониторинг" tabindex="-1"><a class="header-anchor" href="#мониторинг" aria-hidden="true">#</a> Мониторинг</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>iotop -a (нагрузка диска) (--only; -o -a)
iostat [опции] интервал повторения
iostat -dx 10 360
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="работа-с-сетью" tabindex="-1"><a class="header-anchor" href="#работа-с-сетью" aria-hidden="true">#</a> Работа с сетью</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>netstat -an -&gt; ss -an
ss -ltn (-l listen; -t tcp; -n port numeric)
ss --summary (ss -s)
sudo lsof -i:5432 (есть ли порт и кем занят)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="работа-с-фаилами" tabindex="-1"><a class="header-anchor" href="#работа-с-фаилами" aria-hidden="true">#</a> Работа с файлами</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ln -s file link - coздaниe cимвoличecкoй ccылки link нa фaйл file
touche file - ycтaнaвливaeт вpeмя дocтyпa и вpeмя мoдификaции фaйлa file. Уcли file нe cyщecтвyeт, oн coздaeтcя
cat &gt; file - oбъeдиняeт фaйлы и нaпpaвляeт иx нa cтaндapтный вывoд
more file - вывecти coдepжимoe фaйлa file
head file - вывecти пepвыe 10 cтpoк фaйлa file
tail file - вывecти пocлeдниe 10 cтpoк фaйлa file
tail -t file -  output the contents of file as it
grows - starting with the last 10 lines
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="управление-процессами" tabindex="-1"><a class="header-anchor" href="#управление-процессами" aria-hidden="true">#</a> Управление процессами</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ps - пoкaзaть вaши тeкyщиe aктивныe пpoцeccы
ps aux - ps with a lot of detail
top - oтoбpaжaeт вce зaпyщeнныe пpoцeccы
kill pid - yбить пpoцecc пo eгo pid&#39;y
kill proc - yбить вce пpoцeccы в имeни кoтopыx ecть proc
bg - oтoбpaзить cпиcoк ocтaнoвлeнныx или зaдaч в фoнe; зaпycк ocтaнoвлeнныx зaдaч в фoнe
fg - вoзoбнoвлeниe зaдaчи в peжимe пepeднeгo плaнa (foreground)
fg n - вoзoбнoвлeниe зaдaчи n в peжимe пepeднeгo плaнa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="поиск" tabindex="-1"><a class="header-anchor" href="#поиск" aria-hidden="true">#</a> Поиск</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep pattern files - пocик cтpoки в фaйлax files
grep -r pattern dir - пocик cтpoки в фaйлax диpeктopии dir
command | grep pattern - иcкaть cтpoкy в вывoдe кoмaнды
locate file - нaйти вce coвпaдaющиe вxoждeния фaйлa file
whereis file - пoкaзaть мecтoнaxoждeниe фaйлa file
find ./ -name &amp;lt;file_name&amp;gt; -print

# Быстро находит 5 самых больших файлов на CWD, не пересекая границы файловой системы.
find . -xdev -ls | sort -n -k 7 | tail -5 

#Находит все файлы меньше 100 Мб и отображает их читабельный размер.
find / -size +100M -exec du -h {} ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd" aria-hidden="true">#</a> systemd</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start|restart|status|stop service_name
systemctl enable service_name (включение автозапуска сервиса)
systemctl daemon-reload
journalctl -aemx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="at" tabindex="-1"><a class="header-anchor" href="#at" aria-hidden="true">#</a> at</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl status atd (Для того, чтобы планировщик at работал, должен быть запущен демон atd)

at 20:07 (Создание задания на выполнение в 20:07, Дальше откроется простая оболочка, где можно ввести текст. Напишите команду, которую хотите выполнить)
at&gt; /usr/bin/echo &quot;Hello&quot; &gt; /tmp/hello.txt (Затем нажмите ctrl+shift+d для сохранения задания. Получите об этом информацию)
at&gt; &lt;EOT&gt; 
job 6 at Wed Oct 20 20:07:00 2021

echo &#39;/usr/bin/echo &quot;Hello&quot; &gt; /tmp/hello.txt&#39; | at 20:55 (Можно автоматом создать эту же задачу одной командой через pipe)

atq (Посмотреть очередь задач)
at -с 7 (Подробности задачи)
atrm 7 (Удалить задачу)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ss" tabindex="-1"><a class="header-anchor" href="#ss" aria-hidden="true">#</a> ss</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ss -s (общая информация)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="netstat" tabindex="-1"><a class="header-anchor" href="#netstat" aria-hidden="true">#</a> netstat</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>netstat -an | wc -l (кол-во всех соединений)
netstat -an | grep ESTABLISHED (кол-во соединений в статусе ESTABLISHED)
netstat -an | grep ESTABLISHED | awk -F: &#39;{print $2}&#39; | awk &#39;{print $1}&#39; | sort | uniq -c | sort -n | tail -n 10 (10 портов с наиболее большим кол-вом соединений)
netstat -n | awk &#39;/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}&#39; (статистика соединений по состоянию (SYNC_RECV; CLOSE_WAIT; ESTABLISHED; FIN_WAIT; TIME_WAIT))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="swap-file" tabindex="-1"><a class="header-anchor" href="#swap-file" aria-hidden="true">#</a> Swap File</h2><p>/# 2GB<br> dd if=/dev/zero of=/swapfile bs=1024 count=2097152 (создать файл заполненый нулями)<br> chmod 600 /swapfile (выставить права)<br> mkswap /swapfile (/sbin/mkswap - Devuan 4) (создать формат подкачки в файле)<br> swapon /swapfile (/sbin/swapon - Devuan 4) (включить файл подкачки)<br> swapoff /swapfile (отключить файл подкачки)</p><p>add an entry in the /etc/fstab file of every instance of Linux that will be using that swap space /# Swap file created on DATE /swapfile none swap sw 0 0</p><h2 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> awk</h2><h2 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h2><h2 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h2><h2 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> SSH</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh -L 127.0.0.1:3129:127.0.0.1:80 user@remoteserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo" aria-hidden="true">#</a> Sudo</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo -E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tmux" tabindex="-1"><a class="header-anchor" href="#tmux" aria-hidden="true">#</a> Tmux</h2><h2 id="screen" tabindex="-1"><a class="header-anchor" href="#screen" aria-hidden="true">#</a> Screen</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>screen -ls
screen -r &lt;id&gt;
Ctrl+a c (Создать новое окно)
Ctrl+a &lt;num&gt; (перейти к окну по номеру закреплённым за окном)
Ctrl+a &quot; (перейти к окну, выбрав окно из списка)
Ctrl+a n (перейти к следующему окну)
Ctrl+a p (перейти к предыдущенму окну)
Ctrl+a S (разделить экран по горизонтали)
Ctrl+a | (разделить экран по вертикали)
Ctrl+a Tab (выбор части разделённого экрана)
Ctrl+a X (закрыть активную часть разделённого экрана)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="midnight-commander-mc" tabindex="-1"><a class="header-anchor" href="#midnight-commander-mc" aria-hidden="true">#</a> Midnight Commander (mc)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Ctrl+s - быстрое перемещение по имени к нужному файлу или каталогу. После нажатия этой комбинации, внизу панели появляется строка для ввода. По мере её заполнения, фокус будет перемещаться к файлам и папкам, попадающим под вводимое имя.
Ctrl+o - свернуть окно MC. Мы просто перемещаемся обратно в консоль. Если снова нажимаем Ctrl+o, открываем свёрнутый MC.
Ctrl+\\ - закладки. Как без них жить, не понимаю. У меня туда сразу идут /etc, /var/log а дальше уже в зависимости от функционала.
Shift+F5 - сделать тут же копию файла с другим именем. Удобно, когда правишь конфиги. Тут же сохраняешь старый с добавлением .old.
Shift+F6 - переименовать файл.
Shift++ (шифт и потом плюс) - выбрать все файлы или каталоги по маске.
Ctrl+x+o - Открыть интерфейс управления Chown.
Ctrl+x+c - Открыть интерфейс управления Chmod. Не очень удобно, пользуюсь редко. Чаще использую Advanced Chown, там более наглядно права доступа выставляются. Но, к сожалению, у этой команды нет горячих клавиш. Приходится жать F9 - File - A.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="работа-с-фаиловои-системои" tabindex="-1"><a class="header-anchor" href="#работа-с-фаиловои-системои" aria-hidden="true">#</a> Работа с файловой системой</h2><h3 id="xfs" tabindex="-1"><a class="header-anchor" href="#xfs" aria-hidden="true">#</a> XFS</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkfs.xfs /dev/sdb1
xfs_admin -U generate /dev/sdb6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount" aria-hidden="true">#</a> Mount</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mount -o nouuid /dev/sdb7 disk-7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="fdisk" tabindex="-1"><a class="header-anchor" href="#fdisk" aria-hidden="true">#</a> fdisk</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fdisk -l /dev/sda
fdisk /dev/sda
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lsblk" tabindex="-1"><a class="header-anchor" href="#lsblk" aria-hidden="true">#</a> lsblk</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lsblk
lsblk -f
lsblk -o +FSTYPE,UUID,MODEL,SERIAL
lsblk -o +FSTYPE,UUID,MODEL,SERIAL -J
lsblk /dev/sda /dev/sdb
lsblk -l
lsblk -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fstab" tabindex="-1"><a class="header-anchor" href="#fstab" aria-hidden="true">#</a> fstab</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Автомонтирование дисков

Раздел NTFS
UUID=5F573D4D2CFD981F /media/5F573D4D2CFD981F ntfs-3g rw,users,locale=ru_RU.UTF-8 0 0

Раздел FAT и FAT32
UUID=номер_UUID /media/Patition-FAT32 vfat shortname=mixed,codepage=850,umask=002,uid=1000,gid=100,noauto,user 0 0

Раздел Ext4
UUID=номер_UUID /media/Ubuntu20 ext4 rw,users 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53),l=[s];function r(t,c){return a(),i("div",null,l)}const u=e(d,[["render",r],["__file","common.html.vue"]]);export{u as default};
