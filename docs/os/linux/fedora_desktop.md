# Fedora
Дистрибутивы с различными рабочими столами - https://spins.fedoraproject.org/en/

## Upgrade 37 to 38
```
Step 1: Update your current Fedora 37
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
    
```