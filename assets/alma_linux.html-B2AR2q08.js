import{_ as s,c as a,b as n,o as l}from"./app-BsHIgujo.js";const i={};function d(t,e){return l(),a("div",null,e[0]||(e[0]=[n(`<h1 id="almalinux" tabindex="-1"><a class="header-anchor" href="#almalinux"><span><a href="https://almalinux.org/" target="_blank" rel="noopener noreferrer">AlmaLinux</a></span></a></h1><h2 id="upgrade-8-7-to-9-1" tabindex="-1"><a class="header-anchor" href="#upgrade-8-7-to-9-1"><span>Upgrade 8.7 to 9.1</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo yum update -y</span>
<span class="line">sudo reboot</span>
<span class="line"></span>
<span class="line">sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el8.noarch.rpm</span>
<span class="line">sudo yum install -y leapp-upgrade leapp-data-almalinux</span>
<span class="line">sudo leapp preupgrade</span>
<span class="line"></span>
<span class="line">most popular fixes for RHEL8-based operating systems:</span>
<span class="line">    sudo sed -i &quot;s/^AllowZoneDrifting=.*/AllowZoneDrifting=no/&quot; /etc/firewalld/firewalld.conf</span>
<span class="line">    leapp answer --section check_vdo.no_vdo_devices=True</span>
<span class="line"></span>
<span class="line">leapp upgrade</span>
<span class="line">reboot</span>
<span class="line"></span>
<span class="line">cat /etc/redhat-release</span>
<span class="line">cat /etc/os-release</span>
<span class="line">rpm -qa | grep el7 # for 7 to 8 migration</span>
<span class="line">rpm -qa | grep el8 # for 8 to 9 migration</span>
<span class="line">cat /var/log/leapp/leapp-report.txt</span>
<span class="line">cat /var/log/leapp/leapp-upgrade.log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updates" tabindex="-1"><a class="header-anchor" href="#updates"><span>Updates</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">yum update</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo"><span>Sudo</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">su</span>
<span class="line">usermod -aG wheel sergiy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-https-docs-docker-com-engine-install-centos" tabindex="-1"><a class="header-anchor" href="#docker-https-docs-docker-com-engine-install-centos"><span>[Docker] (https://docs.docker.com/engine/install/centos/)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo yum install -y yum-utils</span>
<span class="line">sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo</span>
<span class="line"></span>
<span class="line">sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</span>
<span class="line"></span>
<span class="line">sudo systemctl start docker</span>
<span class="line">sudo systemctl enable docker</span>
<span class="line">sudo docker run hello-world</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const c=s(i,[["render",d],["__file","alma_linux.html.vue"]]),p=JSON.parse('{"path":"/os/linux/alma_linux.html","title":"AlmaLinux","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Upgrade 8.7 to 9.1","slug":"upgrade-8-7-to-9-1","link":"#upgrade-8-7-to-9-1","children":[]},{"level":2,"title":"Updates","slug":"updates","link":"#updates","children":[]},{"level":2,"title":"Sudo","slug":"sudo","link":"#sudo","children":[]},{"level":2,"title":"[Docker] (https://docs.docker.com/engine/install/centos/)","slug":"docker-https-docs-docker-com-engine-install-centos","link":"#docker-https-docs-docker-com-engine-install-centos","children":[]}],"git":{"updatedTime":1683572587000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":1,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"os/linux/alma_linux.md"}');export{c as comp,p as data};
