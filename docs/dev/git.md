# Работа с GIT

## Git Portable (Windows)
1. Download MiniGIT from https://github.com/git-for-windows/git/releases  
2. env_git.cmd
```
@echo off
SET PATH=%~dp0MinGit\cmd;%PATH%
SET gitdir=%~dp0MinGit
SET HOME=%gitdir%\home
SET EDITOR="С:\gvim_9.0.1712_x86\vim\vim90\gvim.exe"
```
3. Установка имени и электронной почты
```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```
4. Параметры установки окончаний строк  
```
Для пользователей Unix/Mac:
git config --global core.autocrlf input
git config --global core.safecrlf warn

Для пользователей Windows:
git config --global core.autocrlf true
git config --global core.safecrlf warn
```
```
git config http.sslVerify=false  // Disable SSL Verification
```

## Рабочие процессы

```
Feature:
    - создаём ветку фичи (из мастера) feature/xxx
    - ведём разработку в ветке фичи
    - комитим в ветку фичи
    - слить изменения из мастера в свою ветку ?(merge/*rebase)
    - пушим изменения на сервер
    - создаём запрос на слияние веток (либо ?*merge/?rebase в мастер)

Fix:
    -
    -
```

### Создание новой ветки (из мастера)
```
git checkout master
git cheackout -b feature/xxx
```

### Слить изменения из мастера в свою ветку
```
git checkout feature/xxx
git pull --rebase origin master
git pull --no-rebase origin master
? решение конфликтов:
    - решаем конфликт
    git add <conflicted file>
    git commit -m <enter message>
    git rebase --continue
    git push -f origin feature
    в последний, без ручного git commit -m <enter message>, получилась лажа, новый комит переписал все изменения, причём откатив нужные коммиты, а старые комиты повисли в воздухе

git push -f origin feature (?перед пушем в ветку, надо обязательно сделать pull из этой ветки, потому что если в неё кто то запушил комиты, то мы их затрём своей веткой без этих комитов)
```

### Отмена подготовленных и неподготовленных изменений
```
    git reset --soft <commit_hash> - откатывает изменения до указанного комита. Изменения остаются в индексе, как будто вы сделали git add, но не закоммитили их
    git reset --mixed - (стоит по умолчанию) — аналогичен варианту выше, но изменения уже не будут отслеживаться. Если после ресета выполнить команду git status, то Git предложит добавить изменения командой git add.
    git reset --hard - Полностью откатывает изменения и заменяет данные в рабочей директории. Все закоммиченные и незакоммиченные изменения удаляются.
    git reset --soft HEAD~1 - перейти к состоянию предыдущего коммита
    git rm --cached - удалить из индекса, но оставить в файловой системе

    git checkout <file_name> - восстановить неподготовленный к комиту файл
    git reset HEAD <file_name> - восстановить подготовленный к комиту файл
    git reset HEAD - для всей ветки
```

### Откат последнего коммита
```
Откатить последний коммит можно с помощью параметра revert. 
Создастся новый коммит, содержащий обратные преобразования относительно предыдущего, и добавится к истории текущей ветки.
git revert HEAD
git revert <commit_id>
```

### Удалить последнее изменение (использовал для отмены слияния master в ветку feature)
```
git checkout feature/xxx
git reset --hard HEAD~1
```

### Изменение последнего коммита
С помощью amend прекрасно исправляются локальные коммиты, а исправления можно передать в общий репозиторий. 
Однако изменять коммиты, уже доступные другим пользователям, не следует. 
Помните, что изменённые коммиты являются совершенно новыми, а предыдущий коммит уже не будет доступен в текущей ветке. 
Последствия будут такими же, как при отмене изменений публичного снимка
```
git commit --amend -m "Updated message for the previous commit"

git push --force-with-lease repository-name branch-name (это только если коммит с неправильным комментарием запушен в удалённый репозиторий)
```
```
git add dir1
git commit

# Here you forgot to add dir2 to commit, you can execute the
following command to amend the other files and folders.

git add dir2
git commit --amend --no-edit
```


### Залить изменения из своей ветки в master
```
git push origin <branch_name>:master
```

### Слияние двух веток
```
Команда объединит указанную ветку с основной.
git merge existing_branch_name

если надо выполнить коммит слияния, выполните команду git merge с флагом --no-ff
git merge --no-ff existing_branch_name
```

### Работа с задачами
git checkout -b feature/number  
git add <file_name>  
git commit -m ""  
git push origin feature/number  
pull request - если изменения приняты, переходим к следующему шагу  
git checkout master  
git pull origin master  

### История изменений
```
git log --pretty=format:"%h %ad %an %s" --stat
git log --graph
git log --graph --oneline
*git log --graph --oneline --decorate
git log --all --graph --oneline --decorate
git log --graph --oneline -5
Фильтрация истории коммитов:
    По дате:
        git log --after="2020-4-1"
        git log --after="yesterday"
        git log --after="1 week ago"
        git log --after="2020-4-1" --before="2014-4-6"
    По автору:
        git log --author="Alex" — найти коммиты Алекса.
        git log --author="Alex\|Ivan" — найти коммиты Алекса и Ивана.
    По другим параметрам:
        git log --grep="ISSUE-777:" — по паттерну сообщения.
        git log -- foo.py bar.py — по файлам, которые были изменены.
        git log -S "git" — поиск по содержимому файлов. Например, когда в файлы была добавлена или удалена строчка git.
    git log --no-merges — убрать из выборки мёрж-коммиты.
    git log --merges — выбрать только мёрж-коммиты.
```


### Добавить удалённый репозиторий (пустой) в существующую папку
```
git init
git add .
git commit -m "Initial commit"
git add origin <remote_origin_url>
git push origin master
```

### Перенести изменения из другого коммита с помощью cherry pick
```
git switch <target_branch>
git cherry-pick <commit-hash>
```

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
git diff --staged  
git diff branch1 -- branch2  
git diff commit1 commit2  
git checkout  
git checkout -b <branch_name>  
git branch - показывает список веток  
git branch - a - показывает список удалённых(?deleted/?remote) веток  
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
git stash - Припрятывание незавершённых наработок  
git stash list - Список припрятанных изменений
git stash pop stash_name - применить и удалить припрятанное изменение  
git stash apply <stash_name> - применить одно из предыдущих припрятанных изменений, если не указать имя то git попытается восстановить самое последнее припрятанное изменение  
git stash drop stash_name - удалить припрятанное изменение  
git log - просмотр истории коммитов  
git reflog  
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
git show &lt;commit_id&gt;  
git prune (git prune < --dry-run>| <-v> | <--progress> |<--expire \<time\> |<-- > |\<head\>…)  
    --dry-run: doesn’t execute the prune but rather lists what it will remove  
    -v (--verbose): displays the output of pruned data and actions  
    --progress: displays output indicating the prune’s progress  
    --expire \<time\>: specifies when the wasted objects will expire  
    \<head\>…: specifies the options that are referenced from the commit’s head  


## Остальное
git config --global http.proxy http://proxyuser:proxypass@proxyaddress:8080  


```
feat – a new feature is introduced with the changes
fix – a bug fix has occurred
chore – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)
refactor – refactored code that neither fixes a bug nor adds a feature
docs – updates to documentation such as a the README or other markdown files
style – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
test – including new or correcting previous tests
perf – performance improvements
ci – continuous integration related
build – changes that affect the build system or external dependencies
revert – reverts a previous commit 
```
