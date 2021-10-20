# AWX

## Reset Ansible AWX Tower admin password
```
docker ps
docker exec -it awx_web bash
awx-manage changepassword admin
```

## Install with AWX-operator
### Install minikube
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

## Install with docker (19.3.0) (https://github.com/ansible/awx/blob/devel/tools/docker-compose/README.md)  
Check latest version on https://github.com/ansible/awx/releases/latest  
```
git clone -b x.y.z https://github.com/ansible/awx.git
```

### Configuration  
In the "inventory file", set your pg_password, broadcast_websocket_secret, secret_key, and any other settings you need for your deployment  

### Build the image  
make docker-compose-build  

### Run AWX  
Start the containers  
make docker-compose  
Clean and Build UI  
docker exec tools_awx_1 make clean-ui ui-devel  
Create an admin user  
docker exec -ti tools_awx_1 awx-manage createsuperuser  
Load Demo Data (Optionally)  
docker exec tools_awx_1 awx-manage create_preload_data  

## Migrating Data from Local Docker  
  If you are migrating data from a Local Docker installation (17.0.1 and prior) to AWX 18.0 or higher, you can migrate your data to the development environment via the migrate.yml playbook.  
  Note: This will also convert your postgresql bind-mount into a docker volume.  

## Upgrading the Development Environment  
  Upgrading AWX involves checking out the new source code and re-running the make target. Download a newer release from https://github.com/ansible/awx/releases and re-populate the inventory file with your customized variables.  
  After updating the inventory file with any custom values, run the make target from the root of your AWX clone.  
  $ make docker-compose  
