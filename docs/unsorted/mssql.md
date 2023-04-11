# MSSQL
## Перенос TempDB
1. Создаём отдельную директорию, назовём её TempDB. На эту директорию необходимо выдать права на чтение и изменение учётной записи, от имени которой работает служба MSSQL (SQL Database Engine)
2. Теперь нам надо выяснить текущее расположение файлов tempdb 
```
SELECT name, physical_name AS CurrentLocation, state_desc FROM sys.master_files WHERE database_id = DB_ID(N'tempdb');
```
3. Для каждого файла нужно выполнить следующий код
```
ALTER DATABASE database_name MODIFY FILE(NAME = logical_name, FILENAME = 'new_path\file_name');
- database_name - имя базы (в нашем случае tempdb)
- logical_name - логическое имя файла базы
- new_path\file_name - новый путь и физическое имя файла
```
4. Рестартуем службу MSSQL (SQL Database Engine). Проверяем в настройках tempdb расположение файла
