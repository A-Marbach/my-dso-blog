# Secure an Ubuntu Server

This guide shows a basic hardening workflow for an Ubuntu server after initial installation.

## 1. Create an Administrative User

Create a new user:

```bash
sudo adduser adminuser
```

Add the user to the `sudo` group:

```bash
sudo usermod -aG sudo adminuser
```

## 2. Configure SSH Key Authentication

Copy your public SSH key to the server:

```bash
ssh-copy-id adminuser@<server-ip>
```

Test the connection before changing the SSH configuration:

```bash
ssh adminuser@<server-ip>
```

## 3. Disable Root SSH Login

Edit the SSH server configuration:

```bash
sudo nano /etc/ssh/sshd_config
```

Set:

```text
PermitRootLogin no
```

If SSH key authentication works correctly, password authentication can also be disabled:

```text
PasswordAuthentication no
```

Validate and restart SSH:

```bash
sudo sshd -t
sudo systemctl restart ssh
```

Keep the current SSH session open until the new login has been tested successfully.

## 4. Configure UFW

Allow SSH before enabling the firewall:

```bash
sudo ufw allow OpenSSH
sudo ufw enable
```

Check the rules:

```bash
sudo ufw status
```

For a web server:

```bash
sudo ufw allow 80
sudo ufw allow 443
```

## 5. Install Fail2ban

Install Fail2ban:

```bash
sudo apt update
sudo apt install fail2ban
```

Enable and start the service:

```bash
sudo systemctl enable --now fail2ban
```

Verify the service:

```bash
sudo systemctl status fail2ban
```

## 6. Install Updates

Update the package list and installed packages:

```bash
sudo apt update
sudo apt upgrade
```

## Verify the Server

Check the most important services and settings:

```bash
sudo systemctl status ssh
sudo systemctl status fail2ban
sudo ufw status
```

The server now has a separate administrative user, SSH key access, restricted root login, firewall rules, Fail2ban and current package updates.