# Other
## AWX
awx-manage changepassword admin  

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
