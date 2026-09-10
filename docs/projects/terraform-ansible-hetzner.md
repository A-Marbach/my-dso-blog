# Terraform-Ansible-Hetzner

This project automates the provisioning, configuration and basic hardening of Ubuntu 24.04 servers on Hetzner Cloud using Terraform and Ansible.
---

## Table of Contents

- [Quickstart](#quickstart)
- [Architecture](#architecture)
- [Terraform](#terraform)
- [Ansible](#ansible)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Skills Demonstrated](#skills-demonstrated)


---

## Quickstart

### Prerequisites

* Terraform
* Ansible
* Hetzner Cloud Account
* Hetzner API Token
* SSH Key Pair

### Steps

Clone this repository:

```bash
git clone git@github.com:A-Marbach/terraform-ansible-hetzner.git
cd terraform-ansible-hetzner
```

Configure your Terraform variables:

```bash
cp terraform.tfvars.example terraform.tfvars
```

Insert your Hetzner API token:

```hcl
hcloud_token = "your-token"
```

Initialize Terraform:

```bash
terraform init
```

Deploy infrastructure:

```bash
terraform apply
```

Generate Ansible inventory:

```bash
terraform output -raw ansible_inventory > ../ansible/inventories/hosts.ini
```

Run Ansible provisioning:

```bash
cd ../ansible

ansible-playbook -i inventories/hosts.ini playbook.yml
```

Connect to the server:

```bash
ssh artur@<server_ip>
```

---

## Architecture

The project provisions and configures the following infrastructure:

```text
Terraform
│
├── Hetzner Cloud Server
├── Hetzner Firewall
└── SSH Key
        │
        ▼
Ubuntu 24.04 Server
        │
        ▼
Ansible
├── Admin User
├── SSH Configuration
├── NGINX
├── Fail2Ban
└── System Updates
```

---

## Terraform

Terraform is responsible for infrastructure provisioning.

### Resources

* Ubuntu 24.04 Server
* Hetzner Firewall
* SSH Key Injection
* Outputs for Ansible Inventory

### Deployment

```bash
terraform apply
```

### Destroy Infrastructure

```bash
terraform destroy
```

---

## Ansible

Ansible is responsible for server configuration and software deployment.

### Automated Tasks

#### System Management

* Update package cache
* Upgrade installed packages

#### Web Server

* Install NGINX
* Enable NGINX service
* Start NGINX automatically

#### Security

* Install Fail2Ban
* Enable Fail2Ban service
* Configure SSH key authentication

#### User Management

* Create administrative user
* Deploy authorized SSH key
* Configure passwordless sudo access

---

## Usage

Verify server access:

```bash
ssh artur@<server_ip>
```

Become root:

```bash
sudo -i
```

Verify NGINX:

```bash
systemctl status nginx
```

Verify Fail2Ban:

```bash
systemctl status fail2ban

fail2ban-client status
```

Open the server in your browser:

```text
http://<server_ip>
```

---


## Project Structure

```text
terraform-ansible-hetzner/
│
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── terraform.tfvars.example
│
├── ansible/
│   ├── playbook.yml
│   ├── files/
│   │   └── artur.pub
│   └── inventories/
│       └── hosts.ini
│
└── README.md
```

---


## Troubleshooting

### SSH Host Key Changed

Remove old host key:

```bash
ssh-keygen -f ~/.ssh/known_hosts -R <server_ip>
```

Reconnect:

```bash
ssh root@<server_ip>
```

### Ansible Cannot Connect

Verify inventory:

```bash
cat inventories/hosts.ini
```

Verify SSH connectivity:

```bash
ssh artur@<server_ip>
```

### Check Service Status

```bash
systemctl status nginx
journalctl -u nginx

systemctl status fail2ban
journalctl -u fail2ban
fail2ban-client status
```

---

## Skills Demonstrated

- Linux Administration
- Infrastructure as Code
- Configuration Management
- SSH and User Management
- Firewall Configuration
- Service Management with systemd
- Troubleshooting with journalctl
- Infrastructure Automation



