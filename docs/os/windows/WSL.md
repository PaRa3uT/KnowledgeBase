Подсистема Windows для Linux
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux

Ubuntu 16.04 → https://aka.ms/wsl-ubuntu-1604
Ubuntu 18.04 → https://aka.ms/wsl-ubuntu-1804
Ubuntu 18.04 ARM → https://aka.ms/wsl-ubuntu-1804-arm
Debian GNU/Linux → https://aka.ms/wsl-debian-gnulinux
Kali Linux → https://aka.ms/wsl-kali-linux
OpenSUSE Leap 4.2 → https://aka.ms/wsl-opensuse-42
SUSE Linux Enterprise Server 12 → https://aka.ms/wsl-sles-12
Fedora Remix for WSL → https://github.com/WhitewaterFoundry/Fedora-Remix-for-WSL
Ubuntu 20.04 LTS https://aka.ms/wsl-ubuntu-2004

Add-AppxPackage c:\Temp\Ubuntu.appx

When is done, we click on the Start Menu and see our Linux distribution available, then we click on the distro icon to launch the setup.

https://wsldownload.azureedge.net/DebianGNULinux_1-1-3-0_x64__76v4gfsz19hv4.Appx

wsl.exe --list --verbose

wsl --set-version <distribution name> <versionNumber> (смена версии WSL для дистрибутива)

Экспорт дистрибутива:
    wsl --export MyDistro ./distro.tar 

Импорт дистрибутива:
    mkdir ~/AppData/Local/MyDistro
    wsl --import MyDistro ~/AppData/Local/MyDistro ./distro.tar --version 2
    

WSL 2 
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart (Включение компонента виртуальных машин)
    https://docs.microsoft.com/ru-ru/windows/wsl/wsl2-kernel
    https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
    wsl --set-default-version 2