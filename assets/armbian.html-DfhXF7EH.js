import{_ as e,c as t,b as n,o as s}from"./app-BsHIgujo.js";const i={};function l(r,a){return s(),t("div",null,a[0]||(a[0]=[n(`<h1 id="armbian" tabindex="-1"><a class="header-anchor" href="#armbian"><span>armbian</span></a></h1><p>Пароль root по умолчанию 1234</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">armbian-config</span>
<span class="line">armbianmonitor -m</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>arecord -f dat -d 60 | lame - -V2 -b 256 &gt; record.mp3 (Запись звука через встроенный микрофон OrangePi PC, перед этим выкрутите ползунки в alsamixer на максимум и снимите мут)</p><h2 id="update" tabindex="-1"><a class="header-anchor" href="#update"><span>Update</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">apt update</span>
<span class="line">apt upgrade</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="software" tabindex="-1"><a class="header-anchor" href="#software"><span>Software</span></a></h2><p><code>apt install -y vim --no-install-recommends apt install -y htop --no-install-recommends apt install -y tmux --no-install-recommends apt install -y python3-venv --no-install-recommends apt install -y python3-pip-whl --no-install-recommends</code></p><h2 id="nextcloud" tabindex="-1"><a class="header-anchor" href="#nextcloud"><span>NextCloud</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">wget https://raw.githubusercontent.com/nextcloud/nextcloudpi/master/install.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,10)]))}const o=e(i,[["render",l],["__file","armbian.html.vue"]]),c=JSON.parse('{"path":"/os/linux/armbian.html","title":"armbian","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Update","slug":"update","link":"#update","children":[]},{"level":2,"title":"Software","slug":"software","link":"#software","children":[]},{"level":2,"title":"NextCloud","slug":"nextcloud","link":"#nextcloud","children":[]}],"git":{"updatedTime":1736250118000,"contributors":[{"name":"Tarasov Artur","username":"Tarasov Artur","email":"para3ut.74@gmail.com","commits":3,"url":"https://github.com/Tarasov Artur"},{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":2,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"os/linux/armbian.md"}');export{o as comp,c as data};