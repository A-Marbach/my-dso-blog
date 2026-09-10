# Linux Troubleshooting

This page covers a simple workflow for diagnosing common Linux server problems.

## Check System Status

Start with basic system information:

```bash
uptime
free -h
df -h
```

This helps identify high load, low memory or full disks.

## Check Processes

```bash
ps aux
top
```

Look for processes using unusual amounts of CPU or memory.

## Check Services

```bash
sudo systemctl status <service>
```

If the service has failed, inspect its logs:

```bash
sudo journalctl -u <service> -n 50
```

## Check Logs

System-wide errors can be reviewed with:

```bash
sudo journalctl -p err
```

Logs from the current boot:

```bash
sudo journalctl -b
```

## Check Network and Ports

```bash
ip addr
ip route
sudo ss -tulnp
```

If a service should be reachable, confirm that the expected port is listening.

## Typical Troubleshooting Flow

```text
System resources
      |
      v
Processes
      |
      v
Service status
      |
      v
Logs
      |
      v
Network / ports
```

The goal is to narrow down the problem systematically instead of making random changes.

## Skills Covered

- Resource checks
- Process analysis
- systemd troubleshooting
- Log analysis
- Network checks
- Structured troubleshooting