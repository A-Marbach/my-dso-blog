# Linux Server Administration

This article covers essential Linux server administration tasks, including user management, service control, log analysis, resource monitoring, firewall configuration and package management.

## User Management

```bash
# Create a new user
sudo adduser username

# Add user to a group (e.g. sudo)
sudo usermod -aG sudo username

# Switch to another user
su - username

# Delete a user
sudo deluser username

# Set or change a user password
sudo passwd username

# Lock a user account
sudo passwd -l username

# Unlock a user account
sudo passwd -u username
```

## Managing Services with systemd

Most modern Linux distributions use `systemd` to manage background services.

```bash
# Check the status of a service
sudo systemctl status nginx

# Start / stop a service
sudo systemctl start nginx
sudo systemctl stop nginx

# Restart a service
sudo systemctl restart nginx

# Enable a service to start on boot
sudo systemctl enable nginx

# Disable autostart
sudo systemctl disable nginx
```

## Viewing Logs

```bash
# View system logs
sudo journalctl

# Follow logs for a specific service
sudo journalctl -u nginx -f

# Show logs from the last hour
sudo journalctl --since "1 hour ago"

# Show logs from the current boot
sudo journalctl -b

# Show only errors
sudo journalctl -p err
```

## Monitoring Resources

```bash
# Show CPU and memory usage (interactive)
top
htop  # more user-friendly, may need to be installed

# Disk usage
df -h

# Memory usage
free -h

# Directory size
du -sh /var/log

# Running processes
ps aux

# Network connections
ss -tulnp
```

## Firewall (UFW)

UFW (Uncomplicated Firewall) is a commonly used firewall management tool on Ubuntu systems.

```bash
# Check firewall status
sudo ufw status

# Allow a port
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow ssh

# Enable the firewall
sudo ufw enable
```

## Package Management

```bash
# Update package list and upgrade installed packages
sudo apt update && sudo apt upgrade

# Install a package
sudo apt install <package>

# Remove a package
sudo apt remove <package>
```
