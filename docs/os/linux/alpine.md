# Alpine

cat /etc/os-release
init system: OpenRC

## Install:
    setup-alpine
    setup-bootable (prepare either a USB or Compact Flash card)

## Packet manager:
    apk update
    apk add <package>

## Network:
    # udhcpc -i eth0
    /etc/network/interfaces:
        auto lo
        iface lo inet loopback

        auto eth0
        iface eth0 inet dhcp
    # /etc/init.d/networking restart


## Packages for install:
    vim
    mc
    bash
    zsh
    sudo
    python
    py-pip
    tmux
    ansible

## Initial setup:
    //Create users group
    # addgroup users

    //Create user newuser in users group with ash as default shell
    # adduser -s /bin/ash -G users newuser

    //Install sudo
    # apk add sudo
    // I then edited the sudo file using visudo and uncommented %wheel ALL=(ALL) ALL
    addgroup <user> <group>

## VirtualBox guest additions:
    1. enable edge/community package (vim /etc/apk/repositories)
    2. apk add virtualbox-guest-additions virtualbox-guest-modules-virt
    
## Update:
    setup-apkrepos
    sudo apk add busybox-static apk-tools-static
    sudo apk.static update
    sudo apk.static upgrade --no-self-upgrade --available --simulate
    sudo apk.static upgrade --no-self-upgrade --available
    может ещё что то надо выполнить

## + Upgrade:
    sed -i -e 's/v3\.10/v3.11/g' /etc/apk/repositories
    apk update
    apk upgrade --available
    sync
    reboot

## + Update:
    apk update
    apk upgrade
    sync
    reboot

## Upgrade:
    setup-apkrepos
    sudo apk add busybox-static apk-tools-static
    sudo apk.static update
    sudo apk.static upgrade --no-self-upgrade --available --simulate
    sudo apk.static upgrade --no-self-upgrade --available
    sudo sed -i -e 's/v3\.7/v3.8/g' /etc/apk/repositories
    sudo apk update
    sudo apk add --upgrade apk-tools
    sudo apk upgrade --available
    sudo sync
    sudo reboot

## Docker: http://web.ist.utl.pt/joao.leao.guerreiro/post/alpinedocker/

    /etc/apk/repositories:
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
        echo dockremap:$(cat /etc/passwd|grep dockremap|cut -d: -f3):65536 >> /etc/subuid
        echo dockremap:$(cat /etc/passwd|grep dockremap|cut -d: -f4):65536 >> /etc/subgid

        and add in /etc/conf.d/docker

        DOCKER_OPTS="--userns-remap=default"                    

        You may also consider these options : --icc=false --no-new-privileges

        PS: it's also here (at DOCKER_OPTS) you must specify the -H tcp://$IP:$PORT -H unix:///var/run/docker.sock 

## Ansible: https://wiki.alpinelinux.org/wiki/Ansible
    apk add ansible

    sudo mkdir /etc/ansible
    sudo touch /etc/ansible/hosts

    apk add sshpass (for ssh password authenticate)
