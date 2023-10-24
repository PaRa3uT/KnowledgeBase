import{_ as a,r,o as i,c as t,a as e,b as n,d as l,e as o}from"./app-024c187f.js";const d={},c={id:"opnsense",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#opnsense","aria-hidden":"true"},"#",-1),p={href:"https://opnsense.org",target:"_blank",rel:"noopener noreferrer"},u=o(`<p>(FreeBSD) (Firewall, OpenVPN Server)<br> Install</p><ul><li>-RAM 256 MB (Install error)</li><li>+RAM 512 MB (Нормально работает)</li><li>-HDD 2 GB (Мало, нехватило для обновлений)</li><li>?HDD 4 GB</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Resize partition:
    sysctl kern.geom.debugflags=16
    gpart show ada0
    gpart resize -i 1 ada0
    gpart resize -i 1 ada0s1
    growfs -y /dev/ufs/OPNsense
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function v(m,h){const s=r("ExternalLinkIcon");return i(),t("div",null,[e("h1",c,[_,n(),e("a",p,[n("OPNsense"),l(s)])]),u])}const f=a(d,[["render",v],["__file","opnsense.html.vue"]]);export{f as default};
