import{_ as e,o as n,c as a,e as t}from"./app-9ee1dfa4.js";const d={},i=t(`<h2 id="nodejs-16" tabindex="-1"><a class="header-anchor" href="#nodejs-16" aria-hidden="true">#</a> NodeJS 16</h2><ol><li>Get node binary https://nodejs.org/dist/v16.13.0/node-v16.13.0-win-x86.zip</li><li>Create the folder where node will reside and move node.exe, npx, npx.cmd, npm, npm.cmd, node_modules to it</li><li>Add the the node folder and the packages/bin folder to PATH</li><li>On a command prompt execute npm install -g npm to update npm to the latest version</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm list -g --depth=0
npm outdated (проверить есть ли устаревшие пакеты)
npm update (обновить все устаревшие пакеты)
npm update --save (обновить все устаревшие пакеты и записать версии в package.json)
npm update &lt;package_name&gt; (обновить пакет)
npm update --save &lt;package_name&gt; (обновить пакет и записать версию в package.json)
npm install &lt;package_name&gt;@latest --save (Обновить до полседней версии)
npm install &lt;package_name&gt;@latest --save --force
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),s=[i];function l(o,c){return n(),a("div",null,s)}const m=e(d,[["render",l],["__file","nodejs.html.vue"]]);export{m as default};
