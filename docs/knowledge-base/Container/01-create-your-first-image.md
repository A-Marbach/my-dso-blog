# Create Your First Container Image

A Docker image is a reusable template that contains an application, its runtime and its dependencies.

This guide shows how to create a simple image with a `Dockerfile`, build it and run a container from it.

## Prerequisites

- Docker installed
- A simple application to containerize
- Basic understanding of Docker images and containers

## Step 1: Write a Dockerfile

Create a file named `Dockerfile` in the root of the project:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
```

### What This Dockerfile Does

`FROM` defines the base image:

```dockerfile
FROM node:20-alpine
```

`WORKDIR` sets the working directory inside the image:

```dockerfile
WORKDIR /app
```

Dependency files are copied before the application code:

```dockerfile
COPY package*.json ./
RUN npm ci
```

This allows Docker to reuse cached layers when dependencies have not changed.

The application files are then copied into the image:

```dockerfile
COPY . .
```

The application listens on port `3000`:

```dockerfile
EXPOSE 3000
```

Finally, `CMD` defines the process that starts when a container is launched:

```dockerfile
CMD ["node", "index.js"]
```

## Step 2: Build the Image

Run the build command from the directory containing the `Dockerfile`:

```bash
docker build -t my-app:latest .
```

The command contains two important parts:

- `-t my-app:latest` assigns a name and tag to the image
- `.` defines the current directory as the Docker build context

Check whether the image was created successfully:

```bash
docker images
```

## Step 3: Run the Container

Start a container from the image:

```bash
docker run -d \
  --name my-app \
  -p 3000:3000 \
  my-app:latest
```

This:

- runs the container in the background
- assigns the name `my-app`
- maps host port `3000` to container port `3000`

The application should then be reachable at:

```text
http://localhost:3000
```

## Step 4: Verify the Container

Check whether the container is running:

```bash
docker ps
```

View its logs:

```bash
docker logs my-app
```

Check the configured port mapping:

```bash
docker port my-app
```

## Step 5: Stop and Remove the Container

Stop the running container:

```bash
docker stop my-app
```

Remove the stopped container:

```bash
docker rm my-app
```

Remove the image if it is no longer required:

```bash
docker rmi my-app:latest
```

## Image Layers and Build Cache

Each major instruction in a `Dockerfile` creates an image layer.

Docker can reuse unchanged layers during later builds.

This is why dependency files are commonly copied before application source code:

```dockerfile
COPY package*.json ./
RUN npm ci

COPY . .
```

If the application code changes but the dependencies remain unchanged, Docker can reuse the dependency installation layer instead of running `npm ci` again.

## Multi-Stage Builds

Multi-stage builds allow separate build and runtime environments to be defined in the same `Dockerfile`.

Example:

```dockerfile
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY package*.json ./

RUN npm ci --omit=dev

CMD ["node", "dist/index.js"]
```

The first stage builds the application.

The second stage contains only the files and dependencies required to run it.

This can reduce image size and prevent unnecessary build tools and source files from being included in the final runtime image.

## Troubleshooting

If the image builds successfully but the container does not run as expected, check the container state and logs:

```bash
docker ps -a
docker logs my-app
```

If the application is not reachable, verify the published port:

```bash
docker port my-app
```

## Skills Covered

- Dockerfile structure
- Building Docker images
- Image tagging
- Docker build context
- Container startup
- Port mapping
- Image layers and build cache
- Multi-stage builds
- Container validation
- Basic container troubleshooting