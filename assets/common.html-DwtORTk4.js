import{_ as e,c as n,b as a,o as l}from"./app-BsHIgujo.js";const i={};function d(t,s){return l(),n("div",null,s[0]||(s[0]=[a(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1><h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span></span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">w (показывает текущее время, uptime, load average, залогиненного пользователя, его терминал, время логина, ip адрес и что у него запущено в данный момент)</span>
<span class="line">pwd (текущая директория)</span>
<span class="line">ls (содержимое директории)</span>
<span class="line">cd (смена каталога)</span>
<span class="line">cp (копирование файлов и папок)</span>
<span class="line">mv (переименовывание или перемещение файлов и папок)</span>
<span class="line">touch (создание пустых файлов, изменение временной метки файлов)</span>
<span class="line">cat (просматривать содержимое файлов, создавать копии файлов, присоединять содержимое одних файлов к другим)</span>
<span class="line">tree (сведения о директориях в древовидном формате)</span>
<span class="line">echo (вывод данных на экран)</span>
<span class="line">grep (поиск строк)</span>
<span class="line">tail (вывести 10 последних строк файла)</span>
<span class="line">rm (удаление файлов и папок)</span>
<span class="line">find . -name \\*.py | xargs wc -l (кол-во строк в файлах)</span>
<span class="line">sudo blkid /dev/sda3</span>
<span class="line">ionice [-c class] [-n classdata] [-t] COMMAND [ARG]...</span>
<span class="line">    -c class Класс планирования. 0 ни для кого, 1 — для реального времени, 2 — для получения оптимального усилия, 3 — для «холостого хода» т.е idle.</span>
<span class="line">    -p pid</span>
<span class="line">diff file_1 file_2</span>
<span class="line">diff -c file_1 file_2</span>
<span class="line">diff -u file_1 file_2</span>
<span class="line"></span>
<span class="line">Место занятое в директории</span>
<span class="line">    ls -A | xargs -I {} du -sh -BM {} | sort -rn</span>
<span class="line">    du -hs $(ls -A) -BM | sort -nr  (показывает чуть меньше чем предыдущая команда)</span>
<span class="line">    du -sh -BM &lt;path&gt;/* | sort -rn | head -10 (Показывает не все файлы)</span>
<span class="line"></span>
<span class="line">    du -hs .[^.]*</span>
<span class="line">    du -xsh /media/* 2&gt;/dev/null | sort -rh</span>
<span class="line">    du -hs ..[^.]* .[^.]* *</span>
<span class="line">    du -cks | sort -nr</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="s-m-a-r-t" tabindex="-1"><a class="header-anchor" href="#s-m-a-r-t"><span>S.M.A.R.T.</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo apt-get install smartmontools</span>
<span class="line">sudo smartctl --scan</span>
<span class="line">sudo smartctl -i /dev/sda</span>
<span class="line">sudo smartctl -H /dev/sda</span>
<span class="line">sudo smartctl -A /dev/sda</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="пользователи" tabindex="-1"><a class="header-anchor" href="#пользователи"><span>Пользователи</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">useradd -m username  (-m create home directory)</span>
<span class="line">passwd &lt;username&gt; (Сменить пароль пользователя)</span>
<span class="line">usermod -aG sudo username</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="директории" tabindex="-1"><a class="header-anchor" href="#директории"><span>Директории</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/ (Корневая директория)</span>
<span class="line">/home (Файлы пользователя)</span>
<span class="line">/boot (Файлы необходимые для запуска)</span>
<span class="line">/bin (Испольняемые файлы)</span>
<span class="line">/var (Различные файлы, используемые системой и установленными в ней программами)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="мониторинг" tabindex="-1"><a class="header-anchor" href="#мониторинг"><span>Мониторинг</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">iotop -a (нагрузка диска) (--only; -o -a)</span>
<span class="line">iostat [опции] интервал повторения</span>
<span class="line">iostat -dx 10 360</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="работа-с-сетью" tabindex="-1"><a class="header-anchor" href="#работа-с-сетью"><span>Работа с сетью</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">netstat -an -&gt; ss -an</span>
<span class="line">ss -ltn (-l listen; -t tcp; -n port numeric)</span>
<span class="line">ss --summary (ss -s)</span>
<span class="line">sudo lsof -i:5432 (есть ли порт и кем занят)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="работа-с-фаилами" tabindex="-1"><a class="header-anchor" href="#работа-с-фаилами"><span>Работа с файлами</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ln -s file link - coздaниe cимвoличecкoй ccылки link нa фaйл file</span>
<span class="line">touche file - ycтaнaвливaeт вpeмя дocтyпa и вpeмя мoдификaции фaйлa file. Уcли file нe cyщecтвyeт, oн coздaeтcя</span>
<span class="line">cat &gt; file - oбъeдиняeт фaйлы и нaпpaвляeт иx нa cтaндapтный вывoд</span>
<span class="line">more file - вывecти coдepжимoe фaйлa file</span>
<span class="line">head file - вывecти пepвыe 10 cтpoк фaйлa file</span>
<span class="line">tail file - вывecти пocлeдниe 10 cтpoк фaйлa file</span>
<span class="line">tail -t file -  output the contents of file as it</span>
<span class="line">grows - starting with the last 10 lines</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="управление-процессами" tabindex="-1"><a class="header-anchor" href="#управление-процессами"><span>Управление процессами</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ps - пoкaзaть вaши тeкyщиe aктивныe пpoцeccы</span>
<span class="line">ps aux - ps with a lot of detail</span>
<span class="line">top - oтoбpaжaeт вce зaпyщeнныe пpoцeccы</span>
<span class="line">kill pid - yбить пpoцecc пo eгo pid&#39;y</span>
<span class="line">kill proc - yбить вce пpoцeccы в имeни кoтopыx ecть proc</span>
<span class="line">bg - oтoбpaзить cпиcoк ocтaнoвлeнныx или зaдaч в фoнe; зaпycк ocтaнoвлeнныx зaдaч в фoнe</span>
<span class="line">fg - вoзoбнoвлeниe зaдaчи в peжимe пepeднeгo плaнa (foreground)</span>
<span class="line">fg n - вoзoбнoвлeниe зaдaчи n в peжимe пepeднeгo плaнa</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="поиск" tabindex="-1"><a class="header-anchor" href="#поиск"><span>Поиск</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">grep pattern files - пocик cтpoки в фaйлax files</span>
<span class="line">grep -r pattern dir - пocик cтpoки в фaйлax диpeктopии dir</span>
<span class="line">command | grep pattern - иcкaть cтpoкy в вывoдe кoмaнды</span>
<span class="line">locate file - нaйти вce coвпaдaющиe вxoждeния фaйлa file</span>
<span class="line">whereis file - пoкaзaть мecтoнaxoждeниe фaйлa file</span>
<span class="line">find ./ -name &amp;lt;file_name&amp;gt; -print</span>
<span class="line"></span>
<span class="line"># Быстро находит 5 самых больших файлов на CWD, не пересекая границы файловой системы.</span>
<span class="line">find . -xdev -ls | sort -n -k 7 | tail -5 </span>
<span class="line"></span>
<span class="line">#Находит все файлы меньше 100 Мб и отображает их читабельный размер.</span>
<span class="line">find / -size +100M -exec du -h {} ;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd"><span>systemd</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">systemctl start|restart|status|stop service_name</span>
<span class="line">systemctl enable service_name (включение автозапуска сервиса)</span>
<span class="line">systemctl daemon-reload</span>
<span class="line">journalctl -aemx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="at" tabindex="-1"><a class="header-anchor" href="#at"><span>at</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">systemctl status atd (Для того, чтобы планировщик at работал, должен быть запущен демон atd)</span>
<span class="line"></span>
<span class="line">at 20:07 (Создание задания на выполнение в 20:07, Дальше откроется простая оболочка, где можно ввести текст. Напишите команду, которую хотите выполнить)</span>
<span class="line">at&gt; /usr/bin/echo &quot;Hello&quot; &gt; /tmp/hello.txt (Затем нажмите ctrl+shift+d для сохранения задания. Получите об этом информацию)</span>
<span class="line">at&gt; &lt;EOT&gt; </span>
<span class="line">job 6 at Wed Oct 20 20:07:00 2021</span>
<span class="line"></span>
<span class="line">echo &#39;/usr/bin/echo &quot;Hello&quot; &gt; /tmp/hello.txt&#39; | at 20:55 (Можно автоматом создать эту же задачу одной командой через pipe)</span>
<span class="line"></span>
<span class="line">atq (Посмотреть очередь задач)</span>
<span class="line">at -с 7 (Подробности задачи)</span>
<span class="line">atrm 7 (Удалить задачу)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ss" tabindex="-1"><a class="header-anchor" href="#ss"><span>ss</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ss -s (общая информация)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="netstat" tabindex="-1"><a class="header-anchor" href="#netstat"><span>netstat</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">netstat -an | wc -l (кол-во всех соединений)</span>
<span class="line">netstat -an | grep ESTABLISHED (кол-во соединений в статусе ESTABLISHED)</span>
<span class="line">netstat -an | grep ESTABLISHED | awk -F: &#39;{print $2}&#39; | awk &#39;{print $1}&#39; | sort | uniq -c | sort -n | tail -n 10 (10 портов с наиболее большим кол-вом соединений)</span>
<span class="line">netstat -n | awk &#39;/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}&#39; (статистика соединений по состоянию (SYNC_RECV; CLOSE_WAIT; ESTABLISHED; FIN_WAIT; TIME_WAIT))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="swap-file" tabindex="-1"><a class="header-anchor" href="#swap-file"><span>Swap File</span></a></h2><p>/# 2GB<br> dd if=/dev/zero of=/swapfile bs=1024 count=2097152 (создать файл заполненый нулями)<br> chmod 600 /swapfile (выставить права)<br> mkswap /swapfile (/sbin/mkswap - Devuan 4) (создать формат подкачки в файле)<br> swapon /swapfile (/sbin/swapon - Devuan 4) (включить файл подкачки)<br> swapoff /swapfile (отключить файл подкачки)</p><p>add an entry in the /etc/fstab file of every instance of Linux that will be using that swap space /# Swap file created on DATE /swapfile none swap sw 0 0</p><h2 id="awk" tabindex="-1"><a class="header-anchor" href="#awk"><span>awk</span></a></h2><h2 id="sed" tabindex="-1"><a class="header-anchor" href="#sed"><span>sed</span></a></h2><h2 id="grep" tabindex="-1"><a class="header-anchor" href="#grep"><span>grep</span></a></h2><h2 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh"><span>SSH</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ssh -L 127.0.0.1:3129:127.0.0.1:80 user@remoteserver</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo"><span>Sudo</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo -E</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="tmux" tabindex="-1"><a class="header-anchor" href="#tmux"><span>Tmux</span></a></h2><h2 id="screen" tabindex="-1"><a class="header-anchor" href="#screen"><span>Screen</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">screen -ls</span>
<span class="line">screen -r &lt;id&gt;</span>
<span class="line">Ctrl+a c (Создать новое окно)</span>
<span class="line">Ctrl+a &lt;num&gt; (перейти к окну по номеру закреплённым за окном)</span>
<span class="line">Ctrl+a &quot; (перейти к окну, выбрав окно из списка)</span>
<span class="line">Ctrl+a n (перейти к следующему окну)</span>
<span class="line">Ctrl+a p (перейти к предыдущенму окну)</span>
<span class="line">Ctrl+a S (разделить экран по горизонтали)</span>
<span class="line">Ctrl+a | (разделить экран по вертикали)</span>
<span class="line">Ctrl+a Tab (выбор части разделённого экрана)</span>
<span class="line">Ctrl+a X (закрыть активную часть разделённого экрана)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="midnight-commander-mc" tabindex="-1"><a class="header-anchor" href="#midnight-commander-mc"><span>Midnight Commander (mc)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Ctrl+s - быстрое перемещение по имени к нужному файлу или каталогу. После нажатия этой комбинации, внизу панели появляется строка для ввода. По мере её заполнения, фокус будет перемещаться к файлам и папкам, попадающим под вводимое имя.</span>
<span class="line">Ctrl+o - свернуть окно MC. Мы просто перемещаемся обратно в консоль. Если снова нажимаем Ctrl+o, открываем свёрнутый MC.</span>
<span class="line">Ctrl+\\ - закладки. Как без них жить, не понимаю. У меня туда сразу идут /etc, /var/log а дальше уже в зависимости от функционала.</span>
<span class="line">Shift+F5 - сделать тут же копию файла с другим именем. Удобно, когда правишь конфиги. Тут же сохраняешь старый с добавлением .old.</span>
<span class="line">Shift+F6 - переименовать файл.</span>
<span class="line">Shift++ (шифт и потом плюс) - выбрать все файлы или каталоги по маске.</span>
<span class="line">Ctrl+x+o - Открыть интерфейс управления Chown.</span>
<span class="line">Ctrl+x+c - Открыть интерфейс управления Chmod. Не очень удобно, пользуюсь редко. Чаще использую Advanced Chown, там более наглядно права доступа выставляются. Но, к сожалению, у этой команды нет горячих клавиш. Приходится жать F9 - File - A.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="работа-с-фаиловои-системои" tabindex="-1"><a class="header-anchor" href="#работа-с-фаиловои-системои"><span>Работа с файловой системой</span></a></h2><h3 id="xfs" tabindex="-1"><a class="header-anchor" href="#xfs"><span>XFS</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mkfs.xfs /dev/sdb1</span>
<span class="line">xfs_admin -U generate /dev/sdb6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mount" tabindex="-1"><a class="header-anchor" href="#mount"><span>Mount</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mount -o nouuid /dev/sdb7 disk-7</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="fdisk" tabindex="-1"><a class="header-anchor" href="#fdisk"><span>fdisk</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">fdisk -l /dev/sda</span>
<span class="line">fdisk /dev/sda</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lsblk" tabindex="-1"><a class="header-anchor" href="#lsblk"><span>lsblk</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">lsblk</span>
<span class="line">lsblk -f</span>
<span class="line">lsblk -o +FSTYPE,UUID,MODEL,SERIAL</span>
<span class="line">lsblk -o +FSTYPE,UUID,MODEL,SERIAL -J</span>
<span class="line">lsblk /dev/sda /dev/sdb</span>
<span class="line">lsblk -l</span>
<span class="line">lsblk -p</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fstab" tabindex="-1"><a class="header-anchor" href="#fstab"><span>fstab</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Автомонтирование дисков</span>
<span class="line"></span>
<span class="line">Раздел NTFS</span>
<span class="line">UUID=5F573D4D2CFD981F /media/5F573D4D2CFD981F ntfs-3g rw,users,locale=ru_RU.UTF-8 0 0</span>
<span class="line"></span>
<span class="line">Раздел FAT и FAT32</span>
<span class="line">UUID=номер_UUID /media/Patition-FAT32 vfat shortname=mixed,codepage=850,umask=002,uid=1000,gid=100,noauto,user 0 0</span>
<span class="line"></span>
<span class="line">Раздел Ext4</span>
<span class="line">UUID=номер_UUID /media/Ubuntu20 ext4 rw,users 0 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53)]))}const c=e(i,[["render",d],["__file","common.html.vue"]]),p=JSON.parse('{"path":"/os/linux/common.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"","slug":"-1","link":"#-1","children":[]},{"level":2,"title":"S.M.A.R.T.","slug":"s-m-a-r-t","link":"#s-m-a-r-t","children":[]},{"level":2,"title":"Пользователи","slug":"пользователи","link":"#пользователи","children":[]},{"level":2,"title":"Директории","slug":"директории","link":"#директории","children":[]},{"level":2,"title":"Мониторинг","slug":"мониторинг","link":"#мониторинг","children":[]},{"level":2,"title":"Работа с сетью","slug":"работа-с-сетью","link":"#работа-с-сетью","children":[]},{"level":2,"title":"Работа с файлами","slug":"работа-с-фаилами","link":"#работа-с-фаилами","children":[]},{"level":2,"title":"Управление процессами","slug":"управление-процессами","link":"#управление-процессами","children":[]},{"level":2,"title":"Поиск","slug":"поиск","link":"#поиск","children":[]},{"level":2,"title":"systemd","slug":"systemd","link":"#systemd","children":[]},{"level":2,"title":"at","slug":"at","link":"#at","children":[]},{"level":2,"title":"ss","slug":"ss","link":"#ss","children":[]},{"level":2,"title":"netstat","slug":"netstat","link":"#netstat","children":[]},{"level":2,"title":"Swap File","slug":"swap-file","link":"#swap-file","children":[]},{"level":2,"title":"awk","slug":"awk","link":"#awk","children":[]},{"level":2,"title":"sed","slug":"sed","link":"#sed","children":[]},{"level":2,"title":"grep","slug":"grep","link":"#grep","children":[]},{"level":2,"title":"SSH","slug":"ssh","link":"#ssh","children":[]},{"level":2,"title":"Sudo","slug":"sudo","link":"#sudo","children":[]},{"level":2,"title":"Tmux","slug":"tmux","link":"#tmux","children":[]},{"level":2,"title":"Screen","slug":"screen","link":"#screen","children":[]},{"level":2,"title":"Midnight Commander (mc)","slug":"midnight-commander-mc","link":"#midnight-commander-mc","children":[]},{"level":2,"title":"Работа с файловой системой","slug":"работа-с-фаиловои-системои","link":"#работа-с-фаиловои-системои","children":[{"level":3,"title":"XFS","slug":"xfs","link":"#xfs","children":[]},{"level":3,"title":"Mount","slug":"mount","link":"#mount","children":[]},{"level":3,"title":"fdisk","slug":"fdisk","link":"#fdisk","children":[]},{"level":3,"title":"lsblk","slug":"lsblk","link":"#lsblk","children":[]},{"level":3,"title":"fstab","slug":"fstab","link":"#fstab","children":[]}]}],"git":{"updatedTime":1698130122000,"contributors":[{"name":"Tarasov Artur","username":"Tarasov Artur","email":"para3ut.74@gmail.com","commits":17,"url":"https://github.com/Tarasov Artur"},{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":5,"url":"https://github.com/PaRa3uT"},{"name":"Тарасов Артур Робертович","username":"Тарасов Артур Робертович","email":"artarasov@mts.ru","commits":1,"url":"https://github.com/Тарасов Артур Робертович"}]},"filePathRelative":"os/linux/common.md"}');export{c as comp,p as data};
