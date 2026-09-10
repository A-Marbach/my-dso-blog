# Conduit AWS Infrastructure

AWS infrastructure for deploying, configuring and monitoring a containerized web application on an Ubuntu EC2 server.

This project demonstrates Linux server administration, Infrastructure as Code, configuration management, container deployment and AWS monitoring.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Infrastructure](#infrastructure)
- [Configuration Management](#configuration-management)
- [Deployment Workflow](#deployment-workflow)
- [Monitoring](#monitoring)
- [Security](#security)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Skills Demonstrated](#skills-demonstrated)

---

## Overview

This project demonstrates the deployment and operation of a containerized web application on AWS.

Terraform provisions the AWS infrastructure, including networking, IAM and an Ubuntu EC2 instance.

Ansible configures the Linux server, installs the required services and prepares the application environment.

The application is deployed with Docker Compose, exposed through NGINX over HTTPS and monitored with AWS CloudWatch.

Application container images are built and published by a separate repository using GitHub Actions and GitHub Container Registry.

---

## Features

- AWS infrastructure provisioning with Terraform
- Automated Ubuntu server configuration with Ansible
- Containerized application deployment with Docker Compose
- NGINX reverse proxy configuration
- HTTPS with Let's Encrypt
- GitHub Actions deployment integration
- AWS CloudWatch monitoring
- Infrastructure and server configuration managed as code

---

## Architecture

```text
 Application Repository
                   │
                   │ Push
                   ▼
          GitHub Actions CI/CD
                   │
     ┌─────────────┴─────────────┐
     │                           │
 Build Docker Images      Security Scans
     │                           │
     └─────────────┬─────────────┘
                   │
                   ▼
 GitHub Container Registry (GHCR)
                   │
                   ▼
        Infrastructure Repository
        (Terraform + Ansible)
                   │
                   ▼
             AWS EC2 Instance
                   │
        ┌──────────┼──────────┐
        │          │          │
 Docker Compose   NGINX   CloudWatch Agent
        │          │          │
        └────┬─────┘          │
             │                │
     HTTPS (Let's Encrypt)    │
             │                │
             ▼                ▼
          Internet      AWS CloudWatch
```

---

## Screenshots

### AWS Infrastructure
Terraform-provisioned AWS infrastructure.

![AWS Infrastructure](/img/aws-ec2-instance.png)

---

### Application CI/CD Pipeline
Docker image build, security scanning and publishing through the application repository.

![GitHub Actions Pipeline](/img/github-actions-pipeline.png)

---

### CloudWatch Dashboard
Infrastructure monitoring with CPU, memory, disk and network metrics.

![CloudWatch Dashboard](/img/cloudwatch-dashboard.png)

---

### HTTPS Deployment
Application secured with Let's Encrypt.

![HTTPS Deployment](/img/https-deployment.png)

---

### Running Containers

```bash
docker ps
```

![Running Docker Containers](/img/docker-containers.png)

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| Operating System | Ubuntu 24.04 LTS |
| Cloud | AWS EC2, VPC, IAM, CloudWatch |
| Infrastructure as Code | Terraform |
| Configuration Management | Ansible |
| Containers | Docker, Docker Compose |
| Reverse Proxy | NGINX |
| TLS | Let's Encrypt |
| Monitoring | AWS CloudWatch |
| Container Registry | GitHub Container Registry (GHCR) |
| CI/CD Integration | GitHub Actions |

---

## Infrastructure

Terraform provisions the AWS networking, access control and compute resources required for the application environment:

- VPC
- Public Subnet
- Internet Gateway
- Route Table
- Security Group
- EC2 Instance
- IAM Role
- IAM Instance Profile

---

## Configuration Management

Ansible configures the Ubuntu EC2 instance and prepares it for application operation:

- Docker
- Docker Compose
- NGINX
- Let's Encrypt
- CloudWatch Agent
- Application deployment
- Reverse proxy configuration

---

## Deployment Workflow

This repository provisions, configures and operates the AWS infrastructure for the application.

1. Terraform provisions the infrastructure.
2. Ansible configures the EC2 instance.
3. The application repository builds Docker images using GitHub Actions.
4. Security scans (Gitleaks, Hadolint and Trivy) are executed.
5. Images are published to GitHub Container Registry (GHCR).
6. The EC2 instance pulls the latest images.
7. Docker Compose updates the running containers.
8. NGINX serves the application over HTTPS.
9. AWS CloudWatch continuously monitors the infrastructure.

---

## Monitoring

AWS CloudWatch and the CloudWatch Agent are used to monitor the EC2 instance and operating system metrics.

Collected metrics include:

- CPU Utilization
- Memory Usage
- Disk Usage
- Network Traffic

---

## Security

Security measures implemented across the AWS infrastructure, Linux server and deployment workflow include:

- IAM Roles
- Security Groups
- SSH Key Authentication
- HTTPS with Let's Encrypt
- GitHub Secrets
- Secret Detection with Gitleaks
- Dockerfile Linting with Hadolint
- Container Vulnerability Scanning with Trivy

---


## Project Structure

```text
conduit-aws/
├── terraform/          # AWS infrastructure
├── ansible/            # Ubuntu server configuration
│   ├── inventory/
│   ├── roles/
│   └── playbook.yml
├── screenshots/        # Infrastructure and monitoring screenshots
└── README.md
```

---

## Deployment

Provision the infrastructure:

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

Configure the Ubuntu EC2 instance:

```bash
cd ansible
ansible-playbook playbook.yml
```

Application updates are deployed after new container images are built and published by the application repository.

---

## Skills Demonstrated

- Linux Server Administration
- Ubuntu Server Configuration
- AWS Infrastructure
- Terraform
- Ansible
- Docker and Docker Compose
- NGINX Reverse Proxy
- HTTPS and TLS
- AWS CloudWatch Monitoring
- IAM and Security Groups
- Infrastructure Troubleshooting
- CI/CD Integration
