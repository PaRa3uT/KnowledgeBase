import{_ as a,c as s,b as n,o as i}from"./app-BsHIgujo.js";const l={};function t(d,e){return i(),s("div",null,e[0]||(e[0]=[n(`<h2 id="aptutide" tabindex="-1"><a class="header-anchor" href="#aptutide"><span>Aptutide</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">aptitude install package #установить пакет;</span>
<span class="line">aptitude safe-upgrade package #обновить пакет;</span>
<span class="line">aptitude update #проверить и установить обновления;</span>
<span class="line">aptitude remove package #удалить пакет;</span>
<span class="line">aptitude purge package #удалить пакета с концами, все данные и настройки;</span>
<span class="line">aptitude search package #искать пакет.</span>
<span class="line">aptitude why &lt;package&gt; # Кто поставил пакет</span>
<span class="line">aptitude search &#39;~i!~M&#39; (посмотреть какие пакеты были установлены вручную)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apt" tabindex="-1"><a class="header-anchor" href="#apt"><span>apt</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">apt-get dist-upgrade #обновить ОС, killer-feature и оно работает!</span>
<span class="line">apt-cache depends package #зависимости пакета;</span>
<span class="line">apt-cache rdepends package #обратные зависимости от пакета.</span>
<span class="line">apt-get remove --purge package</span>
<span class="line">apt-get clean</span>
<span class="line">apt-mark showmanual (посмотреть какие пакеты были установлены вручную)</span>
<span class="line">apt list --installed</span>
<span class="line">apt-cache pkgnames (посмотреть какие пакеты были установлены вручную)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dpkg" tabindex="-1"><a class="header-anchor" href="#dpkg"><span>dpkg</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">dpkg -l #список установленных программ;</span>
<span class="line">dpkg -l | grep ^ii | awk &#39;{ print $2}&#39; &gt; mylist.txt</span>
<span class="line">dpkg --get-selections | grep -v deinstall</span>
<span class="line">dpkg --get-selections | grep -v deinstall &gt; mylist.txt</span>
<span class="line">dpkg -L package #список файлов пакета</span>
<span class="line">dpkg-query -l (отобразит все установленные пакеты вместе с информацией о них)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const r=a(l,[["render",t],["__file","deb.html.vue"]]),c=JSON.parse('{"path":"/os/linux/deb.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Aptutide","slug":"aptutide","link":"#aptutide","children":[]},{"level":2,"title":"apt","slug":"apt","link":"#apt","children":[]},{"level":2,"title":"dpkg","slug":"dpkg","link":"#dpkg","children":[]}],"git":{"updatedTime":1656356953000,"contributors":[{"name":"Tarasov Artur","username":"Tarasov Artur","email":"para3ut.74@gmail.com","commits":1,"url":"https://github.com/Tarasov Artur"}]},"filePathRelative":"os/linux/deb.md"}');export{r as comp,c as data};
