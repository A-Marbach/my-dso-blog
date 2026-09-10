# Troubleshoot a Failed systemd Service

This guide shows a simple workflow for troubleshooting a Linux service managed by `systemd`.

## 1. Check the Service Status

```bash
sudo systemctl status nginx
```

Look for:

- failed state
- exit codes
- recent error messages

## 2. Check the Logs

```bash
sudo journalctl -u nginx -n 50
```

To follow new log entries:

```bash
sudo journalctl -u nginx -f
```

## 3. Check the Configuration

For services with their own configuration test, validate it before restarting.

Example with NGINX:

```bash
sudo nginx -t
```

Fix configuration errors before continuing.

## 4. Check Ports

Verify whether the expected port is already in use:

```bash
sudo ss -tulnp
```

For example, check whether port `80` is listening:

```bash
sudo ss -tulnp | grep :80
```

## 5. Restart the Service

After fixing the problem:

```bash
sudo systemctl restart nginx
```

Then verify the status again:

```bash
sudo systemctl status nginx
```

## Quick Troubleshooting Flow

```text
systemctl status
        |
        v
journalctl -u
        |
        v
Check configuration
        |
        v
Check ports
        |
        v
Restart service
        |
        v
Verify status
```

This workflow helps narrow down common service failures in a structured way.