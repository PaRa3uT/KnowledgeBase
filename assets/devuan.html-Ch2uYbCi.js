import{_ as e,c as n,b as s,o as i}from"./app-BsHIgujo.js";const l={};function d(r,a){return i(),n("div",null,a[0]||(a[0]=[s(`<h1 id="devuan" tabindex="-1"><a class="header-anchor" href="#devuan"><span><a href="https://www.devuan.org" target="_blank" rel="noopener noreferrer">Devuan</a></span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">/etc/apt/sources.list (Default configurations)</span>
<span class="line"></span>
<span class="line">Devuan 4.0 Chimaera (stable)</span>
<span class="line">deb http://deb.devuan.org/merged chimaera          main</span>
<span class="line">deb http://deb.devuan.org/merged chimaera-updates  main</span>
<span class="line">deb http://deb.devuan.org/merged chimaera-security main</span>
<span class="line"></span>
<span class="line">Devuan Daedalus (testing)</span>
<span class="line">deb http://deb.devuan.org/merged daedalus          main</span>
<span class="line">deb http://deb.devuan.org/merged daedalus-updates  main</span>
<span class="line">deb http://deb.devuan.org/merged daedalus-security main</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="upgrade-4-chimera-to-5-daedalus" tabindex="-1"><a class="header-anchor" href="#upgrade-4-chimera-to-5-daedalus"><span>Upgrade 4 (Chimera) to 5 (Daedalus)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Control-Alt-F1</span>
<span class="line"></span>
<span class="line">apt-get update &amp;&amp; apt-get upgrade</span>
<span class="line">vim /etc/apt/sources.list</span>
<span class="line">    deb http://deb.devuan.org/merged daedalus main</span>
<span class="line">    deb http://deb.devuan.org/merged daedalus-updates main</span>
<span class="line">    deb http://deb.devuan.org/merged daedalus-security main</span>
<span class="line">    #deb http://deb.devuan.org/merged daedalus-backports main</span>
<span class="line"></span>
<span class="line">apt-get update</span>
<span class="line"></span>
<span class="line">killall xscreensaver</span>
<span class="line"></span>
<span class="line">apt-get upgrade</span>
<span class="line">apt-get dist-upgrade</span>
<span class="line"></span>
<span class="line">apt-get -f install</span>
<span class="line">apt-get dist-upgrade</span>
<span class="line"></span>
<span class="line">reboot</span>
<span class="line"></span>
<span class="line">apt-get autoremove --purge</span>
<span class="line">apt-get autoclean</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const p=e(l,[["render",d],["__file","devuan.html.vue"]]),u=JSON.parse('{"path":"/os/linux/devuan.html","title":"Devuan","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Upgrade 4 (Chimera) to 5 (Daedalus)","slug":"upgrade-4-chimera-to-5-daedalus","link":"#upgrade-4-chimera-to-5-daedalus","children":[]}],"git":{"updatedTime":1736250118000,"contributors":[{"name":"Tarasov Artur","username":"Tarasov Artur","email":"para3ut.74@gmail.com","commits":2,"url":"https://github.com/Tarasov Artur"},{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":3,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"os/linux/devuan.md"}');export{p as comp,u as data};
