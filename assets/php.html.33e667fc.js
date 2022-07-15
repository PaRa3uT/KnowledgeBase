import{_ as i,r,o as a,c as d,a as e,d as o,b as s,e as n}from"./app.11ae776d.js";const c={},l={id:"php",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#php","aria-hidden":"true"},"#",-1),h=s(),_={href:"https://php.net",target:"_blank",rel:"noopener noreferrer"},m=s("PHP"),v={id:"composer",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#composer","aria-hidden":"true"},"#",-1),b=s(),g={href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"},f=s("Composer"),x=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir composer
cd composer
https://getcomposer.org/download/
wget https://getcomposer.org/download/latest-stable/composer.phar
set path=%~dp0;%path%
echo @php &quot;%~dp0composer.phar&quot; %*&gt;composer.bat
composer -V

SET HTTP_PROXY=http://username:password@192.168.10.3:3128
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k={id:"yii",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#yii","aria-hidden":"true"},"#",-1),w=s(),V={href:"https://www.yiiframework.com",target:"_blank",rel:"noopener noreferrer"},E=s("Yii"),N=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php ext: curl, mbstring, openssl
composer create-project yiisoft/yii2-app-basic yii2-basic
composer create-project yiisoft/yii2-app-advanced yii2-advanced
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function P(T,B){const t=r("ExternalLinkIcon");return a(),d("div",null,[e("h1",l,[p,h,e("a",_,[m,o(t)])]),e("h2",v,[u,b,e("a",g,[f,o(t)])]),x,e("h2",k,[y,w,e("a",V,[E,o(t)])]),N])}var q=i(c,[["render",P],["__file","php.html.vue"]]);export{q as default};
