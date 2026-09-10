# Linux Networking

This page covers basic Linux networking concepts and commands used for connectivity checks and troubleshooting.

## Network Configuration

Show network interfaces and IP addresses:

```bash
ip addr
```

Show the routing table:

```bash
ip route
```

A typical system uses:

- IP address
- subnet
- default gateway
- DNS server

## Connectivity Tests

Check whether a remote host is reachable:

```bash
ping <host>
```

Test an HTTP service:

```bash
curl http://<host>
```

Check DNS resolution:

```bash
nslookup example.com
```

or:

```bash
dig example.com
```

## Ports and Listening Services

Show listening TCP and UDP ports:

```bash
sudo ss -tulnp
```

Check a specific port:

```bash
sudo ss -tulnp | grep :80
```

## Basic Troubleshooting Flow

```text
IP address
    |
    v
Route / Gateway
    |
    v
DNS
    |
    v
Port
    |
    v
Service
```

When a service is unreachable, check the network layer step by step instead of testing everything at once.

## Skills Covered

- IP addressing
- Routing
- DNS
- Connectivity testing
- Port checks
- Basic network troubleshooting