import{_ as s,c as n,b as a,o as t}from"./app-BsHIgujo.js";const l={};function i(c,e){return t(),n("div",null,e[0]||(e[0]=[a(`<h1 id="ubuntu-server-lts" tabindex="-1"><a class="header-anchor" href="#ubuntu-server-lts"><span>Ubuntu Server LTS</span></a></h1><h2 id="docker-https-docs-docker-com-engine-install-ubuntu" tabindex="-1"><a class="header-anchor" href="#docker-https-docs-docker-com-engine-install-ubuntu"><span>[Docker] (https://docs.docker.com/engine/install/ubuntu/)</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo apt-get update</span>
<span class="line">sudo apt-get install ca-certificates curl gnupg</span>
<span class="line"></span>
<span class="line">sudo install -m 0755 -d /etc/apt/keyrings</span>
<span class="line">curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg</span>
<span class="line">sudo chmod a+r /etc/apt/keyrings/docker.gpg</span>
<span class="line"></span>
<span class="line">echo \\</span>
<span class="line">  &quot;deb [arch=&quot;$(dpkg --print-architecture)&quot; signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\</span>
<span class="line">  &quot;$(. /etc/os-release &amp;&amp; echo &quot;$VERSION_CODENAME&quot;)&quot; stable&quot; | \\</span>
<span class="line">  sudo tee /etc/apt/sources.list.d/docker.list &gt; /dev/null</span>
<span class="line"></span>
<span class="line">sudo apt-get update</span>
<span class="line">sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</span>
<span class="line">sudo docker run hello-world</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const d=s(l,[["render",i],["__file","ubuntu_server.html.vue"]]),r=JSON.parse('{"path":"/os/linux/ubuntu_server.html","title":"Ubuntu Server LTS","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"[Docker] (https://docs.docker.com/engine/install/ubuntu/)","slug":"docker-https-docs-docker-com-engine-install-ubuntu","link":"#docker-https-docs-docker-com-engine-install-ubuntu","children":[]}],"git":{"updatedTime":1683572587000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":1,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"os/linux/ubuntu_server.md"}');export{d as comp,r as data};
