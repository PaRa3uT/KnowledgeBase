import{_ as e,o as a,c as n,e as i}from"./app-024c187f.js";const t={},r=i(`<h1 id="awx" tabindex="-1"><a class="header-anchor" href="#awx" aria-hidden="true">#</a> AWX</h1><h2 id="reset-ansible-awx-tower-admin-password" tabindex="-1"><a class="header-anchor" href="#reset-ansible-awx-tower-admin-password" aria-hidden="true">#</a> Reset Ansible AWX Tower admin password</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps
docker exec -it awx_web bash
awx-manage changepassword admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="install-with-awx-operator" tabindex="-1"><a class="header-anchor" href="#install-with-awx-operator" aria-hidden="true">#</a> Install with AWX-operator</h2><h3 id="install-minikube" tabindex="-1"><a class="header-anchor" href="#install-minikube" aria-hidden="true">#</a> Install minikube</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>minikube delete
rm -rf ~/.minikube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>with proxy</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export http_proxy=http://&lt;proxy_ip&gt;:&lt;proxy_port&gt;
export https_proxy=http://&lt;proxy_ip&gt;:&lt;proxy_port&gt;
unset no_proxy
unset NO_PROXY
export no_proxy=localhost,127.0.0.1
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube start --docker-env HTTP_PROXY=$http_proxy --docker-env HTTPS_PROXY=$https_proxy --docker-env NO_PROXY=$no_proxy --addons=ingress --cni=flannel --install-addons=true --kubernetes-version=1.21.2
export no_proxy=$no_proxy,$(minikube ip)
export NO_PROXY=$no_proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>without proxy</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube start --addons=ingress --cni=flannel --install-addons=true --kubernetes-version=1.21.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>alias kubectl=&quot;minikube kubectl --&quot;
kubectl apply -f https://raw.githubusercontent.com/ansible/awx-operator/0.13.0/deploy/awx-operator.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Wait a few minutes and you should have the awx-operator running.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ kubectl get pods
NAME                            READY   STATUS    RESTARTS   AGE
awx-operator-7dbf9db9d7-z9hqx   1/1     Running   0          50s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then create a file named awx-demo.yml with the suggested content. The metadata.name you provide, will be the name of the resulting AWX deployment. If you deploy more than one AWX instance to the same namespace, be sure to use unique names.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
apiVersion: awx.ansible.com/v1beta1
kind: AWX
metadata:
  name: awx-demo
spec:
  service_type: nodeport
  ingress_type: none
  hostname: awx-demo.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl apply -f awx-demo.yml
kubectl logs -f deployments/awx-operator
kubectl get pods -l &quot;app.kubernetes.io/managed-by=awx-operator&quot;
kubectl get svc -l &quot;app.kubernetes.io/managed-by=awx-operator&quot;
minikube service awx-demo-service --url
minikube service list (http://192.168.49.2:31648)
kubectl get secret awx-demo-admin-password -o jsonpath=&quot;{.data.password}&quot; | base64 --decode
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="install-with-docker-19-3-0-https-github-com-ansible-awx-blob-devel-tools-docker-compose-readme-md" tabindex="-1"><a class="header-anchor" href="#install-with-docker-19-3-0-https-github-com-ansible-awx-blob-devel-tools-docker-compose-readme-md" aria-hidden="true">#</a> Install with docker (19.3.0) (https://github.com/ansible/awx/blob/devel/tools/docker-compose/README.md)</h2><p>Check latest version on https://github.com/ansible/awx/releases/latest</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone -b x.y.z https://github.com/ansible/awx.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>In the &quot;inventory file&quot;, set your pg_password, broadcast_websocket_secret, secret_key, and any other settings you need for your deployment</p><h3 id="build-the-image" tabindex="-1"><a class="header-anchor" href="#build-the-image" aria-hidden="true">#</a> Build the image</h3><p>make docker-compose-build</p><h3 id="run-awx" tabindex="-1"><a class="header-anchor" href="#run-awx" aria-hidden="true">#</a> Run AWX</h3><p>Start the containers<br> make docker-compose<br> Clean and Build UI<br> docker exec tools_awx_1 make clean-ui ui-devel<br> Create an admin user<br> docker exec -ti tools_awx_1 awx-manage createsuperuser<br> Load Demo Data (Optionally)<br> docker exec tools_awx_1 awx-manage create_preload_data</p><h2 id="migrating-data-from-local-docker" tabindex="-1"><a class="header-anchor" href="#migrating-data-from-local-docker" aria-hidden="true">#</a> Migrating Data from Local Docker</h2><p>If you are migrating data from a Local Docker installation (17.0.1 and prior) to AWX 18.0 or higher, you can migrate your data to the development environment via the migrate.yml playbook.<br> Note: This will also convert your postgresql bind-mount into a docker volume.</p><h2 id="upgrading-the-development-environment" tabindex="-1"><a class="header-anchor" href="#upgrading-the-development-environment" aria-hidden="true">#</a> Upgrading the Development Environment</h2><p>Upgrading AWX involves checking out the new source code and re-running the make target. Download a newer release from https://github.com/ansible/awx/releases and re-populate the inventory file with your customized variables.<br> After updating the inventory file with any custom values, run the make target from the root of your AWX clone.<br> $ make docker-compose</p>`,29),s=[r];function d(l,o){return a(),n("div",null,s)}const u=e(t,[["render",d],["__file","awx.html.vue"]]);export{u as default};
