import{_ as e,o as i,c as t,e as a}from"./app-024c187f.js";const n={},r=a(`<h1 id="работа-с-git" tabindex="-1"><a class="header-anchor" href="#работа-с-git" aria-hidden="true">#</a> Работа с GIT</h1><h2 id="git-portable-windows" tabindex="-1"><a class="header-anchor" href="#git-portable-windows" aria-hidden="true">#</a> Git Portable (Windows)</h2><ol><li>Download MiniGIT from https://github.com/git-for-windows/git/releases</li><li>env_git.cmd</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@echo off
SET PATH=%~dp0MinGit\\cmd;%PATH%
SET gitdir=%~dp0MinGit
SET HOME=%gitdir%\\home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Установка имени и электронной почты</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name &quot;John Doe&quot;
git config --global user.email johndoe@example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>Параметры установки окончаний строк</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Для пользователей Unix/Mac:
git config --global core.autocrlf input
git config --global core.safecrlf warn

Для пользователей Windows:
git config --global core.autocrlf true
git config --global core.safecrlf warn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config http.sslVerify=false  // Disable SSL Verification
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="рабочие-процессы" tabindex="-1"><a class="header-anchor" href="#рабочие-процессы" aria-hidden="true">#</a> Рабочие процессы</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Feature:
    - создаём ветку фичи (из мастера) feature/xxx
    - ведём разработку в ветке фичи
    - комитим в ветку фичи
    - слить изменения из мастера в свою ветку ?(merge/*rebase)
    - пушим изменения на сервер
    - создаём запрос на слияние веток (либо ?*merge/?rebase в мастер)

Fix:
    -
    -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="создание-новои-ветки-из-мастера" tabindex="-1"><a class="header-anchor" href="#создание-новои-ветки-из-мастера" aria-hidden="true">#</a> Создание новой ветки (из мастера)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout master
git cheackout -b feature/xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="слить-изменения-из-мастера-в-свою-ветку" tabindex="-1"><a class="header-anchor" href="#слить-изменения-из-мастера-в-свою-ветку" aria-hidden="true">#</a> Слить изменения из мастера в свою ветку</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout feature/xxx
git pull --rebase origin master
git pull --no-rebase origin master
? решение конфликтов:
    - решаем конфликт
    git add &lt;conflicted file&gt;
    git commit -m &lt;enter message&gt;
    git rebase --continue
    git push -f origin feature
    в последний, без ручного git commit -m &lt;enter message&gt;, получилась лажа, новый комит переписал все изменения, причём откатив нужные коммиты, а старые комиты повисли в воздухе

git push -f origin feature (?перед пушем в ветку, надо обязательно сделать pull из этой ветки, потому что если в неё кто то запушил комиты, то мы их затрём своей веткой без этих комитов)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="отмена-подготовленных-и-неподготовленных-изменении" tabindex="-1"><a class="header-anchor" href="#отмена-подготовленных-и-неподготовленных-изменении" aria-hidden="true">#</a> Отмена подготовленных и неподготовленных изменений</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    git reset --soft &lt;commit_hash&gt; - откатывает изменения до указанного комита. Изменения остаются в индексе, как будто вы сделали git add, но не закоммитили их
    git reset --mixed - (стоит по умолчанию) — аналогичен варианту выше, но изменения уже не будут отслеживаться. Если после ресета выполнить команду git status, то Git предложит добавить изменения командой git add.
    git reset --hard - Полностью откатывает изменения и заменяет данные в рабочей директории. Все закоммиченные и незакоммиченные изменения удаляются.
    git reset --soft HEAD~1 - перейти к состоянию предыдущего коммита
    git rm --cached - удалить из индекса, но оставить в файловой системе

    git checkout &lt;file_name&gt; - восстановить неподготовленный к комиту файл
    git reset HEAD &lt;file_name&gt; - восстановить подготовленный к комиту файл
    git reset HEAD - для всей ветки
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="откат-последнего-коммита" tabindex="-1"><a class="header-anchor" href="#откат-последнего-коммита" aria-hidden="true">#</a> Откат последнего коммита</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Откатить последний коммит можно с помощью параметра revert. 
Создастся новый коммит, содержащий обратные преобразования относительно предыдущего, и добавится к истории текущей ветки.
git revert HEAD
git revert &lt;commit_id&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="удалить-последнее-изменение-использовал-для-отмены-слияния-master-в-ветку-feature" tabindex="-1"><a class="header-anchor" href="#удалить-последнее-изменение-использовал-для-отмены-слияния-master-в-ветку-feature" aria-hidden="true">#</a> Удалить последнее изменение (использовал для отмены слияния master в ветку feature)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout feature/xxx
git reset --hard HEAD~1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="изменение-последнего-коммита" tabindex="-1"><a class="header-anchor" href="#изменение-последнего-коммита" aria-hidden="true">#</a> Изменение последнего коммита</h3><p>С помощью amend прекрасно исправляются локальные коммиты, а исправления можно передать в общий репозиторий. Однако изменять коммиты, уже доступные другим пользователям, не следует. Помните, что изменённые коммиты являются совершенно новыми, а предыдущий коммит уже не будет доступен в текущей ветке. Последствия будут такими же, как при отмене изменений публичного снимка</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit --amend -m &quot;Updated message for the previous commit&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add dir1
git commit

# Here you forgot to add dir2 to commit, you can execute the
following command to amend the other files and folders.

git add dir2
git commit --amend --no-edit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="залить-изменения-из-своеи-ветки-в-master" tabindex="-1"><a class="header-anchor" href="#залить-изменения-из-своеи-ветки-в-master" aria-hidden="true">#</a> Залить изменения из своей ветки в master</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push origin &lt;branch_name&gt;:master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="слияние-двух-веток" tabindex="-1"><a class="header-anchor" href="#слияние-двух-веток" aria-hidden="true">#</a> Слияние двух веток</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Команда объединит указанную ветку с основной.
git merge existing_branch_name

если надо выполнить коммит слияния, выполните команду git merge с флагом --no-ff
git merge --no-ff existing_branch_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="работа-с-задачами" tabindex="-1"><a class="header-anchor" href="#работа-с-задачами" aria-hidden="true">#</a> Работа с задачами</h3><p>git checkout -b feature/number<br> git add &lt;file_name&gt;<br> git commit -m &quot;&quot;<br> git push origin feature/number<br> pull request - если изменения приняты, переходим к следующему шагу<br> git checkout master<br> git pull origin master</p><h3 id="история-изменении" tabindex="-1"><a class="header-anchor" href="#история-изменении" aria-hidden="true">#</a> История изменений</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log --pretty=format:&quot;%h %ad %an %s&quot; --stat
git log --graph
git log --graph --oneline
*git log --graph --oneline --decorate
git log --all --graph --oneline --decorate
git log --graph --oneline -5
Фильтрация истории коммитов:
    По дате:
        git log --after=&quot;2020-4-1&quot;
        git log --after=&quot;yesterday&quot;
        git log --after=&quot;1 week ago&quot;
        git log --after=&quot;2020-4-1&quot; --before=&quot;2014-4-6&quot;
    По автору:
        git log --author=&quot;Alex&quot; — найти коммиты Алекса.
        git log --author=&quot;Alex\\|Ivan&quot; — найти коммиты Алекса и Ивана.
    По другим параметрам:
        git log --grep=&quot;ISSUE-777:&quot; — по паттерну сообщения.
        git log -- foo.py bar.py — по файлам, которые были изменены.
        git log -S &quot;git&quot; — поиск по содержимому файлов. Например, когда в файлы была добавлена или удалена строчка git.
    git log --no-merges — убрать из выборки мёрж-коммиты.
    git log --merges — выбрать только мёрж-коммиты.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="добавить-удаленныи-репозитории-пустои-в-существующую-папку" tabindex="-1"><a class="header-anchor" href="#добавить-удаленныи-репозитории-пустои-в-существующую-папку" aria-hidden="true">#</a> Добавить удалённый репозиторий (пустой) в существующую папку</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init
git add .
git commit -m &quot;Initial commit&quot;
git add origin &lt;remote_origin_url&gt;
git push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="перенести-изменения-из-другого-коммита-с-помощью-cherry-pick" tabindex="-1"><a class="header-anchor" href="#перенести-изменения-из-другого-коммита-с-помощью-cherry-pick" aria-hidden="true">#</a> Перенести изменения из другого коммита с помощью cherry pick</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git switch &lt;target_branch&gt;
git cherry-pick &lt;commit-hash&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="описание-команд" tabindex="-1"><a class="header-anchor" href="#описание-команд" aria-hidden="true">#</a> Описание команд</h2><p>git init - создание нового репозитория<br> git init --bare<br> git clone &lt;remote&gt; - клонирование удаленного репозитория</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add  // добавляет все новые, измененные, удаленные файлы из текущей директории и ее поддиректорий
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>git add .<br> git add &lt;file_name&gt;<br> git rm &lt;file&gt; - удаление файла<br> git status - показывает состояние репозитория (отслеживаемые, измененные, новые файлы и так далее)<br> git diff<br> git diff --staged<br> git diff branch1 -- branch2<br> git diff commit1 commit2<br> git checkout<br> git checkout -b &lt;branch_name&gt;<br> git branch - показывает список веток<br> git branch - a - показывает список удалённых(?deleted/?remote) веток<br> git branch &lt;branch&gt; - создание новой ветки<br> git branch -D &lt;branch_name&gt; - удаление ветки<br> git pull<br> git pull &lt;repo link&gt; - скачивание данных с сервера<br> git pull &lt;remote&gt; &lt;branch&gt; - получение данных из удаленного репозитория и слияние с локальным<br> git push &lt;remote_name&gt; &lt;branch_name&gt; - перенести все локальные изменения, в удаленный репозиторий<br> git push &lt;remote&gt; :&lt;branch&gt; - удаление ветки на удаленном сервере<br> git fetch - связывается с удаленным репозиторием и забирает из него все изменения и сохраняет их локально<br> git merge &lt;branch_name&gt; - merge branch into current branch<br> git commit --allow-empty-message -m &#39;&#39; git commit -m &quot;Commit description&quot; - сохраняет изменения в локальном репозитории<br> git commit --amend -m &quot;updated latest commit message&quot;<br> git stash - Припрятывание незавершённых наработок<br> git stash list - Список припрятанных изменений git stash pop stash_name - применить и удалить припрятанное изменение<br> git stash apply &lt;stash_name&gt; - применить одно из предыдущих припрятанных изменений, если не указать имя то git попытается восстановить самое последнее припрятанное изменение<br> git stash drop stash_name - удалить припрятанное изменение<br> git log - просмотр истории коммитов<br> git reflog<br> git config<br> git config --list --show-origin (посмотреть все установленные настройки и узнать где именно они заданы)<br> git help<br> git reset -- hard - ОПАСНАЯ команда, которая отменяет все незавершенные изменения<br> git remote add &quot;url or address&quot; - добавляет новый удаленный адрес<br> git remote get-url &lt;name&gt;<br> git remote set-url &lt;name&gt; &lt;newurl&gt;<br> git remote rename &lt;old&gt; &lt;new&gt;<br> git remote remove &lt;name&gt;<br> git tag<br> git rebase - интегрирует изменения из одной ветки в другую<br> git config –global color.ui true - добавляет глобальную настройку в конфигурационный файл и делает вывод цветным для всех операций со всеми репозиториями<br> git merge - используется для слияния одной или нескольких веток в текущую, после чего устанавливает указатель текущей ветки на результирующий коммит<br> git clean -df - удаляет неотслеживаемые файлы и директории<br> git show &lt;commit_id&gt;<br> git prune (git prune &lt; --dry-run&gt;| &lt;-v&gt; | &lt;--progress&gt; |&lt;--expire &lt;time&gt; |&lt;-- &gt; |&lt;head&gt;…)<br> --dry-run: doesn’t execute the prune but rather lists what it will remove<br> -v (--verbose): displays the output of pruned data and actions<br> --progress: displays output indicating the prune’s progress<br> --expire &lt;time&gt;: specifies when the wasted objects will expire<br> &lt;head&gt;…: specifies the options that are referenced from the commit’s head</p><h2 id="остальное" tabindex="-1"><a class="header-anchor" href="#остальное" aria-hidden="true">#</a> Остальное</h2><p>git config --global http.proxy http://proxyuser:proxypass@proxyaddress:8080</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>feat – a new feature is introduced with the changes
fix – a bug fix has occurred
chore – changes that do not relate to a fix or feature and don&#39;t modify src or test files (for example updating dependencies)
refactor – refactored code that neither fixes a bug nor adds a feature
docs – updates to documentation such as a the README or other markdown files
style – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on.
test – including new or correcting previous tests
perf – performance improvements
ci – continuous integration related
build – changes that affect the build system or external dependencies
revert – reverts a previous commit 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),d=[r];function s(l,c){return i(),t("div",null,d)}const u=e(n,[["render",s],["__file","git.html.vue"]]);export{u as default};
