import{_ as e,o as a,c as i,e as d}from"./app-024c187f.js";const n={},t=d(`<h2 id="aptutide" tabindex="-1"><a class="header-anchor" href="#aptutide" aria-hidden="true">#</a> Aptutide</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>aptitude install package #установить пакет;
aptitude safe-upgrade package #обновить пакет;
aptitude update #проверить и установить обновления;
aptitude remove package #удалить пакет;
aptitude purge package #удалить пакета с концами, все данные и настройки;
aptitude search package #искать пакет.
aptitude why &lt;package&gt; # Кто поставил пакет
aptitude search &#39;~i!~M&#39; (посмотреть какие пакеты были установлены вручную)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apt" tabindex="-1"><a class="header-anchor" href="#apt" aria-hidden="true">#</a> apt</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get dist-upgrade #обновить ОС, killer-feature и оно работает!
apt-cache depends package #зависимости пакета;
apt-cache rdepends package #обратные зависимости от пакета.
apt-get remove --purge package
apt-get clean
apt-mark showmanual (посмотреть какие пакеты были установлены вручную)
apt list --installed
apt-cache pkgnames (посмотреть какие пакеты были установлены вручную)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dpkg" tabindex="-1"><a class="header-anchor" href="#dpkg" aria-hidden="true">#</a> dpkg</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dpkg -l #список установленных программ;
dpkg -l | grep ^ii | awk &#39;{ print $2}&#39; &gt; mylist.txt
dpkg --get-selections | grep -v deinstall
dpkg --get-selections | grep -v deinstall &gt; mylist.txt
dpkg -L package #список файлов пакета
dpkg-query -l (отобразит все установленные пакеты вместе с информацией о них)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),s=[t];function l(r,c){return a(),i("div",null,s)}const p=e(n,[["render",l],["__file","deb.html.vue"]]);export{p as default};
