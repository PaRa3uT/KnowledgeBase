import{_ as s,c as a,b as n,o as l}from"./app-BsHIgujo.js";const d={};function i(r,e){return l(),a("div",null,e[0]||(e[0]=[n(`<h1 id="fedora" tabindex="-1"><a class="header-anchor" href="#fedora"><span>Fedora</span></a></h1><p>Дистрибутивы с различными рабочими столами - https://spins.fedoraproject.org/en/</p><h2 id="upgrade-37-to-38" tabindex="-1"><a class="header-anchor" href="#upgrade-37-to-38"><span>Upgrade 37 to 38</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Step 1: Update your current Fedora 37</span>
<span class="line">    sudo dnf --refresh update</span>
<span class="line">    sudo dnf upgrade</span>
<span class="line">    sudo reboot</span>
<span class="line"></span>
<span class="line">Step 2: Install dnf upgrade plugin, which will help you to download Fedora 38 packages</span>
<span class="line">    sudo dnf install dnf-plugin-system-upgrade</span>
<span class="line"></span>
<span class="line">Step 3: Download Fedora 38 packages</span>
<span class="line">    sudo dnf system-upgrade download --releasever=38</span>
<span class="line"></span>
<span class="line">Step 4: Start actual upgrade</span>
<span class="line">    sudo dnf system-upgrade reboot</span>
<span class="line"></span>
<span class="line">Optional post-upgrade tasks</span>
<span class="line">    </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="upgrade-39-to-40" tabindex="-1"><a class="header-anchor" href="#upgrade-39-to-40"><span>Upgrade 39 to 40</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo dnf upgrade --refresh</span>
<span class="line">reboot</span>
<span class="line">sudo dnf system-upgrade download --releasever=40</span>
<span class="line">sudo dnf system-upgrade reboot</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const p=s(d,[["render",i],["__file","fedora_desktop.html.vue"]]),o=JSON.parse('{"path":"/os/linux/fedora_desktop.html","title":"Fedora","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Upgrade 37 to 38","slug":"upgrade-37-to-38","link":"#upgrade-37-to-38","children":[]},{"level":2,"title":"Upgrade 39 to 40","slug":"upgrade-39-to-40","link":"#upgrade-39-to-40","children":[]}],"git":{"updatedTime":1736250118000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":2,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"os/linux/fedora_desktop.md"}');export{p as comp,o as data};
