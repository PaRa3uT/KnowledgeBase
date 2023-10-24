import{_ as o,r as a,o as i,c as d,a as e,b as s,d as r,e as t}from"./app-024c187f.js";const c={},l={id:"php",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#php","aria-hidden":"true"},"#",-1),h={href:"https://php.net",target:"_blank",rel:"noopener noreferrer"},m={id:"composer",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#composer","aria-hidden":"true"},"#",-1),v={href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"},u=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir composer
cd composer
https://getcomposer.org/download/
wget https://getcomposer.org/download/latest-stable/composer.phar
set path=%~dp0;%path%
echo @php &quot;%~dp0composer.phar&quot; %*&gt;composer.bat
composer -V

SET HTTP_PROXY=http://username:password@192.168.10.3:3128
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b={id:"yii",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#yii","aria-hidden":"true"},"#",-1),f={href:"https://www.yiiframework.com",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php ext: curl, mbstring, openssl
composer create-project yiisoft/yii2-app-basic yii2-basic
composer create-project yiisoft/yii2-app-advanced yii2-advanced
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(y,w){const n=a("ExternalLinkIcon");return i(),d("div",null,[e("h1",l,[p,s(),e("a",h,[s("PHP"),r(n)])]),e("h2",m,[_,s(),e("a",v,[s("Composer"),r(n)])]),u,e("h2",b,[g,s(),e("a",f,[s("Yii"),r(n)])]),x])}const E=o(c,[["render",k],["__file","php.html.vue"]]);export{E as default};
