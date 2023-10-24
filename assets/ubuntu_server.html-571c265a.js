import{_ as e,o as n,c as d,e as t}from"./app-024c187f.js";const s={},i=t(`<h1 id="ubuntu-server-lts" tabindex="-1"><a class="header-anchor" href="#ubuntu-server-lts" aria-hidden="true">#</a> Ubuntu Server LTS</h1><h2 id="docker-https-docs-docker-com-engine-install-ubuntu" tabindex="-1"><a class="header-anchor" href="#docker-https-docs-docker-com-engine-install-ubuntu" aria-hidden="true">#</a> [Docker] (https://docs.docker.com/engine/install/ubuntu/)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get update
sudo apt-get install ca-certificates curl gnupg

sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \\
  &quot;deb [arch=&quot;$(dpkg --print-architecture)&quot; signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\
  &quot;$(. /etc/os-release &amp;&amp; echo &quot;$VERSION_CODENAME&quot;)&quot; stable&quot; | \\
  sudo tee /etc/apt/sources.list.d/docker.list &gt; /dev/null

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo docker run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[i];function r(u,a){return n(),d("div",null,c)}const o=e(s,[["render",r],["__file","ubuntu_server.html.vue"]]);export{o as default};
