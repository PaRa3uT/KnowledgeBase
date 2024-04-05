import{_ as d,r as i,o as s,c as l,a as e,b as a,d as r,e as t}from"./app-9ee1dfa4.js";const o={},c={id:"almalinux",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#almalinux","aria-hidden":"true"},"#",-1),v={href:"https://almalinux.org/",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="upgrade-8-7-to-9-1" tabindex="-1"><a class="header-anchor" href="#upgrade-8-7-to-9-1" aria-hidden="true">#</a> Upgrade 8.7 to 9.1</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum update -y
sudo reboot

sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el8.noarch.rpm
sudo yum install -y leapp-upgrade leapp-data-almalinux
sudo leapp preupgrade

most popular fixes for RHEL8-based operating systems:
    sudo sed -i &quot;s/^AllowZoneDrifting=.*/AllowZoneDrifting=no/&quot; /etc/firewalld/firewalld.conf
    leapp answer --section check_vdo.no_vdo_devices=True

leapp upgrade
reboot

cat /etc/redhat-release
cat /etc/os-release
rpm -qa | grep el7 # for 7 to 8 migration
rpm -qa | grep el8 # for 8 to 9 migration
cat /var/log/leapp/leapp-report.txt
cat /var/log/leapp/leapp-upgrade.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updates" tabindex="-1"><a class="header-anchor" href="#updates" aria-hidden="true">#</a> Updates</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo" aria-hidden="true">#</a> Sudo</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>su
usermod -aG wheel sergiy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-https-docs-docker-com-engine-install-centos" tabindex="-1"><a class="header-anchor" href="#docker-https-docs-docker-com-engine-install-centos" aria-hidden="true">#</a> [Docker] (https://docs.docker.com/engine/install/centos/)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sudo systemctl start docker
sudo systemctl enable docker
sudo docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function p(h,b){const n=i("ExternalLinkIcon");return s(),l("div",null,[e("h1",c,[u,a(),e("a",v,[a("AlmaLinux"),r(n)])]),m])}const x=d(o,[["render",p],["__file","alma_linux.html.vue"]]);export{x as default};
