import{_ as e,o as a,c as d,e as i}from"./app-024c187f.js";const s={},n=i(`<h1 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> Storage</h1><h2 id="partioning" tabindex="-1"><a class="header-anchor" href="#partioning" aria-hidden="true">#</a> Partioning</h2><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> Server</h3><p>/boot xfs ~1GB / xfs(LVM)</p><h2 id="geom-bsd" tabindex="-1"><a class="header-anchor" href="#geom-bsd" aria-hidden="true">#</a> GEOM (BSD)</h2><h3 id="raid-0" tabindex="-1"><a class="header-anchor" href="#raid-0" aria-hidden="true">#</a> RAID 0</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. # kldload geom_stripe (Загрузите модуль geom_stripe.ko)
2. # gstripe label -v st0 /dev/ad2 /dev/ad3 (создание дисковой последовательности из двух неиспользуемых и неразмеченных ATA дисков /dev/ad2 и /dev/ad3)
3. # bsdlabel -wB /dev/stripe/st0 (записываем стандартную метку (таблицу разделов), в новый том, и устанавливаем стандартный загрузчик)
    Теперь в /dev/stripe кроме st0 появились ещё два устройства - st0a и st0c
4. # newfs -U /dev/stripe/st0a (создём файловую систему на устройстве st0a, используя утилиту newfs)
5. # mount /dev/stripe/st0a /mnt (Монтируем вручную)
6. # mkdir /stripe &amp;&amp; echo &quot;/dev/stripe/st0a /stripe ufs rw 2 2&quot; &gt;&gt; /etc/fstab (Создайте постоянную точку монтирования /stripe и добавляем о ней информацию в /etc/fstab для автоматического монтирования при загрузке)
7. # echo &#39;geom_stripe_load=&quot;YES&quot;&#39; &gt;&gt; /boot/loader.conf (автоматическая загрузка модуля во время инициализации системы)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="raid-1" tabindex="-1"><a class="header-anchor" href="#raid-1" aria-hidden="true">#</a> RAID 1</h3><h2 id="mdadm-soft-raid" tabindex="-1"><a class="header-anchor" href="#mdadm-soft-raid" aria-hidden="true">#</a> MDADM (Soft Raid)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Сначала создаём разделы
mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sda /dev/sdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lvm" tabindex="-1"><a class="header-anchor" href="#lvm" aria-hidden="true">#</a> LVM</h2><p>PV (physical volume)<br> VG (volume group)<br> LV (logical volume)</p><p>pvs<br> pvcreate</p><p>vgs vgdisplay</p><p>lvs lvdisplay</p><h3 id="increase-size" tabindex="-1"><a class="header-anchor" href="#increase-size" aria-hidden="true">#</a> Increase size</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Extend &#39;extended&#39; partition
    GParted

Extend the Volume Group
    GParted

Extend the Logical Volume
    sudo lvextend -l +100%FREE /dev/srv-debian-2-vg/root

Extend the filesystem
    check the filesystem with lsblk -f or df -Th
    if XFS
        sudo xfs_growfs /dev/mapper/srv--debian--2--vg-root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lvm-on-mdadm" tabindex="-1"><a class="header-anchor" href="#lvm-on-mdadm" aria-hidden="true">#</a> LVM on MDADM</h2><p>(/dev/sda1, /dev/sdb1) -&gt; md0 -&gt; /boot (/dev/sda5, /dev/sdb5) -&gt; md1 -&gt; VG -&gt; LV (root, home) -&gt; (/, /home)</p><h2 id="ssd" tabindex="-1"><a class="header-anchor" href="#ssd" aria-hidden="true">#</a> SSD:</h2><pre><code>Over-Provisioning (OP) - 10% (home), 30% (server)
</code></pre><h2 id="ntfs" tabindex="-1"><a class="header-anchor" href="#ntfs" aria-hidden="true">#</a> NTFS:</h2><pre><code>сжатие на NTFS не работает с размером кластера больше 4К
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
</code></pre><h2 id="zfs" tabindex="-1"><a class="header-anchor" href="#zfs" aria-hidden="true">#</a> ZFS</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zfs snapshot -r name_of_the_pool@name_of_the_snapshot
zfs send -R -c name_of_the_pool@name_of_the_snapshot &gt; export_name
zfs send -R -c name_of_the_pool@name_of_the_snapshot | ssh example.com cat &gt; mybackupfile
zfs send -R -c name_of_the_pool@name_of_the_snapshot | ssh example.com zfs receive storage/mybackup
zfs send -c -i name_of_previous_snapshot name_of_the_pool@name_of_the_snapshot | ssh example.com zfs receive storage/mybackup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xfs" tabindex="-1"><a class="header-anchor" href="#xfs" aria-hidden="true">#</a> XFS</h2><h2 id="ext-4" tabindex="-1"><a class="header-anchor" href="#ext-4" aria-hidden="true">#</a> Ext 4</h2><h2 id="ext-3" tabindex="-1"><a class="header-anchor" href="#ext-3" aria-hidden="true">#</a> Ext 3</h2><h2 id="ext-2" tabindex="-1"><a class="header-anchor" href="#ext-2" aria-hidden="true">#</a> Ext 2</h2><h2 id="reiserfs" tabindex="-1"><a class="header-anchor" href="#reiserfs" aria-hidden="true">#</a> ReiserFS</h2><h2 id="fat-32" tabindex="-1"><a class="header-anchor" href="#fat-32" aria-hidden="true">#</a> FAT 32</h2><h2 id="fat-16" tabindex="-1"><a class="header-anchor" href="#fat-16" aria-hidden="true">#</a> FAT 16</h2><h2 id="fat-12" tabindex="-1"><a class="header-anchor" href="#fat-12" aria-hidden="true">#</a> FAT 12</h2><h2 id="exfat" tabindex="-1"><a class="header-anchor" href="#exfat" aria-hidden="true">#</a> exFAT</h2>`,34),r=[n];function t(h,l){return a(),d("div",null,r)}const c=e(s,[["render",t],["__file","storage.html.vue"]]);export{c as default};
