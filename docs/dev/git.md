# Работа с GIT

## Git Portable (Windows)
1. Download MiniGIT from https://github.com/git-for-windows/git/releases  

## Описание команд
git init - создание нового репозитория  
git init --bare  
git clone &lt;remote&gt; - клонирование удаленного репозитория  
```
git add  // добавляет все новые, измененные, удаленные файлы из текущей директории и ее поддиректорий
```
git add .  
git add &lt;file_name&gt;  
git rm &lt;file&gt; - удаление файла  
git status - показывает состояние репозитория (отслеживаемые, измененные, новые файлы и так далее)  
git diff  
git checkout  
git checkout -b <branch_name>  
git branch - показывает список веток  
git branch &lt;branch&gt; - создание новой ветки  
git branch -D <branch_name> - удаление ветки  
git pull  
git pull &lt;repo link&gt; - скачивание данных с сервера  
git pull &lt;remote&gt; &lt;branch&gt; - получение данных из удаленного репозитория и слияние с локальным  
git push &lt;remote_name&gt; &lt;branch_name&gt; - перенести все локальные изменения, в удаленный репозиторий  
git push &lt;remote&gt; :&lt;branch&gt; - удаление ветки на удаленном сервере  
git fetch - связывается с удаленным репозиторием и забирает из него все изменения и сохраняет их локально  
git merge <branch_name> - merge branch into current branch  
git commit --allow-empty-message -m ''
git commit -m "Commit description" - сохраняет изменения в локальном репозитории  
git commit --amend -m "updated latest commit message"  
git stash - ?  
git stash pop - ?  
git stash apply - ?
git stash save  
git stash drop  
git log - просмотр истории коммитов  
git config  
git config --list --show-origin (посмотреть все установленные настройки и узнать где именно они заданы)  
git help  
git reset -- hard - ОПАСНАЯ команда, которая отменяет все незавершенные изменения  
git remote add "url or address" - добавляет новый удаленный адрес  
git remote get-url &lt;name&gt;  
git remote set-url &lt;name&gt; &lt;newurl&gt;  
git remote rename &lt;old> &lt;new&gt;  
git remote remove &lt;name&gt;  
git tag  
git rebase - интегрирует изменения из одной ветки в другую  
git config –global color.ui true - добавляет глобальную настройку в конфигурационный файл и делает вывод цветным для всех операций со всеми репозиториями  
git merge - используется для слияния одной или нескольких веток в текущую, после чего устанавливает указатель текущей ветки на результирующий коммит  
git clean -df - удаляет неотслеживаемые файлы и директории  

## Рабочие процессы

### Работа с задачами
git checkout -b feature/number  
git add <file_name>  
git commit -m ""  
git push origin feature/number  
pull request - если изменения приняты, переходим к следующему шагу  
git checkout master  
git pull origin master  

## Остальное
git config --global http.proxy http://proxyuser:proxypass@proxyaddress:8080  
