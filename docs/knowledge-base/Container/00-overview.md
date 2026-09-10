---
title: Overview
---

# Containers and Docker

Containers provide isolated environments for running applications together with their dependencies and configuration.

Unlike virtual machines, containers share the host operating system kernel. This makes them lightweight, fast to start and well suited for application deployment and server operations.

## What is Docker?

Docker is a platform for building, running and managing containers.

The basic workflow is:

1. A `Dockerfile` defines how an image is built.
2. The image contains the application and its dependencies.
3. A container is started from that image.
4. Networking, volumes and environment variables connect the container to the surrounding system.

## Image vs. Container

A Docker image is a reusable template that contains the application, dependencies and configuration required to run it.

A container is a running instance of an image.

```text
Dockerfile
    |
    v
Docker Image
    |
    v
Container
```

The same image can be used to create multiple containers.

## Dockerfile

A `Dockerfile` defines how a Docker image is created.

Typical instructions include:

| Instruction | Purpose |
|---|---|
| `FROM` | Defines the base image |
| `WORKDIR` | Sets the working directory |
| `COPY` | Copies files into the image |
| `RUN` | Executes commands during the build |
| `EXPOSE` | Documents the application port |
| `CMD` | Defines the default process started by the container |

A practical example of building an image is covered in the **Create Your First Container Image** guide.

## Container Lifecycle

Containers can be started, stopped, restarted, replaced and removed.

Some common operational commands are:

```bash
docker ps
docker ps -a
docker restart <container>
docker logs <container>
docker inspect <container>
```

These commands are useful when checking container state, analyzing errors and inspecting configuration.

## Container Networking

Containers run in isolated network environments.

A containerized service can be exposed to the host by publishing a port.

Example:

```bash
docker run -p 8080:80 nginx
```

This creates the following mapping:

```text
Host port 8080 -> Container port 80
```

This allows traffic arriving on port `8080` of the host to reach port `80` inside the container.

Containers in the same Docker network can also communicate with each other without exposing every service publicly.

## Persistent Data

Containers are designed to be replaceable.

Data that must survive container replacement should therefore be stored outside the container filesystem.

Docker volumes provide persistent storage for this purpose.

Typical use cases include:

- databases
- uploaded files
- application state
- configuration data that must persist

A container can be recreated while the associated volume remains available.

## Docker Compose

Docker Compose is used to define and manage multiple related containers as one application stack.

A typical application may contain:

```text
Web Application
      |
      v
   Database
      |
      v
 Monitoring
```

The services, networks, volumes and environment variables are defined in a Compose file.

The stack can then be managed with commands such as:

```bash
docker compose up -d
docker compose ps
docker compose logs
docker compose down
```

This makes multi-container environments easier to operate and reproduce.

## Troubleshooting Containers

Container troubleshooting usually starts with checking the current state and then narrowing down the cause of the problem.

A typical process is:

1. Check whether the container is running.
2. Review the container logs.
3. Verify port mappings and network connectivity.
4. Inspect environment variables, volumes and configuration.
5. Check resource usage.
6. In Compose environments, identify which service is failing.

Useful commands include:

```bash
docker ps -a
docker logs <container>
docker port <container>
docker inspect <container>
docker stats
```

For Docker Compose environments:

```bash
docker compose ps
docker compose logs
```

## Skills Covered

- Container fundamentals
- Docker images and containers
- Dockerfile concepts
- Container lifecycle management
- Container networking
- Port mapping
- Persistent storage
- Docker Compose
- Container logs
- Container inspection
- Container troubleshooting