import{_ as e,o as s,c as a,e as n}from"./app-9ee1dfa4.js";const t={},i=n(`<h1 id="wsl-подсистема-windows-для-linux" tabindex="-1"><a class="header-anchor" href="#wsl-подсистема-windows-для-linux" aria-hidden="true">#</a> WSL (Подсистема Windows для Linux)</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
Add-AppxPackage c:\\Temp\\Ubuntu.appx

When is done, we click on the Start Menu and see our Linux distribution available, then we click on the distro icon to launch the setup.

https://wsldownload.azureedge.net/DebianGNULinux_1-1-3-0_x64__76v4gfsz19hv4.Appx

wsl.exe --list --verbose
wsl --set-version &lt;distribution name&gt; &lt;versionNumber&gt; (смена версии WSL для дистрибутива)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки" aria-hidden="true">#</a> Ссылки</h2><p>Ubuntu 16.04 → https://aka.ms/wsl-ubuntu-1604 Ubuntu 18.04 → https://aka.ms/wsl-ubuntu-1804 Ubuntu 18.04 ARM → https://aka.ms/wsl-ubuntu-1804-arm Debian GNU/Linux → https://aka.ms/wsl-debian-gnulinux Kali Linux → https://aka.ms/wsl-kali-linux OpenSUSE Leap 4.2 → https://aka.ms/wsl-opensuse-42 SUSE Linux Enterprise Server 12 → https://aka.ms/wsl-sles-12 Fedora Remix for WSL → https://github.com/WhitewaterFoundry/Fedora-Remix-for-WSL Ubuntu 20.04 LTS https://aka.ms/wsl-ubuntu-2004</p><h2 id="экспорт-дистрибутива" tabindex="-1"><a class="header-anchor" href="#экспорт-дистрибутива" aria-hidden="true">#</a> Экспорт дистрибутива:</h2><pre><code>wsl --export MyDistro ./distro.tar 
</code></pre><h2 id="импорт-дистрибутива" tabindex="-1"><a class="header-anchor" href="#импорт-дистрибутива" aria-hidden="true">#</a> Импорт дистрибутива:</h2><pre><code>mkdir ~/AppData/Local/MyDistro
wsl --import MyDistro ~/AppData/Local/MyDistro ./distro.tar --version 2
</code></pre><h2 id="wsl-2" tabindex="-1"><a class="header-anchor" href="#wsl-2" aria-hidden="true">#</a> WSL 2</h2><pre><code>dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart (Включение компонента виртуальных машин)
https://docs.microsoft.com/ru-ru/windows/wsl/wsl2-kernel
https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
wsl --set-default-version 2
</code></pre>`,10),r=[i];function d(l,o){return s(),a("div",null,r)}const c=e(t,[["render",d],["__file","WSL.html.vue"]]);export{c as default};
