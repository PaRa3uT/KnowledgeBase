import{_ as a,c as n,b as r,o as s}from"./app-BsHIgujo.js";const i={};function l(t,e){return s(),n("div",null,e[0]||(e[0]=[r(`<h1 id="software" tabindex="-1"><a class="header-anchor" href="#software"><span>Software</span></a></h1><p><a href="https://www.sublimetext.com/docs/linux_repositories.html" target="_blank" rel="noopener noreferrer">Sublime</a> Firefox LibreOffice/OpenOffice</p><h2 id="de-wm" tabindex="-1"><a class="header-anchor" href="#de-wm"><span>DE/WM</span></a></h2><ul><li>KDE<br> GNOME<br> XFCE<br> LXQT LXDE MATE Cinnamon Budgie</li></ul><h2 id="console" tabindex="-1"><a class="header-anchor" href="#console"><span>Console</span></a></h2><p>mc<br> vim</p><h2 id="portainer" tabindex="-1"><a class="header-anchor" href="#portainer"><span><a href="https://docs.portainer.io/start/install-ce/server/docker/linux" target="_blank" rel="noopener noreferrer">Portainer</a></span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Install:</span>
<span class="line">    sudo docker volume create portainer_data</span>
<span class="line">    sudo docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest</span>
<span class="line">    sudo docker ps</span>
<span class="line"></span>
<span class="line">Upgrade:</span>
<span class="line">    sudo docker stop portainer</span>
<span class="line">    sudo docker rm portainer</span>
<span class="line">    sudo docker pull portainer/portainer-ce:latest</span>
<span class="line">    sudo docker run -d -p 8000:8000 -p 9443:9443 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="панели-управления-серверами" tabindex="-1"><a class="header-anchor" href="#панели-управления-серверами"><span>Панели управления серверами</span></a></h2><h3 id="webmin" tabindex="-1"><a class="header-anchor" href="#webmin"><span>Webmin</span></a></h3><h3 id="cockpit" tabindex="-1"><a class="header-anchor" href="#cockpit"><span><a href="https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html-single/managing_systems_using_the_rhel_9_web_console/index" target="_blank" rel="noopener noreferrer">Cockpit</a></span></a></h3>`,11)]))}const c=a(i,[["render",l],["__file","software.html.vue"]]),d=JSON.parse('{"path":"/os/linux/software.html","title":"Software","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"DE/WM","slug":"de-wm","link":"#de-wm","children":[]},{"level":2,"title":"Console","slug":"console","link":"#console","children":[]},{"level":2,"title":"Portainer","slug":"portainer","link":"#portainer","children":[]},{"level":2,"title":"Панели управления серверами","slug":"панели-управления-серверами","link":"#панели-управления-серверами","children":[{"level":3,"title":"Webmin","slug":"webmin","link":"#webmin","children":[]},{"level":3,"title":"Cockpit","slug":"cockpit","link":"#cockpit","children":[]}]}],"git":{"updatedTime":1712294877000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":5,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"os/linux/software.md"}');export{c as comp,d as data};
