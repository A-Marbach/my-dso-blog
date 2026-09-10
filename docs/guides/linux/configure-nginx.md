# Configure NGINX as a Reverse Proxy

This guide shows how to configure NGINX as a reverse proxy for an application running on a local port.

## 1. Create the Site Configuration

Create a new NGINX configuration:

```bash
sudo nano /etc/nginx/sites-available/my-app
```

Example:

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

This forwards incoming HTTP traffic to the application running on port `3000`.

## 2. Enable the Site

Create a symbolic link:

```bash
sudo ln -s /etc/nginx/sites-available/my-app /etc/nginx/sites-enabled/
```

## 3. Test the Configuration

Before applying changes, validate the NGINX configuration:

```bash
sudo nginx -t
```

Only continue if the configuration test succeeds.

## 4. Reload NGINX

Apply the configuration without stopping the service:

```bash
sudo systemctl reload nginx
```

Check the service status:

```bash
sudo systemctl status nginx
```

## 5. Check Firewall Rules

Allow HTTP traffic if UFW is enabled:

```bash
sudo ufw allow 80
```

For HTTPS:

```bash
sudo ufw allow 443
```

Check the current firewall rules:

```bash
sudo ufw status
```

## 6. Check Logs

If the reverse proxy is not working, inspect the NGINX logs:

```bash
sudo tail -f /var/log/nginx/error.log
```

Access requests can be checked with:

```bash
sudo tail -f /var/log/nginx/access.log
```

Also verify that the application itself is running:

```bash
curl http://127.0.0.1:3000
```

The reverse proxy is working when NGINX accepts the external request and successfully forwards it to the local application.