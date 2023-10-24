import{_ as e,o as d,c as r,e as a}from"./app-024c187f.js";const n={},o=a(`<h1 id="fedora-server" tabindex="-1"><a class="header-anchor" href="#fedora-server" aria-hidden="true">#</a> Fedora Server</h1><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    sudo dnf -y install dnf-plugins-core
    sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
    sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    sudo systemctl start docker
    sudo docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),s=[o];function c(i,l){return d(),r("div",null,s)}const u=e(n,[["render",c],["__file","fedora_server.html.vue"]]);export{u as default};
