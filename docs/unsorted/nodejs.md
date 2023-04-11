## NodeJS 16
1. Get node binary https://nodejs.org/dist/v16.13.0/node-v16.13.0-win-x86.zip
2. Create the folder where node will reside and move node.exe, npx, npx.cmd, npm, npm.cmd, node_modules to it
3. Add the the node folder and the packages/bin folder to PATH
4. On a command prompt execute npm install -g npm to update npm to the latest version

```
npm list -g --depth=0
npm outdated (проверить есть ли устаревшие пакеты)
npm update (обновить все устаревшие пакеты)
npm update --save (обновить все устаревшие пакеты и записать версии в package.json)
npm update <package_name> (обновить пакет)
npm update --save <package_name> (обновить пакет и записать версию в package.json)
npm install <package_name>@latest --save (Обновить до полседней версии)
npm install <package_name>@latest --save --force
```
