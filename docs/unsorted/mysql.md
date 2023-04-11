# MariaDB/MySQL
```
    /usr/bin/mysqldump -u root -p"password" db_name | gzip > /opt/backup/mysql/filename.sql.gz
    
    SHOW DATABASES;
```

Copy Database
```
mysqldump -u root -p db1 > dump.sql
mysqladmin -u root -p create db2
mysql -u root -p db2 < dump.sql
```

Create User
```
mysql> grant all privileges on DBNAME.* to USERNAME@localhost identified by 'PASSWORD';
mysql> grant all privileges on DBNAME.* to USERNAME@"%" identified by 'PASSWORD';
mysql> flush privileges;
 
--all DB
mysql> grant all privileges on *.* to USERNAME@localhost identified by 'PASSWORD';
mysql> grant all privileges on *.* to USERNAME@"%" identified by 'PASSWORD';
mysql> flush privileges;
```

Delete User
```
mysql> drop user USERNAME;
or
mysql> delete from mysql.user where user = 'USERNAME';
```

Change Password
```
--User
mysql> set password for USER@"%" = password('PASSWORD');
mysql> set password for USER@localhost = password('PASSWORD');
 
--root
mysql> set password for root=password('PASSWORD');
mysql> set password for root@localhost=password('PASSWORD');
```

CSV Import / Export
```
ERROR 1045 (28000) at line 1: Access denied for user 'USER'@'localhost' (using password: YES)
mysql> grant file on *.* to USER@localhost;
```

Tips
```
--Create table as same data and type
mysql> create  table newtable as select * from orgtable;
 
--Create table with same type. data is null.
mysql> create  table newtable as select * from orgtable where id is null;
```

Export to CSV
```
# mysql -uUSER -pPASS DATABASE -e "select * from TABLE;" | sed -e 's/^/"/g' | sed -e 's/$/"/g' | sed -e 's/\t/","/g' > /tmp/test.csv
```
