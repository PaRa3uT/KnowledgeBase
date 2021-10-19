# Other

## QEMU
qemu -m 512 -cdrom /путь/к_iso-образу/example.iso -boot d (Запуск Live CD из ISO-образа)
qemu -smp threads=2 -m 1024 -cdrom /путь/к_iso-образу/example.iso -boot d

## AWX

### Reset Ansible AWX Tower admin password
```
docker ps
docker exec -it awx_web bash
awx-manage changepassword admin
```

### Install with AWX-operator
#### Install minikube
```
minikube delete
rm -rf ~/.minikube
```

with proxy
```
export http_proxy=http://<proxy_ip>:<proxy_port>
export https_proxy=http://<proxy_ip>:<proxy_port>
unset no_proxy
unset NO_PROXY
export no_proxy=localhost,127.0.0.1
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube start --docker-env HTTP_PROXY=$http_proxy --docker-env HTTPS_PROXY=$https_proxy --docker-env NO_PROXY=$no_proxy --addons=ingress --cni=flannel --install-addons=true --kubernetes-version=1.21.2
export no_proxy=$no_proxy,$(minikube ip)
export NO_PROXY=$no_proxy
```

without proxy
```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube start --addons=ingress --cni=flannel --install-addons=true --kubernetes-version=1.21.2
```

```
alias kubectl="minikube kubectl --"
kubectl apply -f https://raw.githubusercontent.com/ansible/awx-operator/0.13.0/deploy/awx-operator.yaml
```

Wait a few minutes and you should have the awx-operator running.
```
$ kubectl get pods
NAME                            READY   STATUS    RESTARTS   AGE
awx-operator-7dbf9db9d7-z9hqx   1/1     Running   0          50s
```

Then create a file named awx-demo.yml with the suggested content. The metadata.name you provide, will be the name of the resulting AWX deployment. If you deploy more than one AWX instance to the same namespace, be sure to use unique names.
```
---
apiVersion: awx.ansible.com/v1beta1
kind: AWX
metadata:
  name: awx-demo
spec:
  service_type: nodeport
  ingress_type: none
  hostname: awx-demo.example.com
```
```
kubectl apply -f awx-demo.yml
kubectl logs -f deployments/awx-operator
kubectl get pods -l "app.kubernetes.io/managed-by=awx-operator"
kubectl get svc -l "app.kubernetes.io/managed-by=awx-operator"
minikube service awx-demo-service --url
minikube service list (http://192.168.49.2:31648)
kubectl get secret awx-demo-admin-password -o jsonpath="{.data.password}" | base64 --decode
```

### Install with docker (19.3.0) (https://github.com/ansible/awx/blob/devel/tools/docker-compose/README.md)  
Check latest version on https://github.com/ansible/awx/releases/latest  
```
git clone -b x.y.z https://github.com/ansible/awx.git
```

#### Configuration  
In the "inventory file", set your pg_password, broadcast_websocket_secret, secret_key, and any other settings you need for your deployment  

#### Build the image  
make docker-compose-build  

#### Run AWX  
Start the containers  
make docker-compose  
Clean and Build UI  
docker exec tools_awx_1 make clean-ui ui-devel  
Create an admin user  
docker exec -ti tools_awx_1 awx-manage createsuperuser  
Load Demo Data (Optionally)  
docker exec tools_awx_1 awx-manage create_preload_data  

### Migrating Data from Local Docker  
  If you are migrating data from a Local Docker installation (17.0.1 and prior) to AWX 18.0 or higher, you can migrate your data to the development environment via the migrate.yml playbook.  
  Note: This will also convert your postgresql bind-mount into a docker volume.  

### Upgrading the Development Environment  
  Upgrading AWX involves checking out the new source code and re-running the make target. Download a newer release from https://github.com/ansible/awx/releases and re-populate the inventory file with your customized variables.  
  After updating the inventory file with any custom values, run the make target from the root of your AWX clone.  
  $ make docker-compose  

## Ansible
ansible --version  
ansible [all | ungrouped | <group_name> | <host_name> | host_ip] --list-hosts  
ansible-playbook playbooks/&lt;playbook&gt;.yml
ansible-vault
ansible-vault encrypt host_vars/cdn-01.example.com/secret (Зашифровать файл)
ansible-vault edit host_vars/cdn-01.example.com/secret (Отредактировать зашифрованный файл)
ansible-vault view host_vars/cdn-01.example.com/secret (Показать зашифрованный файл)

## Docker
  docker inspect <image_name>  

### List Docker CLI commands
docker  
docker container --help  
docker exec -it awx_web bash  (запустить консоль контейнера)  

### Display Docker version and info
docker --version  
docker version  
docker info  

### List Docker images
docker image ls  

### List Docker containers (running, all, all in quiet mode)
docker container ls  
docker container ls -all  
docker container ls -eq  

### List Docker volumes
docker volume ls  


## Docker-Compose
```
services:
  db_postgres:
    image: postgres:11
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=test_db
  pgadmin:
    container_name: pgadmin
    image: dpage/pgadmin4
    environment:
      - PGADMIN_DEFAULT_EMAIL=pgadmin4@pgadmin.org
      - PGADMIN_DEFAULT_PASSWORD=admin
    ports:
      - "5050:80"
    depends_on:
      - db_postgres
  db_mariadb:
    image: mariadb
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
    restart: always
    volumes:
      - /data/nextcloud_db:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=#put some password here
      - MYSQL_PASSWORD=#put some other password here
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
  web_app_1:
    build: .
    command: bash -c "uvicorn main:app --host 0.0.0.0 --port 8000 --reload"
    volumes:
      - .:/code
    ports:
      - "8000:8000"
    depends_on:
      - db_postgres
  app:
    image: nextcloud
    depends_on:
      - db_mariadb
    restart: always
  nginx:
    depends_on:
      - app
```

## Minikube
### Install
```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```
minikube start  
minikube status  
minikube stop  
minikube delete  
minikube service list  
minikube kubectl -- get pods  
minikube dashboard  
minikube logs  
minikube version --components  
kubectl version ()  
