import{_ as s,c as n,b as a,o as i}from"./app-BsHIgujo.js";const t={};function l(r,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="wsl-подсистема-windows-для-linux" tabindex="-1"><a class="header-anchor" href="#wsl-подсистема-windows-для-linux"><span>WSL (Подсистема Windows для Linux)</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux</span>
<span class="line">Add-AppxPackage c:\\Temp\\Ubuntu.appx</span>
<span class="line"></span>
<span class="line">When is done, we click on the Start Menu and see our Linux distribution available, then we click on the distro icon to launch the setup.</span>
<span class="line"></span>
<span class="line">https://wsldownload.azureedge.net/DebianGNULinux_1-1-3-0_x64__76v4gfsz19hv4.Appx</span>
<span class="line"></span>
<span class="line">wsl.exe --list --verbose</span>
<span class="line">wsl --set-version &lt;distribution name&gt; &lt;versionNumber&gt; (смена версии WSL для дистрибутива)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки"><span>Ссылки</span></a></h2><p>Ubuntu 16.04 → https://aka.ms/wsl-ubuntu-1604 Ubuntu 18.04 → https://aka.ms/wsl-ubuntu-1804 Ubuntu 18.04 ARM → https://aka.ms/wsl-ubuntu-1804-arm Debian GNU/Linux → https://aka.ms/wsl-debian-gnulinux Kali Linux → https://aka.ms/wsl-kali-linux OpenSUSE Leap 4.2 → https://aka.ms/wsl-opensuse-42 SUSE Linux Enterprise Server 12 → https://aka.ms/wsl-sles-12 Fedora Remix for WSL → https://github.com/WhitewaterFoundry/Fedora-Remix-for-WSL Ubuntu 20.04 LTS https://aka.ms/wsl-ubuntu-2004</p><h2 id="экспорт-дистрибутива" tabindex="-1"><a class="header-anchor" href="#экспорт-дистрибутива"><span>Экспорт дистрибутива:</span></a></h2><pre><code>wsl --export MyDistro ./distro.tar 
</code></pre><h2 id="импорт-дистрибутива" tabindex="-1"><a class="header-anchor" href="#импорт-дистрибутива"><span>Импорт дистрибутива:</span></a></h2><pre><code>mkdir ~/AppData/Local/MyDistro
wsl --import MyDistro ~/AppData/Local/MyDistro ./distro.tar --version 2
</code></pre><h2 id="wsl-2" tabindex="-1"><a class="header-anchor" href="#wsl-2"><span>WSL 2</span></a></h2><pre><code>dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart (Включение компонента виртуальных машин)
https://docs.microsoft.com/ru-ru/windows/wsl/wsl2-kernel
https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
wsl --set-default-version 2
</code></pre>`,10)]))}const o=s(t,[["render",l],["__file","WSL.html.vue"]]),u=JSON.parse('{"path":"/os/windows/WSL.html","title":"WSL (Подсистема Windows для Linux)","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Ссылки","slug":"ссылки","link":"#ссылки","children":[]},{"level":2,"title":"Экспорт дистрибутива:","slug":"экспорт-дистрибутива","link":"#экспорт-дистрибутива","children":[]},{"level":2,"title":"Импорт дистрибутива:","slug":"импорт-дистрибутива","link":"#импорт-дистрибутива","children":[]},{"level":2,"title":"WSL 2","slug":"wsl-2","link":"#wsl-2","children":[]}],"git":{"updatedTime":1676900455000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":3,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"os/windows/WSL.md"}');export{o as comp,u as data};