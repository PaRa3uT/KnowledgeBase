import{_ as e,o as a,c as i,e as n}from"./app-9ee1dfa4.js";const t={},d=n(`<h1 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> CentOS</h1><h2 id="migrate-centos-8-to-centos-stream" tabindex="-1"><a class="header-anchor" href="#migrate-centos-8-to-centos-stream" aria-hidden="true">#</a> Migrate CentOS 8 to CentOS Stream</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dnf install centos-release-stream
dnf update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="migrate-centos-8-to-rhel-8" tabindex="-1"><a class="header-anchor" href="#migrate-centos-8-to-rhel-8" aria-hidden="true">#</a> Migrate CentOS 8 to RHEL 8</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/oamg/convert2rhel/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="migrate-centos-7-to-almalinux" tabindex="-1"><a class="header-anchor" href="#migrate-centos-7-to-almalinux" aria-hidden="true">#</a> Migrate CentOS 7 to AlmaLinux</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum update -y
sudo reboot

sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el7.noarch.rpm
sudo yum install -y leapp-upgrade leapp-data-centos
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="migrate-centos-8-to-almalinux" tabindex="-1"><a class="header-anchor" href="#migrate-centos-8-to-almalinux" aria-hidden="true">#</a> Migrate CentOS 8 to AlmaLinux</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/AlmaLinux/almalinux-deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="migrate-centos-8-to-rocky-linux" tabindex="-1"><a class="header-anchor" href="#migrate-centos-8-to-rocky-linux" aria-hidden="true">#</a> Migrate CentOS 8 to Rocky Linux</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/rocky-linux/rocky-tools/tree/main/migrate2rocky
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="migrate-centos-8-to-vzlinux" tabindex="-1"><a class="header-anchor" href="#migrate-centos-8-to-vzlinux" aria-hidden="true">#</a> Migrate CentOS 8 to VzLinux</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/vzlinux/vzdeploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="migrate-centos-8-to-oracle-linux" tabindex="-1"><a class="header-anchor" href="#migrate-centos-8-to-oracle-linux" aria-hidden="true">#</a> Migrate CentOS 8 to Oracle Linux</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/oracle/centos2ol
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),s=[d];function r(l,c){return a(),i("div",null,s)}const u=e(t,[["render",r],["__file","centos.html.vue"]]);export{u as default};
