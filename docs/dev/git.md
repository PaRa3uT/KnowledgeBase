# Работа с GIT

## Описание команд
git init  
git init --bare  
git add .  
git add <file_name>  
git status  
git diff  
git checkout  
git checkout -b <branch_name>  
git branch  
git branch -D <branch_name> - delete branch  
git pull  
git push  
git merge <branch_name> - merge branch into current branch  
git commit -m "Commit description"  
git commit --amend -m "updated latest commit message"  
git stash - ?  
git stash pop - ?  
git stash apply - ?  
git log  

## Рабочие процессы

### Работа с задачами
git checkout -b feature/number  
git add <file_name>  
git commit -m ""  
git push origin feature/number  
pull request - если изменения приняты, переходим к следующему шагу  
git checkout master  
git pull origin master  