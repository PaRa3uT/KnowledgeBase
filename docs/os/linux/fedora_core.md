# Fedora Core
1. Ignition config (https://docs.fedoraproject.org/en-US/fedora-coreos/producing-ign/)
    donwload Butane https://github.com/coreos/butane/releases

    gen pass hash: "openssl passwd -1 -salt yoursalt"
    'fed0r@'

    ```
    variant: fcos
    version: 1.4.0
    passwd:
      users:
        - name: core
          password_hash: "$1$yoursalt$zuE/ptA7ymZMM1b55n2NQ1"
          ssh_authorized_keys:
            - ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIE8KB9PeFpv5KYXLc98yyYqvQKntp1LK8ei38KZ1hzJk
    ```

с ssh-rsa ключами не получилось, получилось с ssh-ed25519

Replace the above line starting with ssh-ed25519 with the contents of your SSH public key file.
Save the file with the name example.bu.
butane --pretty --strict example.bu > example.ign
python3 -m http.server
sudo coreos-installer install /dev/sda --ignition-url http://<ip_addres_where_run_python_http_server>/example.ign --insecure-ignition