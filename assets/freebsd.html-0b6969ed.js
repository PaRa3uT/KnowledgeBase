import{_ as n,r as i,o as s,c as r,a as e,b as a,d as t,e as l}from"./app-024c187f.js";const c={},u={id:"freebsd",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#freebsd","aria-hidden":"true"},"#",-1),v={href:"https://www.freebsd.org",target:"_blank",rel:"noopener noreferrer"},p=l(`<h2 id="binary-updates" tabindex="-1"><a class="header-anchor" href="#binary-updates" aria-hidden="true">#</a> Binary Updates</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>freebsd-update fetch
freebsd-update install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="major-and-minor-upgrade" tabindex="-1"><a class="header-anchor" href="#major-and-minor-upgrade" aria-hidden="true">#</a> Major and Minor Upgrade</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>freebsd-update -r 9.1-RELEASE upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="upgrade-12-2-to-12-3" tabindex="-1"><a class="header-anchor" href="#upgrade-12-2-to-12-3" aria-hidden="true">#</a> Upgrade 12.2 to 12.3</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>freebsd-update -r 12.3-RELEASE upgrade
freebsd-update install
shutdown -r now
freebsd-update install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="upgrade-12-3-to-12-4" tabindex="-1"><a class="header-anchor" href="#upgrade-12-3-to-12-4" aria-hidden="true">#</a> Upgrade 12.3 to 12.4</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>freebsd-update -r 12.4-RELEASE upgrade
freebsd-update install
shutdown -r now
freebsd-update install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="upgrade-12-4-to-13-2-major-bin" tabindex="-1"><a class="header-anchor" href="#upgrade-12-4-to-13-2-major-bin" aria-hidden="true">#</a> Upgrade 12.4 to 13.2 (Major) (BIN)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>freebsd-update fetch
freebsd-update install
execute the commands freebsd-version -k and uname -r, reboot the system if the outputs differ
freebsd-update -r 13.2-RELEASE upgrade
freebsd-update install
reboot
freebsd-update install
pkg-static upgrade -f
freebsd-update install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="upgrading-packages-after-a-major-version-upgrade" tabindex="-1"><a class="header-anchor" href="#upgrading-packages-after-a-major-version-upgrade" aria-hidden="true">#</a> Upgrading Packages After a Major Version Upgrade</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pkg-static upgrade -f
freebsd-update install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="install-application" tabindex="-1"><a class="header-anchor" href="#install-application" aria-hidden="true">#</a> Install application</h2><h3 id="ports-source-and-packages" tabindex="-1"><a class="header-anchor" href="#ports-source-and-packages" aria-hidden="true">#</a> Ports (source and packages)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>portsnap fetch
portsnap extract (только в первый раз, либо надо получить чистое дерево портов, удаляет существующее дерево портов)
portsnap update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="packages-binaries" tabindex="-1"><a class="header-anchor" href="#packages-binaries" aria-hidden="true">#</a> Packages (binaries)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pkg search &lt;name&gt;
pkg install &lt;name&gt;
pkg info &lt;name&gt;
pkg info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For pkg updates and system updates:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pkg update
pkg upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>When using some production tools, it is also sensible to check if they do not have known vulnerabilities using:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pkg audit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> Settings</h2><h3 id="user-managment" tabindex="-1"><a class="header-anchor" href="#user-managment" aria-hidden="true">#</a> User managment</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    adduser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="enabling-aslr" tabindex="-1"><a class="header-anchor" href="#enabling-aslr" aria-hidden="true">#</a> Enabling ASLR:</h3><p>Add this entries to /boot/loader.conf to enable them on the startup</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sysctl kern.elf64.aslr.enable=1
sysctl kern.elf32.aslr.enable=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="randomizing-pid" tabindex="-1"><a class="header-anchor" href="#randomizing-pid" aria-hidden="true">#</a> Randomizing PID</h3><p>/etc/sysctl.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kern.randompid=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="hide-process-running-as-other-user-or-group" tabindex="-1"><a class="header-anchor" href="#hide-process-running-as-other-user-or-group" aria-hidden="true">#</a> Hide process running as other user or group</h3><p>/etc/sysctl.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>security.bsd.see_other_uids=0
security.bsd.see_other_gids=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function h(g,b){const d=i("ExternalLinkIcon");return s(),r("div",null,[e("h1",u,[o,a(),e("a",v,[a("FreeBSD"),t(d)])]),p])}const x=n(c,[["render",h],["__file","freebsd.html.vue"]]);export{x as default};
