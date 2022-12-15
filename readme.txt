npm i -D vuepress@next
npm i -D @vuepress/plugin-search@next
npm i -D @vuepress/plugin-active-header-links@next
npm i -D @vuepress/plugin-back-to-top@next

npx vuepress dev docs
npx vuepress build docs
npm update --save