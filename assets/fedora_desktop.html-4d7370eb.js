import{_ as e,o as d,c as a,e as n}from"./app-9ee1dfa4.js";const s={},r=n(`<h1 id="fedora" tabindex="-1"><a class="header-anchor" href="#fedora" aria-hidden="true">#</a> Fedora</h1><p>Дистрибутивы с различными рабочими столами - https://spins.fedoraproject.org/en/</p><h2 id="upgrade-37-to-38" tabindex="-1"><a class="header-anchor" href="#upgrade-37-to-38" aria-hidden="true">#</a> Upgrade 37 to 38</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Step 1: Update your current Fedora 37
    sudo dnf --refresh update
    sudo dnf upgrade
    sudo reboot
Step 2: Install dnf upgrade plugin, which will help you to download Fedora 38 packages
    sudo dnf install dnf-plugin-system-upgrade
Step 3: Download Fedora 38 packages
    sudo dnf system-upgrade download --releasever=38
Step 4: Start actual upgrade
    sudo dnf system-upgrade reboot

Optional post-upgrade tasks
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[r];function t(l,o){return d(),a("div",null,i)}const c=e(s,[["render",t],["__file","fedora_desktop.html.vue"]]);export{c as default};
