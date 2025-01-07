import{_ as s,c as a,b as n,o as i}from"./app-BsHIgujo.js";const l={};function t(d,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="storage" tabindex="-1"><a class="header-anchor" href="#storage"><span>Storage</span></a></h1><p>fdisk - sgdisk - manage GPT partitions</p><h2 id="s-m-a-r-t" tabindex="-1"><a class="header-anchor" href="#s-m-a-r-t"><span>S.M.A.R.T.</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">smartctl /dev/sda -i (отобразит идентификационную информацию о диске)</span>
<span class="line">smartctl --scan (список дисков)</span>
<span class="line"></span>
<span class="line">smartctl /dev/sda -t short (запустить короткий тест)</span>
<span class="line">smartctl /dev/sda -t long (запустить расширенное тестирование)</span>
<span class="line">smartctl /dev/sda -l selftest (отобразить информацию как прошло тестирование)</span>
<span class="line"></span>
<span class="line">sudo apt-get install smartmontools</span>
<span class="line">sudo smartctl -H /dev/sda</span>
<span class="line">sudo smartctl -A /dev/sda</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4k-aligned-advanced-format" tabindex="-1"><a class="header-anchor" href="#_4k-aligned-advanced-format"><span>4K aligned (Advanced Format)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">wmic partition get Blocksize,StartingOffset, Name</span>
<span class="line">fsutil fsinfo ntfsinfo &lt;drive letter&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssd-windows" tabindex="-1"><a class="header-anchor" href="#ssd-windows"><span>SSD Windows</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">проверить, включена ли поддержка TRIM</span>
<span class="line">cmd -&gt; fsutil behavior query disabledeletenotify</span>
<span class="line">NTFS DisableDeleteNotify = 0 (TRIM включен)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">включить TRIM для SSD в Windows</span>
<span class="line">cmd -&gt; fsutil behavior set disabledeletenotify NTFS 0</span>
<span class="line">    -&gt; fsutil behavior set disabledeletenotify ReFS 0 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="partioning" tabindex="-1"><a class="header-anchor" href="#partioning"><span>Partioning</span></a></h2><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server"><span>Server</span></a></h3><p>/boot xfs ~1GB / xfs(LVM)</p><h2 id="geom-bsd" tabindex="-1"><a class="header-anchor" href="#geom-bsd"><span>GEOM (BSD)</span></a></h2><h3 id="raid-0" tabindex="-1"><a class="header-anchor" href="#raid-0"><span>RAID 0</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. # kldload geom_stripe (Загрузите модуль geom_stripe.ko)</span>
<span class="line">2. # gstripe label -v st0 /dev/ad2 /dev/ad3 (создание дисковой последовательности из двух неиспользуемых и неразмеченных ATA дисков /dev/ad2 и /dev/ad3)</span>
<span class="line">3. # bsdlabel -wB /dev/stripe/st0 (записываем стандартную метку (таблицу разделов), в новый том, и устанавливаем стандартный загрузчик)</span>
<span class="line">    Теперь в /dev/stripe кроме st0 появились ещё два устройства - st0a и st0c</span>
<span class="line">4. # newfs -U /dev/stripe/st0a (создём файловую систему на устройстве st0a, используя утилиту newfs)</span>
<span class="line">5. # mount /dev/stripe/st0a /mnt (Монтируем вручную)</span>
<span class="line">6. # mkdir /stripe &amp;&amp; echo &quot;/dev/stripe/st0a /stripe ufs rw 2 2&quot; &gt;&gt; /etc/fstab (Создайте постоянную точку монтирования /stripe и добавляем о ней информацию в /etc/fstab для автоматического монтирования при загрузке)</span>
<span class="line">7. # echo &#39;geom_stripe_load=&quot;YES&quot;&#39; &gt;&gt; /boot/loader.conf (автоматическая загрузка модуля во время инициализации системы)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="raid-1" tabindex="-1"><a class="header-anchor" href="#raid-1"><span>RAID 1</span></a></h3><h2 id="mdadm-soft-raid" tabindex="-1"><a class="header-anchor" href="#mdadm-soft-raid"><span>MDADM (Soft Raid)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Сначала создаём разделы</span>
<span class="line">mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sda /dev/sdb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lvm" tabindex="-1"><a class="header-anchor" href="#lvm"><span>LVM</span></a></h2><p>PV (physical volume)<br> VG (volume group)<br> LV (logical volume)</p><p>pvs<br> pvcreate</p><p>vgs vgdisplay</p><p>lvs lvdisplay</p><h3 id="increase-size" tabindex="-1"><a class="header-anchor" href="#increase-size"><span>Increase size</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Extend &#39;extended&#39; partition</span>
<span class="line">    GParted</span>
<span class="line"></span>
<span class="line">Extend the Volume Group</span>
<span class="line">    GParted</span>
<span class="line"></span>
<span class="line">Extend the Logical Volume</span>
<span class="line">    sudo lvextend -l +100%FREE /dev/srv-debian-2-vg/root</span>
<span class="line"></span>
<span class="line">Extend the filesystem</span>
<span class="line">    check the filesystem with lsblk -f or df -Th</span>
<span class="line">    if XFS</span>
<span class="line">        sudo xfs_growfs /dev/mapper/srv--debian--2--vg-root</span>
<span class="line">    if Ext4</span>
<span class="line">        resize2fs /dev/mapper/lvm_system-root</span>
<span class="line">    if btrfs</span>
<span class="line">        btrfs filesystem resize max /mounted_volume</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lvm-on-mdadm" tabindex="-1"><a class="header-anchor" href="#lvm-on-mdadm"><span>LVM on MDADM</span></a></h2><p>(/dev/sda1, /dev/sdb1) -&gt; md0 -&gt; /boot (/dev/sda5, /dev/sdb5) -&gt; md1 -&gt; VG -&gt; LV (root, home) -&gt; (/, /home)</p><h2 id="ssd" tabindex="-1"><a class="header-anchor" href="#ssd"><span>SSD:</span></a></h2><pre><code>Over-Provisioning (OP) - 10% (home), 30% (server)
</code></pre><h2 id="ntfs" tabindex="-1"><a class="header-anchor" href="#ntfs"><span>NTFS:</span></a></h2><pre><code>сжатие на NTFS не работает с размером кластера больше 4К
системный - 4К
Раздел под большие файлы (Музыка, видео, дистрибутивы) размер кластера 64к
Раздел для рабочих файлов (Документы) размер кластера 16к-32к
Своп, гибернейт 64к
Удаление раздела восстановления, который не удаляется через диспетчер дисков
\`\`\`
Одновременно нажмите клавиши [Win] и [R], чтобы открылось командное окно «Выполнить».
Введите «diskmgmt.msc» и нажмите «OK». Запустится меню «Управление дисками».
Найдите раздел восстановления и посмотрите, на каком диске он находится. Как правило, это «Диск 0».
Нажмите [Win] и [R] еще раз и введите «diskpart». Снова подтвердите нажатием «OK».
Используйте команду «select disk 0», если этот раздел находится на диске 0.
Затем введите «list partition» и в списке найдите раздел восстановления.
Теперь напишите следующую команду: «select partition N», где N — это номер раздела например, 1. Измените число в формулировке команды, в зависимости от расположения раздела в вашей системе.
Затем введите «delete partition override». Раздел восстановления будет удален.
\`\`\`
</code></pre><h2 id="zfs" tabindex="-1"><a class="header-anchor" href="#zfs"><span>ZFS</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">?Pool</span>
<span class="line">?Dataset</span>
<span class="line">?Partition</span>
<span class="line">zfs snapshot -r name_of_the_pool@name_of_the_snapshot</span>
<span class="line">zfs send -R -c name_of_the_pool@name_of_the_snapshot &gt; export_name</span>
<span class="line">zfs send -R -c name_of_the_pool@name_of_the_snapshot | ssh example.com cat &gt; mybackupfile</span>
<span class="line">zfs send -R -c name_of_the_pool@name_of_the_snapshot | ssh example.com zfs receive storage/mybackup</span>
<span class="line">zfs send -c -i name_of_previous_snapshot name_of_the_pool@name_of_the_snapshot | ssh example.com zfs receive storage/mybackup</span>
<span class="line"></span>
<span class="line">convert nonredundant pool (1 disk) to mirror poll:</span>
<span class="line">    zpool attach &lt;pool_name&gt; &lt;existing_disk&gt; &lt;new_disk&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xfs" tabindex="-1"><a class="header-anchor" href="#xfs"><span>XFS</span></a></h2><h2 id="ext-4" tabindex="-1"><a class="header-anchor" href="#ext-4"><span>Ext 4</span></a></h2><h2 id="ext-3" tabindex="-1"><a class="header-anchor" href="#ext-3"><span>Ext 3</span></a></h2><h2 id="ext-2" tabindex="-1"><a class="header-anchor" href="#ext-2"><span>Ext 2</span></a></h2><h2 id="reiserfs" tabindex="-1"><a class="header-anchor" href="#reiserfs"><span>ReiserFS</span></a></h2><h2 id="fat-32" tabindex="-1"><a class="header-anchor" href="#fat-32"><span>FAT 32</span></a></h2><h2 id="fat-16" tabindex="-1"><a class="header-anchor" href="#fat-16"><span>FAT 16</span></a></h2><h2 id="fat-12" tabindex="-1"><a class="header-anchor" href="#fat-12"><span>FAT 12</span></a></h2><h2 id="exfat" tabindex="-1"><a class="header-anchor" href="#exfat"><span>exFAT</span></a></h2><h2 id="mbr-to-gpt" tabindex="-1"><a class="header-anchor" href="#mbr-to-gpt"><span>MBR to GPT</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Offline</span>
<span class="line">Settings -&gt; Update &amp; Security -&gt;  Recovery -&gt; &quot;Advanced startup&quot; -&gt; Restart now button</span>
<span class="line">Troubleshoot -&gt; Advanced options -&gt; Command Prompt</span>
<span class="line">mbr2gpt /validate</span>
<span class="line">mbr2gpt /convert</span>
<span class="line"></span>
<span class="line">Online</span>
<span class="line">mbr2gpt /validate /allowFullOS</span>
<span class="line"></span>
<span class="line">У меня была ошибка, команда mbr2gpt не выполнялась. Похоже из-за того что у меня было два раздела восстановления. У знать какой используется можно reagentc /info, неиспользуемый раздел можно удалить. Удалить через diskpart не получилось, удалил с помощью EaseUS Partition Master Free Edition</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44)]))}const c=s(l,[["render",t],["__file","storage.html.vue"]]),p=JSON.parse('{"path":"/os/storage.html","title":"Storage","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"S.M.A.R.T.","slug":"s-m-a-r-t","link":"#s-m-a-r-t","children":[]},{"level":2,"title":"4K aligned (Advanced Format)","slug":"_4k-aligned-advanced-format","link":"#_4k-aligned-advanced-format","children":[]},{"level":2,"title":"SSD Windows","slug":"ssd-windows","link":"#ssd-windows","children":[]},{"level":2,"title":"Partioning","slug":"partioning","link":"#partioning","children":[{"level":3,"title":"Server","slug":"server","link":"#server","children":[]}]},{"level":2,"title":"GEOM (BSD)","slug":"geom-bsd","link":"#geom-bsd","children":[{"level":3,"title":"RAID 0","slug":"raid-0","link":"#raid-0","children":[]},{"level":3,"title":"RAID 1","slug":"raid-1","link":"#raid-1","children":[]}]},{"level":2,"title":"MDADM (Soft Raid)","slug":"mdadm-soft-raid","link":"#mdadm-soft-raid","children":[]},{"level":2,"title":"LVM","slug":"lvm","link":"#lvm","children":[{"level":3,"title":"Increase size","slug":"increase-size","link":"#increase-size","children":[]}]},{"level":2,"title":"LVM on MDADM","slug":"lvm-on-mdadm","link":"#lvm-on-mdadm","children":[]},{"level":2,"title":"SSD:","slug":"ssd","link":"#ssd","children":[]},{"level":2,"title":"NTFS:","slug":"ntfs","link":"#ntfs","children":[]},{"level":2,"title":"ZFS","slug":"zfs","link":"#zfs","children":[]},{"level":2,"title":"XFS","slug":"xfs","link":"#xfs","children":[]},{"level":2,"title":"Ext 4","slug":"ext-4","link":"#ext-4","children":[]},{"level":2,"title":"Ext 3","slug":"ext-3","link":"#ext-3","children":[]},{"level":2,"title":"Ext 2","slug":"ext-2","link":"#ext-2","children":[]},{"level":2,"title":"ReiserFS","slug":"reiserfs","link":"#reiserfs","children":[]},{"level":2,"title":"FAT 32","slug":"fat-32","link":"#fat-32","children":[]},{"level":2,"title":"FAT 16","slug":"fat-16","link":"#fat-16","children":[]},{"level":2,"title":"FAT 12","slug":"fat-12","link":"#fat-12","children":[]},{"level":2,"title":"exFAT","slug":"exfat","link":"#exfat","children":[]},{"level":2,"title":"MBR to GPT","slug":"mbr-to-gpt","link":"#mbr-to-gpt","children":[]}],"git":{"updatedTime":1736250118000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":5,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"os/storage.md"}');export{c as comp,p as data};
