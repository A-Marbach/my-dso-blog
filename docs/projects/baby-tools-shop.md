# Baby Tools Shop

The Baby Tools Shop is a web application developed using Django. This repository contains all the necessary files to build and run the application in a Docker container. The main purpose of this repository is to provide an easy setup and deployment process for a basic e-commerce platform focusing on baby products.

## Table of Contents
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Configuration](#configuration)
- [Admin Panel](#Admin-Panel)
- [Security Notes](#security-notes)




## Quickstart

### Prerequisites
- Docker
- Git

### Installation and Launch
Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/A-Marbach/baby-tools-shop.git
cd baby-tools-shop
```
Copy the example environment file to create your local .env:
```bash
cp example.env .env
```
Build the Docker image:
```bash
docker build -t baby-tools-shop .
```

Run the application with Docker, setting it up to automatically manage restarts and data persistence:
```bash
docker run --restart unless-stopped -p 8025:8025 -v /path/to/your/data:/data baby-tools-shop
```

The application should now be accessible via `http://localhost:8025`.

## Usage

### Configuration
This application uses environment variables for configuration to enhance security and protect sensitive data. To set up the environment variables:

1. Copy the example environment file to create your local `.env`:

```bash
cp example.env .env
```

2. Generate a secure Django SECRET_KEY and add it to your .env:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"

```
3. Copy the generated key and replace the placeholder in your `.env`:

```env
DATABASE_URL=postgres://username:password@localhost:5432/mydatabase
SECRET_KEY=&lt;paste_your_generated_key_here&gt;
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```
> ⚠️ **Important:**  
> Do not commit your `.env` to Git.  
> Replace these values with secure ones to run the application safely.

### Running the Application
After setting up the environment variables, you can start the application as follows:

```bash
docker run --env-file .env --restart unless-stopped -p 8025:8025 -v /path/to/your/data:/data baby-tools-shop

```

The application is now running on `http://localhost:8025`.

### Admin Panel

After running the application, you can manage products and categories via the Django admin panel.

1. Create an Admin User

To create a superuser account (admin), run:

```bash
docker exec -it &lt;container_id&gt; python manage.py createsuperuser

```
Follow the prompts to set your username, email, and password.

**Screenshot of the superuser creation page:**

<img src="/dev-blog-template/img/create_superuser.png" alt="Django Admin: Create Superuser" width="600"/>


This account will allow you to log in to the admin panel at [http://localhost:8025/admin/](http://localhost:8025/admin/).

2. Add Categories

Log in to the admin panel with your superuser account.  
Click on **Categories** → **Add Category**, fill in Name and Slug, then click **Save**.

**Screenshot of Add Category page:**

<img src="/dev-blog-template/img/add_category.png" alt="Django Admin: Add Category" width="600"/>

3. Add Products

Click on **Products** → **Add Product**, fill in all required fields (Name, Description, Price, Category, Image), and then click **Save**.

**Screenshot of Add Product page:**

<img src="/dev-blog-template/img/add_products.png" alt="Django Admin: Add Product" width="600"/>

Repeat for all products you want to add.

### Useful Commands
To further manage your application's lifecycle, you can execute the following Docker commands:

- **Apply database migrations**: Execute the following command to apply migrations:
  ```bash
  docker exec -it &lt;container_id&gt; python manage.py migrate
  ```

- **Create an admin user**: To create an admin user, use:
  ```bash
  docker exec -it &lt;container_id&gt; python manage.py createsuperuser
  ```

## Security Notes
- Do not store SSH keys, passwords, tokens, or usernames in your code. Use environment variables instead.
- Avoid storing sensitive information such as IP addresses in the Git repository.
- Follow the naming conventions for environment variables and shell variables to prevent errors in code interpretation.

Feel free to contribute to this project by submitting issues or pull requests. For any questions, please submit an issue on GitHub.

This update integrates the Docker configurations fully into the quick start and usage sections, emphasizing best practices for security and data persistence.