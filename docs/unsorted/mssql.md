# MSSQL
## Модели восстановления
```
Сменить модель резервного копирования:
ALTER DATABASE [Имя базы данных] SET RECOVERY [recovery_model]
```
### Полная (Full)
```
ALTER DATABASE db_name SET RECOVERY FULL;
```
    Все изменения в базе полностью журналируются.
    Журнал транзакций не будет очищаться до тех пор, как не будет сделана резервная копия журнала транзакций
    Все опции восстановления доступны, когда база данных в полной модели восстановления! К примеру, мы можем «до секунды» восстановить нашу базу!

### С неполным протоколированием (Bulk-Logged)
### Простая (Simple)
    Изменения минимально журналируются.
    Журнал транзакций (ЛОГ) автоматически очищается.
    Создание резервных копий журнала транзакций невозможно, поэтому у вас остается самое ограниченное число опций по восстановлению.

## Типы резервного копирования SQL Server
### Полное (Full Backup)
```
BACKUP DATABASE
```
### Дифференциальное (разностное)
Резервная копия базы данных или файлов, которые были изменены с момента создания последней полной резервной копии
```
BACKUP DATABASE ... WITH DIFFERENTIAL
```
### Журнал транзакций
```
BACKUP LOG
```

## Резервное копирование
    
## Восстановление из резервной копии

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

## Переименование компьютера
```
SELECT @@SERVERNAME AS 'Server Name';  --вывод текущего имени прописанного на сервере
```
```
EXEC sp_dropserver 'WIN-P0BDIDHJ0O7';
GO
EXEC sp_addserver 'NEW-COMPUTER-NAME', local;
GO
```

## Сброс пароля
1. Start SQL Server in single-user mode
```
net stop MSSQLSERVER
net start MSSQLSERVER /m
```

2.
```
ALTER LOGIN sa enable
GO

CREATE LOGIN NewSA WITH PASSWORD = 'Password@1234';
ALTER SERVER ROLE sysadmin ADD MEMBER NewSA 
GO

CREATE LOGIN [BUILTIN\Administrators] FROM WINDOWS
GO

ALTER SERVER ROLE sysadmin ADD MEMBER [BUILTIN\Administrators]
GO
```

## Проверка БД
```
DBCC CHECKTABLE (<table_name>)  проверка таблицы
DBCC CHECKTABLE (<table_name>, REPAIR_REBUILD) Выполняет действия по восстановлению данных, которые можно выполнить без риска их потери
DBCC CHECKTABLE (<table_name>) REPAIR_ALLOW_DATA_LOSS Пытается устранить все обнаруженные ошибки. Эти исправления могут привести к частичной потере данных
DBCC CHECKDB (<db_name>) WITH NO_INFOMSGS
DBCC CHECKDB (<db_name>) WITH ALL_ERRORMSGS
DBCC CHECKDB (<db_name>) WITH PHYSICAL_ONLY

DBCC CHECKCATALOG (TillypadSegment) WITH NO_INFOMSGS; 

DBCC CHECKDB ('MyBase', REPAIR_ALLOW_DATA_LOSS)
----------------------------------------
ALTER DATABASE [MyBase] SET SINGLE_USER
GO
DBCC CHECKTABLE (<table_name>, REPAIR_REBUILD)
GO
ALTER DATABASE [MyBase] SET MULTI_USER
GO
---------------------------------------
ALTER DATABASE [MyBase] SET EMERGENCY
GO
ALTER DATABASE [MyBase] SET SINGLE_USER WITH ROLLBACK IMMEDIATE
GO
DBCC CHECKDB ('MyBase', REPAIR_ALLOW_DATA_LOSS)
GO
ALTER DATABASE [MyBase] SET MULTI_USER
GO
----------------------------------------
Необходимо перевести базу данных в режим EMERGENCY:
    EXEC sp_resetstatus 'yourDBname';
    ALTER DATABASE yourDBname SET EMERGENCY

Выполнять тестирование базы:
    DBCC checkdb('yourDBname')
    --переводим базу в однопользовательский режим
    ALTER DATABASE yourDBname SET SINGLE_USER (ALTER DATABASE yourDBname SET SINGLE_USER WITH ROLLBACK IMMEDIATE)
    -- пытаемся сначала rebuild сделать
    DBCC CHECKDB('MyDataBase', REPAIR_REBUILD)
    --восстанавливаем с потерей данных, или пытаемся сначала rebuild сделать
    DBCC CheckDB ('yourDBname', REPAIR_ALLOW_DATA_LOSS)
    --возвращаем доступ к базе
    ALTER DATABASE yourDBname SET MULTI_USER
------------------------------------------

ALTER DATABASE myDB
SET SINGLE_USER
WITH ROLLBACK IMMEDIATE;
GO
DBCC CHECKDB ('myDB', REPAIR_REBUILD);
DBCC CHECKDB ('myDB', repair_allow_data_loss); -- параметры чека подбирались в зависимости от выполнения DBCC CHECKDB с REPAIR_REBUILD;
GO
ALTER DATABASE myDB
SET MULTI_USER;
```

## Планы обслуживания
Еженедельный (Раз в неделю в вс. в 02:00):
    Проверка целостности базы данных (Базы данных: <db_name>; Включить индексы; Только физическое)
    Резервное копирование базы данных (
        Тип резервной копии: Полное; 
        Базы данных: <db_name>; 
        Создать резервную копию на: Диск; 
        Создать файл резервной копии для каждой базы данных; 
        Папка: F:\Backup\MSSQL; 
        Расширение файла резервной копии: bak; 
        Проверять целостность резервной копии
    )

Ежедневный (Раз в день в 00:00):
Ежечасный (Каждый день, каждый час) (только при полной модели восстановления)
    Резервное копирование журнала транзакций (trn)

X
    дефрагментацию индексов
    обновлять статистику
## Запросы
```
Версия сервера
Select @@version
```

## Параметры влияющие на производительность

## Разросшийся журнал транзакций
Самое простое средство для однократного (но не для регулярного) уменьшения "нечаянно" выросшего лога транзакций: прочтитать документацию, сделать резервную копию базы, перевести в SIMPLE, шринкнуть файл лога в 0, увеличить файл лога до 0,25-0,5 размера базы, включить FULL, следать резервную копию, настроить резервное копирование регулярное для данных и для журнала транзакций, забыть об этой проблеме