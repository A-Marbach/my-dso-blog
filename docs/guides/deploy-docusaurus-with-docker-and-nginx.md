# Deploy Docusaurus with Docker and NGINX

This guide shows how to build a Docusaurus website with Docker and serve it through NGINX.

## Prerequisites

- Docker installed
- A working Docusaurus project

## Dockerfile

Create a `Dockerfile` in the project root:

```dockerfile
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

## Build the Image

```bash
docker build -t docusaurus-site .
```

## Run the Container

```bash
docker run -d \
  --name docusaurus-site \
  -p 3000:80 \
  docusaurus-site
```

The site is now available at:

```text
http://localhost:3000
```

On a remote server:

```text
http://<server-ip>:3000
```

## Verify the Deployment

```bash
docker ps
docker logs docusaurus-site
curl http://localhost:3000
```

## Troubleshooting

If the site is not reachable:

```bash
docker ps -a
docker logs docusaurus-site
docker port docusaurus-site
```

On a remote Linux server, also check the firewall:

```bash
sudo ufw status
```

## Conclusion

The Docusaurus site is built in a Node.js container and served as static files through NGINX using a multi-stage Docker build.