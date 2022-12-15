# Windows

## Windows 11

### Как удалить водяной знак «Требования к системе не соблюдены» на рабочем столе
```
HKEY_CURRENT_USER\Control Panel\UnsupportedHardwareNotificationCache
SV1 (DWORD 32) = 0
SV2 (DWORD 32) = 0
```
### Обход проверки TPM 2.0 и процессора
```
HKEY_LOCAL_MACHINE\SYSTEM\Setup\MoSetup
AllowUpgradesWithUnsupportedTPMOrCPU (DWORD 32) = 1

HKEY_LOCAL_MACHINE\SYSTEM\Setup\LabConfig
"BypassTPMCheck"=dword:00000001
"BypassSecureBootCheck"=dword:00000001
```
