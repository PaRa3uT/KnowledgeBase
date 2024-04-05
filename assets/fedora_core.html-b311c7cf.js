import{_ as e,o as s,c as t,e as n}from"./app-9ee1dfa4.js";const a={},i=n(`<h1 id="fedora-core" tabindex="-1"><a class="header-anchor" href="#fedora-core" aria-hidden="true">#</a> Fedora Core</h1><ol><li><p>Ignition config (https://docs.fedoraproject.org/en-US/fedora-coreos/producing-ign/) donwload Butane https://github.com/coreos/butane/releases</p><p>gen pass hash: &quot;openssl passwd -1 -salt yoursalt&quot; &#39;fed0r@&#39;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>variant: fcos
version: 1.4.0
passwd:
  users:
    - name: core
      password_hash: &quot;$1$yoursalt$zuE/ptA7ymZMM1b55n2NQ1&quot;
      ssh_authorized_keys:
        - ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIE8KB9PeFpv5KYXLc98yyYqvQKntp1LK8ei38KZ1hzJk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>с ssh-rsa ключами не получилось, получилось с ssh-ed25519</p><p>Replace the above line starting with ssh-ed25519 with the contents of your SSH public key file. Save the file with the name example.bu. butane --pretty --strict example.bu &gt; example.ign python3 -m http.server sudo coreos-installer install /dev/sda --ignition-url http://&lt;ip_addres_where_run_python_http_server&gt;/example.ign --insecure-ignition</p>`,4),r=[i];function o(d,l){return s(),t("div",null,r)}const u=e(a,[["render",o],["__file","fedora_core.html.vue"]]);export{u as default};
