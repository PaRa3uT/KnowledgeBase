import{_ as e,o as a,c as i,e as n}from"./app-9ee1dfa4.js";const d={},s=n(`<h1 id="mssql" tabindex="-1"><a class="header-anchor" href="#mssql" aria-hidden="true">#</a> MSSQL</h1><h2 id="модели-восстановления" tabindex="-1"><a class="header-anchor" href="#модели-восстановления" aria-hidden="true">#</a> Модели восстановления</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Сменить модель резервного копирования:
ALTER DATABASE [Имя базы данных] SET RECOVERY [recovery_model]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="полная-full" tabindex="-1"><a class="header-anchor" href="#полная-full" aria-hidden="true">#</a> Полная (Full)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER DATABASE db_name SET RECOVERY FULL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>Все изменения в базе полностью журналируются.
Журнал транзакций не будет очищаться до тех пор, как не будет сделана резервная копия журнала транзакций
Все опции восстановления доступны, когда база данных в полной модели восстановления! К примеру, мы можем «до секунды» восстановить нашу базу!
</code></pre><h3 id="с-неполным-протоколированием-bulk-logged" tabindex="-1"><a class="header-anchor" href="#с-неполным-протоколированием-bulk-logged" aria-hidden="true">#</a> С неполным протоколированием (Bulk-Logged)</h3><h3 id="простая-simple" tabindex="-1"><a class="header-anchor" href="#простая-simple" aria-hidden="true">#</a> Простая (Simple)</h3><pre><code>Изменения минимально журналируются.
Журнал транзакций (ЛОГ) автоматически очищается.
Создание резервных копий журнала транзакций невозможно, поэтому у вас остается самое ограниченное число опций по восстановлению.
</code></pre><h2 id="типы-резервного-копирования-sql-server" tabindex="-1"><a class="header-anchor" href="#типы-резервного-копирования-sql-server" aria-hidden="true">#</a> Типы резервного копирования SQL Server</h2><h3 id="полное-full-backup" tabindex="-1"><a class="header-anchor" href="#полное-full-backup" aria-hidden="true">#</a> Полное (Full Backup)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BACKUP DATABASE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="дифференциальное-разностное" tabindex="-1"><a class="header-anchor" href="#дифференциальное-разностное" aria-hidden="true">#</a> Дифференциальное (разностное)</h3><p>Резервная копия базы данных или файлов, которые были изменены с момента создания последней полной резервной копии</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BACKUP DATABASE ... WITH DIFFERENTIAL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="журнал-транзакции" tabindex="-1"><a class="header-anchor" href="#журнал-транзакции" aria-hidden="true">#</a> Журнал транзакций</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BACKUP LOG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="резервное-копирование" tabindex="-1"><a class="header-anchor" href="#резервное-копирование" aria-hidden="true">#</a> Резервное копирование</h2><h2 id="восстановление-из-резервнои-копии" tabindex="-1"><a class="header-anchor" href="#восстановление-из-резервнои-копии" aria-hidden="true">#</a> Восстановление из резервной копии</h2><h2 id="перенос-tempdb" tabindex="-1"><a class="header-anchor" href="#перенос-tempdb" aria-hidden="true">#</a> Перенос TempDB</h2><ol><li>Создаём отдельную директорию, назовём её TempDB. На эту директорию необходимо выдать права на чтение и изменение учётной записи, от имени которой работает служба MSSQL (SQL Database Engine)</li><li>Теперь нам надо выяснить текущее расположение файлов tempdb</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT name, physical_name AS CurrentLocation, state_desc FROM sys.master_files WHERE database_id = DB_ID(N&#39;tempdb&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Для каждого файла нужно выполнить следующий код</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER DATABASE database_name MODIFY FILE(NAME = logical_name, FILENAME = &#39;new_path\\file_name&#39;);
- database_name - имя базы (в нашем случае tempdb)
- logical_name - логическое имя файла базы
- new_path\\file_name - новый путь и физическое имя файла
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>Рестартуем службу MSSQL (SQL Database Engine). Проверяем в настройках tempdb расположение файла</li></ol><h2 id="переименование-компьютера" tabindex="-1"><a class="header-anchor" href="#переименование-компьютера" aria-hidden="true">#</a> Переименование компьютера</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT @@SERVERNAME AS &#39;Server Name&#39;;  --вывод текущего имени прописанного на сервере
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>EXEC sp_dropserver &#39;WIN-P0BDIDHJ0O7&#39;;
GO
EXEC sp_addserver &#39;NEW-COMPUTER-NAME&#39;, local;
GO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="сброс-пароля" tabindex="-1"><a class="header-anchor" href="#сброс-пароля" aria-hidden="true">#</a> Сброс пароля</h2><ol><li>Start SQL Server in single-user mode</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>net stop MSSQLSERVER
net start MSSQLSERVER /m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER LOGIN sa enable
GO

CREATE LOGIN NewSA WITH PASSWORD = &#39;Password@1234&#39;;
ALTER SERVER ROLE sysadmin ADD MEMBER NewSA 
GO

CREATE LOGIN [BUILTIN\\Administrators] FROM WINDOWS
GO

ALTER SERVER ROLE sysadmin ADD MEMBER [BUILTIN\\Administrators]
GO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="проверка-бд" tabindex="-1"><a class="header-anchor" href="#проверка-бд" aria-hidden="true">#</a> Проверка БД</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DBCC CHECKTABLE (&lt;table_name&gt;)  проверка таблицы
DBCC CHECKTABLE (&lt;table_name&gt;, REPAIR_REBUILD) Выполняет действия по восстановлению данных, которые можно выполнить без риска их потери
DBCC CHECKTABLE (&lt;table_name&gt;) REPAIR_ALLOW_DATA_LOSS Пытается устранить все обнаруженные ошибки. Эти исправления могут привести к частичной потере данных
DBCC CHECKDB (&lt;db_name&gt;) WITH NO_INFOMSGS
DBCC CHECKDB (&lt;db_name&gt;) WITH ALL_ERRORMSGS
DBCC CHECKDB (&lt;db_name&gt;) WITH PHYSICAL_ONLY

DBCC CHECKCATALOG (TillypadSegment) WITH NO_INFOMSGS; 

DBCC CHECKDB (&#39;MyBase&#39;, REPAIR_ALLOW_DATA_LOSS)
----------------------------------------
ALTER DATABASE [MyBase] SET SINGLE_USER
GO
DBCC CHECKTABLE (&lt;table_name&gt;, REPAIR_REBUILD)
GO
ALTER DATABASE [MyBase] SET MULTI_USER
GO
---------------------------------------
ALTER DATABASE [MyBase] SET EMERGENCY
GO
ALTER DATABASE [MyBase] SET SINGLE_USER WITH ROLLBACK IMMEDIATE
GO
DBCC CHECKDB (&#39;MyBase&#39;, REPAIR_ALLOW_DATA_LOSS)
GO
ALTER DATABASE [MyBase] SET MULTI_USER
GO
----------------------------------------
Необходимо перевести базу данных в режим EMERGENCY:
    EXEC sp_resetstatus &#39;yourDBname&#39;;
    ALTER DATABASE yourDBname SET EMERGENCY

Выполнять тестирование базы:
    DBCC checkdb(&#39;yourDBname&#39;)
    --переводим базу в однопользовательский режим
    ALTER DATABASE yourDBname SET SINGLE_USER (ALTER DATABASE yourDBname SET SINGLE_USER WITH ROLLBACK IMMEDIATE)
    -- пытаемся сначала rebuild сделать
    DBCC CHECKDB(&#39;MyDataBase&#39;, REPAIR_REBUILD)
    --восстанавливаем с потерей данных, или пытаемся сначала rebuild сделать
    DBCC CheckDB (&#39;yourDBname&#39;, REPAIR_ALLOW_DATA_LOSS)
    --возвращаем доступ к базе
    ALTER DATABASE yourDBname SET MULTI_USER
------------------------------------------

ALTER DATABASE myDB
SET SINGLE_USER
WITH ROLLBACK IMMEDIATE;
GO
DBCC CHECKDB (&#39;myDB&#39;, REPAIR_REBUILD);
DBCC CHECKDB (&#39;myDB&#39;, repair_allow_data_loss); -- параметры чека подбирались в зависимости от выполнения DBCC CHECKDB с REPAIR_REBUILD;
GO
ALTER DATABASE myDB
SET MULTI_USER;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="планы-обслуживания" tabindex="-1"><a class="header-anchor" href="#планы-обслуживания" aria-hidden="true">#</a> Планы обслуживания</h2><p>Еженедельный (Раз в неделю в вс. в 02:00): Проверка целостности базы данных (Базы данных: &lt;db_name&gt;; Включить индексы; Только физическое) Резервное копирование базы данных ( Тип резервной копии: Полное; Базы данных: &lt;db_name&gt;; Создать резервную копию на: Диск; Создать файл резервной копии для каждой базы данных; Папка: F:\\Backup\\MSSQL; Расширение файла резервной копии: bak; Проверять целостность резервной копии )</p><p>Ежедневный (Раз в день в 00:00): Ежечасный (Каждый день, каждый час) (только при полной модели восстановления) Резервное копирование журнала транзакций (trn)</p><p>X дефрагментацию индексов обновлять статистику</p><h2 id="запросы" tabindex="-1"><a class="header-anchor" href="#запросы" aria-hidden="true">#</a> Запросы</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Версия сервера
Select @@version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="параметры-влияющие-на-производительность" tabindex="-1"><a class="header-anchor" href="#параметры-влияющие-на-производительность" aria-hidden="true">#</a> Параметры влияющие на производительность</h2><h2 id="разросшиися-журнал-транзакции" tabindex="-1"><a class="header-anchor" href="#разросшиися-журнал-транзакции" aria-hidden="true">#</a> Разросшийся журнал транзакций</h2><p>Самое простое средство для однократного (но не для регулярного) уменьшения &quot;нечаянно&quot; выросшего лога транзакций: прочтитать документацию, сделать резервную копию базы, перевести в SIMPLE, шринкнуть файл лога в 0, увеличить файл лога до 0,25-0,5 размера базы, включить FULL, следать резервную копию, настроить резервное копирование регулярное для данных и для журнала транзакций, забыть об этой проблеме</p>`,44),l=[s];function r(t,v){return a(),i("div",null,l)}const u=e(d,[["render",r],["__file","mssql.html.vue"]]);export{u as default};
