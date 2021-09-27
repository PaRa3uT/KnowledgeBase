# Other
## AWX
awx-manage changepassword admin  
### Install (19.3.0) (https://github.com/ansible/awx/blob/devel/tools/docker-compose/README.md)  
Check latest version on https://github.com/ansible/awx/releases/latest  
git clone -b x.y.z https://github.com/ansible/awx.git  

Configuration  
  In the <inventory file>, set your pg_password, broadcast_websocket_secret, secret_key, and any other settings you need for your deployment  

Build the image  
  make docker-compose-build  

Run AWX  
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
