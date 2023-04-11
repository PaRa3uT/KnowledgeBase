# Other
## [IPFS](ipfs.io)

## QEMU
qemu -m 512 -cdrom /путь/к_iso-образу/example.iso -boot d (Запуск Live CD из ISO-образа)
qemu -smp threads=2 -m 1024 -cdrom /путь/к_iso-образу/example.iso -boot d
qemu-img create -f raw disk.img mysize (create disk image)
qemu-system-i386.exe -smp threads=2 -hda myimage.img -m 1024 -cdrom /путь/к_iso-образу/example.iso -boot d
qemu-img info disk.img

## Ansible
ansible --version  
ansible [all | ungrouped | <group_name> | <host_name> | host_ip] --list-hosts  
ansible-playbook playbooks/&lt;playbook&gt;.yml
ansible-vault
ansible-vault encrypt host_vars/cdn-01.example.com/secret (Зашифровать файл)
ansible-vault edit host_vars/cdn-01.example.com/secret (Отредактировать зашифрованный файл)
ansible-vault view host_vars/cdn-01.example.com/secret (Показать зашифрованный файл)


## Minikube
### Install
```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```
minikube start  
minikube status  
minikube stop  
minikube delete  
minikube service list  
minikube kubectl -- get pods  
minikube dashboard  
minikube logs  
minikube version --components  
kubectl version ()  

## Защита от фрода
```
Верификация транзакции
  При новом заказе от неверифицированного клиента, мы:
      Проверяем его по модулю FraudRecord. Это международная база ненадежных клиентов, мошенников и прочих нехороших.
      Проверяем количество неудачных попыток оплаты. Если их менее двух — всё ОК. Если их больше — переходим к верификации клиента и ставим метку «подозрительный».
      Проверяем, уникален ли IP клиента. Часто уже заблокированные из-за фрода клиенты создают новые аккаунты на другие имена.
      Проверяем соответствие гео-IP со страной биллинга. Очень многие мошенники платят картами из Европы и США, но сами находятся в СНГ или Китае.
  При повторных заказах и продлениях, клиенту нужно пройти только пункт 2.

Верификация клиента

  Верификация личности нужна для того, чтобы убедиться, что клиент является живым человеком и удостовериться, что платежный метод действительно принадлежит ему. Для этого мы запрашиваем у клиента документы, подтверждающие его личность.

  Принимаются только документы государственного образца из следующего списка:
      Паспорт (Passport);
      Идентификационная карточка (Identity Card, он же ID) — аналог паспорта во многих странах;
      Водительское удостоверение (Driving Licence) с фотографией;
      Свидетельство о временном гражданстве (Temporary Resident Card)
      Свидетельство о временном/постоянном виде на жительство (Residence permit)

  Мы тщательно проверяем все документы на соответствие госстандартам. Хотя зачастую подделка определяется с первого взгляда. Так, один из клиентов прислал паспорт с датой рождения «30 декабря 1792 года».

  Для проверки платежного метода, мы требуем фото банковской карты (с видимой лицевой стороной, но закрытым CVV) или скриншот оплаты из PayPal, где видно, что оплата была совершена на нашем сайте. Этот пункт уже привычен многим.
```
