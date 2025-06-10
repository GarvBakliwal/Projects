from pathlib import Path

# Define README content again after state reset
readmes = {
    "README-Frontend.md": """
# 📦 Frontend - Personal Finance Dashboard

A responsive and secure frontend for a personal finance management application, built using **Next.js**, **Zustand**, and **TailwindCSS**. Integrates with a Node.js backend and supports OAuth and Plaid APIs.

## 🚀 Features

- Next.js App Router with SSR support
- Zustand for global state management
- Form validation using `react-hook-form` + `zod`
- OAuth integration (Google, GitHub)
- Responsive layout for desktop and mobile
- Toast notifications for UI feedback

## 🛠️ Tech Stack

- [Next.js 14+](https://nextjs.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [TailwindCSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://github.com/colinhacks/zod)

## 📁 Project Structure

/app
/components
/lib
/styles
/zustand

## 📦 Installation

```bash
git clone https://github.com/your-username/frontend.git
cd frontend
npm install
```

## 🧪 Development

```bash
npm run dev
```

## ⚙️ Environment Variables (`.env.local`)

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
NEXT_PUBLIC_PLAID_CLIENT_ID=your-client-id
NEXT_PUBLIC_PLAID_ENV=sandbox
```

> ✅ Never commit your `.env.local` to source control.

## 🏗️ Production Build

```bash
npm run build
npm start
```

## 📜 License

MIT
""",

    "README-Backend.md": """
# 🛠️ Backend - Personal Finance API

A REST API built with Express and MongoDB to support user authentication, Plaid banking integration, and transaction/account management.

## 🔐 Features

- JWT authentication
- Google OAuth via Passport.js
- MongoDB (Mongoose models)
- Plaid Integration (Accounts & Transactions)
- RESTful API for user, auth, and financial data
- Rate limiting and CORS configuration

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Passport.js (Google Strategy)
- Plaid SDK
- dotenv, CORS, Helmet, Morgan

## 📁 Folder Structure

/controllers
/models
/routes
/utils
/config

## 🧪 Development

```bash
npm install
npm run dev
```

## 🗂️ .env Configuration

```
PORT=8000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
PLAID_CLIENT_ID=your-client-id
PLAID_SECRET=your-secret
PLAID_ENV=sandbox
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-secret
CLIENT_URL=http://localhost:3000
```

## 📦 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/create` | Register a user |
| POST | `/api/login` | Login |
| GET | `/api/google` | Start Google Auth |
| GET | `/api/google/callback` | Google Auth Callback |
| GET | `/api/accounts` | Get Plaid accounts |
| GET | `/api/transactions` | Get Plaid transactions |

## 🔒 Security

- Helmet for HTTP headers
- CORS middleware
- Rate limiter (optional)

## 📜 License

MIT
""",

    "README-Deployment.md": """
# 🚀 Deployment - Full Stack Finance App

Production-ready deployment setup for the Finance Dashboard app using Docker, Jenkins CI/CD, NGINX reverse proxy, and AWS EC2.

## 🏗️ Architecture

Internet
   |
[ NGINX (Reverse Proxy) ]
   |             |            |
Frontend     Backend     MongoDB
   \\_________________________/
           Docker Network

## 🧱 Components

- **Frontend:** Next.js 14
- **Backend:** Node.js + Express + MongoDB
- **Reverse Proxy:** NGINX
- **Orchestration:** Docker Compose
- **CI/CD:** Jenkins
- **Host:** AWS EC2 Ubuntu Instance

## 🧪 Local Jenkins Setup (Optional)

- Install Jenkins on a local VM
- Create a pipeline job that:
  - Pulls GitHub code
  - Builds Docker images for all services
  - Pushes to Docker Hub (optional)
  - SSH into EC2 and deploy via `docker-compose up`

## 📦 Docker Setup

### Docker Compose (`docker-compose.yml`)

```yaml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    networks:
      - app-network

  backend:
    build: ./backend
    ports:
      - "8000:8000"
    networks:
      - app-network
    environment:
      - MONGO_URI=mongodb://mongo:27017/finance

  mongo:
    image: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
    ports:
      - "80:80"
    depends_on:
      - frontend
      - backend
    networks:
      - app-network

volumes:
  mongo-data:

networks:
  app-network:
```

### 🔧 nginx.conf (Example)

```nginx
http {
  upstream frontend {
    server frontend:3000;
  }

  upstream backend {
    server backend:8000;
  }

  server {
    listen 80;

    location / {
      proxy_pass http://frontend;
    }

    location /api {
      proxy_pass http://backend;
    }
  }
}
```

## ⚙️ Environment Files

Each service should use `.env` files for secrets:
- `.env.frontend`
- `.env.backend`
- Never commit `.env` to version control.

## ☁️ EC2 Deployment Steps

1. SSH into EC2
2. Clone project repo
3. Set up `.env` files
4. Run `docker-compose up -d --build`
5. Point your domain DNS to the EC2 public IP
6. Use NGINX to handle domain routing

## 🔐 Domain Configuration

- Use your domain registrar to point to EC2 IP
- Optional: Set up SSL with Let's Encrypt or Cloudflare

## ✅ Jenkins CI/CD Pipeline

- Trigger build on push to GitHub
- Build Docker images
- SSH into EC2 and run deployment script

## 📝 License

MIT

## 🤝 Author
Garv Bakliwal
- **Your Name**
- [LinkedIn](https://linkedin.com/in/your-profile)
"""
}

