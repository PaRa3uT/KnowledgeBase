nbtstat -a pc — имя пользователя работающего за удаленной машиной pc
net localgroup group user /add — Добавить в группу group, пользователя user
net localgroup group user /delete — Удалить пользователя из группы
net send pc ''текст '' - отправить сообщение пользователю компьютера pc
net sessions — список пользователей
net session /delete - закрывает все сетевые сессии
net use l: \\имя компа\папка\ - подключить сетевым диском l: папку на удаленном компьютере
net user имя /active:no - заблокировать пользователя
net user имя /active:yes - разблокировать пользователя
net user имя /domain - информация о пользователе домена
net user Имя /add — добавить пользователя
net user Имя /delete — удалить пользователя
netstat -a - список всех подключений к компьютеру
reg add — Добавить параметр в реестр
reg compare — Сравнивать части реестра.
reg copy — Копирует из одного раздела в другой
reg delete — Удаляет указанный параметр или раздел
reg export — Экспортировать часть реестра
reg import — Соответственно импортировать часть реестра
reg load — Загружает выбранную часть реестра
reg query — Выводит значения заданной ветки реестра
reg restore — Восстанавливает выбранную часть реестра из файла
reg save — Сохраняет выбранную часть реестра
reg unload — Выгружает выбранную часть реестра
shutdown — выключение компьютера , можно удаленно выключить другой.
SystemInfo /s machine - покажет много полезного об удаленной машине