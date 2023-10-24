import{_ as e,o as a,c as t,e as n}from"./app-024c187f.js";const r={},d=n(`<h1 id="alpine" tabindex="-1"><a class="header-anchor" href="#alpine" aria-hidden="true">#</a> Alpine</h1><p>cat /etc/os-release init system: OpenRC</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install:</h2><pre><code>setup-alpine
setup-bootable (prepare either a USB or Compact Flash card)
</code></pre><h2 id="packet-manager" tabindex="-1"><a class="header-anchor" href="#packet-manager" aria-hidden="true">#</a> Packet manager:</h2><pre><code>apk update
apk add &lt;package&gt;
</code></pre><h2 id="network" tabindex="-1"><a class="header-anchor" href="#network" aria-hidden="true">#</a> Network:</h2><pre><code># udhcpc -i eth0
/etc/network/interfaces:
    auto lo
    iface lo inet loopback

    auto eth0
    iface eth0 inet dhcp
# /etc/init.d/networking restart
</code></pre><h2 id="packages-for-install" tabindex="-1"><a class="header-anchor" href="#packages-for-install" aria-hidden="true">#</a> Packages for install:</h2><pre><code>vim
mc
bash
zsh
sudo
python
py-pip
tmux
ansible
</code></pre><h2 id="initial-setup" tabindex="-1"><a class="header-anchor" href="#initial-setup" aria-hidden="true">#</a> Initial setup:</h2><pre><code>//Create users group
# addgroup users

//Create user newuser in users group with ash as default shell
# adduser -s /bin/ash -G users newuser

//Install sudo
# apk add sudo
// I then edited the sudo file using visudo and uncommented %wheel ALL=(ALL) ALL
addgroup &lt;user&gt; &lt;group&gt;
</code></pre><h2 id="virtualbox-guest-additions" tabindex="-1"><a class="header-anchor" href="#virtualbox-guest-additions" aria-hidden="true">#</a> VirtualBox guest additions:</h2><pre><code>1. enable edge/community package (vim /etc/apk/repositories)
2. apk add virtualbox-guest-additions virtualbox-guest-modules-virt
</code></pre><h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update:</h2><pre><code>setup-apkrepos
sudo apk add busybox-static apk-tools-static
sudo apk.static update
sudo apk.static upgrade --no-self-upgrade --available --simulate
sudo apk.static upgrade --no-self-upgrade --available
����� ��� ��� �� ���� ���������
</code></pre><h2 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade" aria-hidden="true">#</a> + Upgrade:</h2><pre><code>sed -i -e &#39;s/v3\\.10/v3.11/g&#39; /etc/apk/repositories
apk update
apk upgrade --available
sync
reboot
</code></pre><h2 id="update-1" tabindex="-1"><a class="header-anchor" href="#update-1" aria-hidden="true">#</a> + Update:</h2><pre><code>apk update
apk upgrade
sync
reboot
</code></pre><h2 id="upgrade-1" tabindex="-1"><a class="header-anchor" href="#upgrade-1" aria-hidden="true">#</a> Upgrade:</h2><pre><code>setup-apkrepos
sudo apk add busybox-static apk-tools-static
sudo apk.static update
sudo apk.static upgrade --no-self-upgrade --available --simulate
sudo apk.static upgrade --no-self-upgrade --available
sudo sed -i -e &#39;s/v3\\.7/v3.8/g&#39; /etc/apk/repositories
sudo apk update
sudo apk add --upgrade apk-tools
sudo apk upgrade --available
sudo sync
sudo reboot
</code></pre><h2 id="docker-http-web-ist-utl-pt-joao-leao-guerreiro-post-alpinedocker" tabindex="-1"><a class="header-anchor" href="#docker-http-web-ist-utl-pt-joao-leao-guerreiro-post-alpinedocker" aria-hidden="true">#</a> Docker: http://web.ist.utl.pt/joao.leao.guerreiro/post/alpinedocker/</h2><pre><code>/etc/apk/repositories:
    // Uncomment (for alpine 3.4):
    http://mirrors.2f30.org/alpine/v3.4/community
    http://mirrors.2f30.org/alpine/edge/testing
# apk update
# apk add docker 
# rc-update add docker boot 
# service docker start 
?# sysctl -w kernel.grsecurity.chroot_deny_chmod=0 
?# sysctl -w kernel.grsecurity.chroot_deny_mknod=0

Docker Compose:
    # apk add py-pip
    # pip install docker-compose

Isolate containers with a user namespace:
    adduser -SDHs /sbin/nologin dockremap
    echo dockremap:$(cat /etc/passwd|grep dockremap|cut -d: -f3):65536 &gt;&gt; /etc/subuid
    echo dockremap:$(cat /etc/passwd|grep dockremap|cut -d: -f4):65536 &gt;&gt; /etc/subgid

    and add in /etc/conf.d/docker

    DOCKER_OPTS=&quot;--userns-remap=default&quot;                    

    You may also consider these options : --icc=false --no-new-privileges

    PS: it&#39;s also here (at DOCKER_OPTS) you must specify the -H tcp://$IP:$PORT -H unix:///var/run/docker.sock 
</code></pre><h2 id="ansible-https-wiki-alpinelinux-org-wiki-ansible" tabindex="-1"><a class="header-anchor" href="#ansible-https-wiki-alpinelinux-org-wiki-ansible" aria-hidden="true">#</a> Ansible: https://wiki.alpinelinux.org/wiki/Ansible</h2><pre><code>apk add ansible

sudo mkdir /etc/ansible
sudo touch /etc/ansible/hosts

apk add sshpass (for ssh password authenticate)
</code></pre>`,26),s=[d];function o(i,p){return a(),t("div",null,s)}const u=e(r,[["render",o],["__file","alpine.html.vue"]]);export{u as default};
