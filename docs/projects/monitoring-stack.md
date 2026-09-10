# Monitoring Stack

Prometheus and Grafana monitoring stack for the BookStore API and Conduit Backend, deployed on a Hetzner VM.

This project demonstrates metrics collection, visualization and basic troubleshooting for containerized workloads.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Preview](#preview)
- [Quickstart](#quickstart)
- [Targets](#targets)
- [Grafana Dashboards](#grafana-dashboards)
- [Troubleshooting](#troubleshooting)
- [Skills Demonstrated](#skills-demonstrated)

---

## Overview

| Service    | Port | Description                    |
|------------|------|--------------------------------|
| Prometheus | 9090 | Metrics collection and storage |
| Grafana    | 3000 | Visualization and dashboards   |

Prometheus scrapes metrics every 15 seconds from the BookStore API and Conduit Backend and makes the collected metrics available to Grafana for visualization.


---

## Architecture

```text
BookStore API ─────┐
                   ├──> Prometheus ───> Grafana
Conduit Backend ───┘
```

---

## Preview

Example Grafana dashboard for the monitored services.

![Grafana Dashboard](/img/grafana-monitoring.png)

## Quickstart

1. Clone this repository:

```bash
git clone git@github.com:A-Marbach/monitoring-stack.git
cd monitoring-stack
```

2. Start the stack:

```bash
docker compose up -d
```

3. Open Grafana:

```text
http://<your-server-ip>:3000
```

Change the default Grafana admin password after first login.

---

## Targets

Prometheus targets are configured in `prometheus/prometheus.yml`:

| Job             | Target                  | Endpoint |
|-----------------|-------------------------|----------|
| bookstore-api   | `<your-server-ip>:8080` | /metrics |
| conduit-backend | `<your-server-ip>:5000` | /metrics |

Check target status:

```bash
curl http://<your-server-ip>:9090/api/v1/targets
```

---

## Grafana Dashboards

The Grafana dashboards visualize application process metrics collected by Prometheus.

### BookStore API

- Memory Usage (`process_resident_memory_bytes`)
- CPU Usage (`rate(process_cpu_seconds_total[1m])`)

### Conduit Backend

- Memory Usage (`process_resident_memory_bytes{job="conduit-backend"}`)
- CPU Usage (`rate(process_cpu_seconds_total{job="conduit-backend"}[1m])`)

---

## Troubleshooting

### Prometheus target is down

Check whether the application metrics endpoints are reachable:

```bash
curl http://<your-server-ip>:8080/metrics
curl http://<your-server-ip>:5000/metrics
```

Check the Prometheus target status:

```bash
curl http://<your-server-ip>:9090/api/v1/targets
```

### Grafana not reachable

Check running containers:

```bash
docker compose ps
```

Check firewall status:

```bash
sudo ufw status
```

### View logs

```bash
docker compose logs prometheus
docker compose logs grafana
```

---

## Skills Demonstrated

- Linux Server Operations
- Prometheus Monitoring
- Grafana Dashboards
- Metrics Collection
- Docker Compose
- Container Monitoring
- Network Troubleshooting
- Service Troubleshooting