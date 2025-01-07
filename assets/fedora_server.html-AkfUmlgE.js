import{_ as a,c as s,b as r,o as n}from"./app-BsHIgujo.js";const d={};function l(i,e){return n(),s("div",null,e[0]||(e[0]=[r(`<h1 id="fedora-server" tabindex="-1"><a class="header-anchor" href="#fedora-server"><span>Fedora Server</span></a></h1><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    sudo dnf -y install dnf-plugins-core</span>
<span class="line">    sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo</span>
<span class="line">    sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</span>
<span class="line">    sudo systemctl start docker</span>
<span class="line">    sudo docker run hello-world</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const t=a(d,[["render",l],["__file","fedora_server.html.vue"]]),c=JSON.parse('{"path":"/os/linux/fedora_server.html","title":"Fedora Server","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[]}],"git":{"updatedTime":1683572587000,"contributors":[{"name":"PaRa3uT","username":"PaRa3uT","email":"PaRa3uT.74@gmail.com","commits":1,"url":"https://github.com/PaRa3uT"}]},"filePathRelative":"os/linux/fedora_server.md"}');export{t as comp,c as data};
