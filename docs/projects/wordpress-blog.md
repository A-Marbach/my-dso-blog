# WordPress Docker Project

This repository contains a Docker Compose setup for running WordPress with a MySQL database.  
The project is designed to be easy to deploy, with persistent data storage and configurable environment variables.

## Table of Contents
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Extras](#extras)



### Key Features
- WordPress latest version in Docker
- MySQL 8 database
- Persistent volumes for WordPress files and database
- Easy configuration via environment variables
- Automatic container restart on failure


## Quickstart

### Prerequisites
- Docker
- Docker Compose

### Steps
1. Clone this repository:

```bash
git clone git@github.com:A-Marbach/wordpress.git
cd wordpress
```
2. Copy the example environment file:

```bash
cp .env.example .env
```

Open .env and change the values if you want custom credentials.

Note: Do not commit .env to the repository; it contains sensitive information.

3. Start the containers:
```bash
docker-compose up -d
```

4. Open Wordpress in your browser:
```
http://&lt;your_ip&gt;:8080
```

## Usage


1. Open your browser and navigate to http://&lt;your_ip&gt;:8080 to complete the WordPress installation.

* Create your WordPress admin user and password during the setup wizard.

### Environment Variables

You have modify .env or the environment section in docker-compose.yaml for a secure deployment:

| Variable | Description | Default |
|----------|-------------|---------|
| WORDPRESS_DB_NAME | Database name for WordPress | wordpress |
| WORDPRESS_DB_USER | WordPress DB user | user |
| WORDPRESS_DB_PASSWORD | Password for WordPress DB user | password |
| MYSQL_ROOT_PASSWORD | Root password for MySQL | rootpassword |

### Volumes

- **wordpress_data**: stores WordPress files (themes, plugins, uploads)  
- **db_data**: stores MySQL database files  

Volumes ensure data persists even after container restarts or recreation.

Restarting Containers

```bash
docker-compose restart
```

Stopping Containers

```bash
docker-compose down
```

### Extras

You can install additional WordPress plugins by adding them to wp-content/plugins/

Custom themes can be added in wp-content/themes/

For debugging, view logs:

```bash
docker-compose logs wordpress
docker-compose logs db
```