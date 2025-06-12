# 💰 Personal Finance Dashboard

## A Comprehensive Full-Stack Solution for Managing Your Finances

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Frontend Status](https://img.shields.io/badge/Frontend-Next.js%2014-blue)](./README-Frontend.md)
[![Backend Status](https://img.shields.io/badge/Backend-Node.js%20%26%20Express-green)](./README-Backend.md)
[![Deployment Status](https://img.shields.io/badge/Deployment-Docker%20%26%20Jenkins-orange)](./README-Deployment.md)

---

## 🌟 Overview

The **Personal Finance Dashboard** is a robust, full-stack application designed to empower users with effective personal finance management. It provides a secure, intuitive, and responsive interface for tracking financial accounts, monitoring transactions, and gaining actionable insights into spending habits. This entire system is backed by a powerful RESTful API and seamlessly integrates with leading financial data providers like Plaid.

This repository serves as the central hub for the entire application suite, which is modularly broken down into three core components:

* **Frontend**: The user-facing application, built with cutting-edge Next.js technology, delivering a dynamic and highly responsive user experience across various devices.
* **Backend**: The robust REST API, developed using Node.js and Express, responsible for all data operations, secure user authentication, and seamless integration with external financial APIs.
* **Deployment**: The comprehensive infrastructure and Continuous Integration/Continuous Deployment (CI/CD) setup, detailing how the entire application is containerized, orchestrated, and deployed for production using Docker, Jenkins, and AWS EC2.

---

## 🚀 Key Features & Highlights

* **Secure User Authentication**: Implement secure user registration, login, and streamlined OAuth integrations (Google, GitHub) for flexible and safe access.
* **Plaid Integration**: Connect securely to thousands of financial institutions, enabling real-time fetching of account balances and transaction data.
* **Comprehensive Financial Tracking**: Provides a unified view of all linked financial accounts and historical transactions, offering clarity on financial standing.
* **Intuitive User Interface**: A modern, responsive design built with TailwindCSS ensures a consistent and enjoyable user experience on both desktop and mobile devices.
* **Robust & Scalable API**: A well-documented, secure, and performant backend API supporting all client-side operations and external integrations.
* **Automated & Reliable Deployment**: Features a streamlined CI/CD pipeline, enabling efficient updates, consistent builds, and reliable hosting in a production environment.
* **Containerized Environment**: Utilizes Docker for consistent development, testing, and deployment environments across all services.

---

## 🛠️ Core Technologies Used

This project leverages a modern and powerful set of technologies across its various components to ensure scalability, maintainability, and a great user experience:

* **Frontend**:
    * [Next.js 14+](https://nextjs.org/): React framework for server-side rendering and static site generation.
    * [Zustand](https://github.com/pmndrs/zustand): A small, fast, and scalable bear-necessities state-management solution for React.
    * [TailwindCSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs.
    * [React Hook Form](https://react-hook-form.com/): Performant, flexible and extensible forms with easy-to-use validation.
    * [Zod](https://github.com/colinhacks/zod): TypeScript-first schema declaration and validation library.
* **Backend**:
    * [Node.js](https://nodejs.org/): JavaScript runtime for building scalable server-side applications.
    * [Express.js](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
    * [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/): NoSQL database and an ODM for MongoDB.
    * [Passport.js](http://www.passportjs.org/): Authentication middleware for Node.js.
    * [Plaid SDK](https://plaid.com/): Official SDK for integrating with Plaid's financial data API.
    * [JSON Web Tokens (JWT)](https://jwt.io/): For secure, stateless authentication.
* **DevOps & Deployment**:
    * [Docker](https://www.docker.com/): Platform for developing, shipping, and running applications in containers.
    * [Docker Compose](https://docs.docker.com/compose/): Tool for defining and running multi-container Docker applications.
    * [NGINX](https://nginx.org/): High-performance HTTP server and reverse proxy.
    * [Jenkins CI/CD](https://www.jenkins.io/): Automation server for building, testing, and deploying projects.
    * [AWS EC2](https://aws.amazon.com/ec2/): Scalable computing capacity in the Amazon Web Services (AWS) cloud.

---

## 📁 Project Structure

This repository follows a monorepo approach, organizing distinct components into their own dedicated directories. Each primary component has its own comprehensive README file for detailed instructions and information:

.
├── README.md                      # Your current location: The main project overview.
├── README-Frontend.md             # Detailed documentation for the Frontend application.
├── README-Backend.md              # Detailed documentation for the Backend API.
├── README-Deployment.md           # Detailed documentation for the Deployment and DevOps setup.
├── frontend/                      # Contains the source code for the Next.js frontend application.
│   ├── app/
│   ├── components/
│   └── ...
├── backend/                       # Contains the source code for the Node.js/Express API.
│   ├── controllers/
│   ├── models/
│   └── ...
├── nginx/                         # Contains NGINX configuration files for the reverse proxy.
│   └── nginx.conf
├── docker-compose.yml             # Docker Compose file for orchestrating all services locally.
└── .github/workflows/             # (Optional) Contains GitHub Actions CI/CD workflows if used.


---

## 🏃‍♀️ Getting Started

To get the full Personal Finance Dashboard application up and running on your local machine, or to understand the deployment process, please refer to the specific component READMEs for comprehensive instructions.

### Quick Local Setup with Docker Compose (Recommended)

For the quickest way to get all services (frontend, backend, MongoDB, NGINX) running locally:

1.  **Clone the Repository**:
    ```bash
    git clone [https://github.com/your-username/personal-finance-dashboard.git](https://github.com/your-username/personal-finance-dashboard.git)
    cd personal-finance-dashboard
    ```
2.  **Configure Environment Variables**:
    * Create a `.env.frontend` file in the root directory (or `frontend/.env.local` if Next.js specific). Refer to [`README-Frontend.md`](./README-Frontend.md) for required variables.
    * Create a `.env.backend` file in the root directory (or `backend/.env` if Node.js specific). Refer to [`README-Backend.md`](./README-Backend.md) for required variables.
    * **Crucially, ensure your Plaid, Google OAuth, and JWT secrets are correctly configured.**
3.  **Build and Run with Docker Compose**:
    ```bash
    # Ensure Docker Desktop is running
    docker-compose up -d --build
    ```
    This command will build the Docker images for your frontend and backend, set up a MongoDB container, configure NGINX as a reverse proxy, and start all services in detached mode.

Once all services are up, you can typically access the frontend application through your browser at `http://localhost`.

---

## 🌐 Live Demo

Experience the Personal Finance Dashboard live at:
[**https://your-domain.com**](https://your-domain.com) (Replace with your actual domain when deployed!)

---

## 🤝 Contributing

We welcome contributions from the community to make this project even better! If you'd like to contribute, please follow these general guidelines:

1.  **Fork the Repository**: Start by forking this repository to your GitHub account.
2.  **Create a New Branch**:
    ```bash
    git checkout -b feature/your-feature-name-or-bugfix
    ```
3.  **Make Your Changes**: Implement your features or bug fixes. Ensure your code adheres to the existing style and conventions.
4.  **Test Your Changes**: Run existing tests and add new ones if necessary to cover your changes.
5.  **Commit Your Changes**: Write clear and concise commit messages.
    ```bash
    git commit -m 'feat: Add new dashboard statistics view'
    ```
6.  **Push to the Branch**:
    ```bash
    git push origin feature/your-feature-name-or-bugfix
    ```
7.  **Open a Pull Request**: Submit a pull request to the `main` branch of this repository, describing your changes in detail.

Please refer to the individual component READMEs ([`README-Frontend.md`](./README-Frontend.md), [`README-Backend.md`](./README-Backend.md)) for more specific contribution guidelines related to their respective codebases.

---

## 📜 License

This project is open-sourced under the **MIT License**. For the full text of the [LICENSE](LICENSE) file in the root of this repository.

---

## 🧑‍💻 Author

**Garv Bakliwal**
* [LinkedIn Profile](https://linkedin.com/in/your-profile) (Replace with your actual LinkedIn URL)
* [GitHub Profile](https://github.com/your-username) (Replace with your actual GitHub username)
* [Your Portfolio/Website (Optional)](https://your-website.com)

---

---

# 📦 Frontend - Personal Finance Dashboard UI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=next.js)](https://nextjs.org/)
[![Zustand](https://img.shields.io/badge/State_Management-Zustand-blue)](https://github.com/pmndrs/zustand)
[![TailwindCSS](https://img.shields.io/badge/CSS_Framework-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A responsive, secure, and feature-rich frontend application for a personal finance management dashboard. This UI is built using **Next.js 14+**, **Zustand** for efficient state management, and styled with **TailwindCSS** for a modern and clean look. It seamlessly integrates with a Node.js backend API and supports advanced features like OAuth authentication and Plaid API data fetching.

---

## 🗒️ Table of Contents

* [🚀 Features](#-features)
* [🛠️ Tech Stack](#️-tech-stack)
* [📁 Project Structure](#-project-structure)
* [📦 Installation](#-installation)
* [⚙️ Environment Variables](#️-environment-variables-envlocal)
* [🧪 Development](#-development)
* [🏗️ Production Build](#️-production-build)
* [🔍 Usage Examples](#-usage-examples)
* [✅ Testing](#-testing)
* [🤝 Contributing](#-contributing)
* [📜 License](#-license)

---

## 🚀 Features

* **Next.js App Router**: Leverages the latest App Router for powerful routing, server components, and server-side rendering (SSR) capabilities, enhancing performance and SEO.
* **Zustand for Global State**: Efficient and lightweight state management for application-wide data, ensuring a smooth user experience.
* **Robust Form Validation**: Implements client-side form validation using `react-hook-form` paired with `zod` for schema-based validation, improving data integrity and user feedback.
* **OAuth Integration**: Supports seamless user authentication via Google and GitHub, providing convenient login options.
* **Fully Responsive Layout**: Designed with TailwindCSS to adapt gracefully across various screen sizes, from mobile phones to large desktop displays.
* **Toast Notifications**: Provides intuitive UI feedback for user actions (e.g., success messages, error alerts) using a toast notification library.
* **Dynamic Data Fetching**: Integrates with the backend API to securely fetch and display user accounts and transaction data from Plaid.

---

## 🛠️ Tech Stack

* [**Next.js 14+**](https://nextjs.org/): The React framework for production, enabling SSR, static site generation, and optimized routing.
* [**Zustand**](https://github.com/pmndrs/zustand): A fast, lightweight, and scalable state-management solution.
* [**TailwindCSS**](https://tailwindcss.com/): A utility-first CSS framework for highly customizable designs.
* [**React Hook Form**](https://react-hook-form.com/): A performant and flexible library for form management.
* [**Zod**](https://github.com/colinhacks/zod): TypeScript-first schema declaration and validation library, used for robust form data validation.
* [**Axios**](https://axios-http.com/): Promise-based HTTP client for making API requests.
* [**react-hot-toast**](https://react-hot-toast.com/): A simple and customizable toast notification library.

---

## 📁 Project Structure

The frontend application follows a standard Next.js project structure, with a focus on modularity and clear separation of concerns:
```
frontend/
├── public/                       # Static assets like images, fonts.
├── app/                          # Next.js App Router root.
│   ├── (auth)/                   # Grouped routes for authentication (login, register).
│   ├── (dashboard)/              # Grouped routes for authenticated dashboard sections.
│   ├── api/                      # API routes (Next.js serverless functions, e.g., for OAuth callbacks).
│   ├── layout.tsx                # Root layout component.
│   └── page.tsx                  # Root page component.
├── components/                   # Reusable UI components (e.g., buttons, forms, navbars).
│   ├── auth/
│   ├── common/
│   └── dashboard/
├── lib/                          # Utility functions, helpers, API service layer.
│   ├── api.ts                    # Axios instance and API call wrappers.
│   ├── auth.ts                   # Authentication related utilities.
│   └── plaid.ts                  # Plaid specific client-side logic.
├── styles/                       # Global CSS, TailwindCSS configuration.
│   └── globals.css
├── zustand/                      # Zustand store definitions.
│   ├── authStore.ts
│   └── financeStore.ts
├── types/                        # TypeScript type definitions.
├── .env.local.example            # Example environment variables file.
├── next.config.js                # Next.js configuration.
├── tailwind.config.ts            # TailwindCSS configuration.
└── tsconfig.json                 # TypeScript configuration.
```
---

## 📦 Installation

To set up the frontend application on your local machine:

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/your-username/personal-finance-dashboard.git](https://github.com/your-username/personal-finance-dashboard.git)
    cd personal-finance-dashboard/frontend
    ```
    * **Note**: If you cloned the monorepo, navigate into the `frontend` directory first.
2.  **Install dependencies**:
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

---

## ⚙️ Environment Variables (`.env.local`)

Create a `.env.local` file in the `frontend/` directory based on the `.env.local.example` provided. These variables are crucial for the application to function correctly.

REQUIRED
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000  # Or your deployed backend URL (e.g., https://api.your-domain.com)

PLAID INTEGRATION (Consult Plaid documentation for values)
NEXT_PUBLIC_PLAID_CLIENT_ID=your_plaid_client_id_here
NEXT_PUBLIC_PLAID_ENV=sandbox # Options: sandbox, development, production
NEXT_PUBLIC_PLAID_PRODUCTS=transactions,auth # Comma-separated list of Plaid products (e.g., transactions,auth,identity)
NEXT_PUBLIC_PLAID_COUNTRY_CODES=US # Comma-separated list of country codes (e.g., US,CA)

OAUTH CALLBACK URLs (if Next.js handles OAuth directly)
These should match the redirect URIs configured in your Google/GitHub OAuth apps.
If your backend handles OAuth completely, these might not be needed on frontend.
NEXT_PUBLIC_GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/callback/google
NEXT_PUBLIC_GITHUB_CALLBACK_URL=http://localhost:3000/api/auth/callback/github
> ✅ **Security Note**: Never commit your `.env.local` file to version control. It contains sensitive keys and configurations specific to your environment. `.gitignore` should already be configured to exclude it.

---

## 🧪 Development

To run the frontend application in development mode with hot-reloading:

```bash
npm run dev
# or yarn dev
# or pnpm dev
```
The application will typically be accessible at http://localhost:3000.

🏗️ Production Build
To build the application for production and serve it:

Build the project:
```Bash
npm run build
# or yarn build
# or pnpm build
```
This command compiles the Next.js application into optimized static assets and server-side code.
Start the production server:
```Bash
npm start
# or yarn start
# or pnpm start
```
This will serve the production build. Ensure your NEXT_PUBLIC_BACKEND_URL is set to your deployed backend URL.
🔍 Usage Examples
Upon running the application, you'll be presented with the authentication screen.

Register/Login: Use the built-in forms or opt for Google/GitHub OAuth.
Connect Bank Accounts: After logging in, you'll be prompted to connect your financial institutions via Plaid Link. Follow the on-screen instructions.
View Dashboard: Once accounts are linked, navigate to the dashboard to see an overview of your accounts and transactions.
Explore Transactions: Dive into detailed transaction lists, often with filtering or sorting options.
✅ Testing
(If you have tests, describe how to run them here. E.g., Jest, React Testing Library)

To run the unit and integration tests:

```Bash
npm test
# or yarn test
```
🤝 Contributing
We welcome contributions to the Personal Finance Dashboard Frontend!

Setup: Follow the Installation and Development steps.
Branching: Create a new branch for your feature or bug fix: git checkout -b feature/add-new-chart.
Code Style: Ensure your code adheres to the project's ESLint and Prettier configurations.
Pull Requests: Submit a clear and detailed pull request, explaining the changes and their purpose. Include screenshots if applicable.
📜 License
This frontend application is licensed under the MIT License. For more information, see the LICENSE file in the root of the repository.

---

# 🛠️ Backend - Personal Finance API





A robust, secure, and scalable RESTful API built with Node.js and Express.js to serve as the backbone for the Personal Finance Dashboard. This API handles user authentication, integrates with the Plaid API for banking data, and manages all financial transactions and account information. It's designed with security best practices and modularity in mind.

## 🗒️ Table of Contents
* [🔐 Features
* [🧰 Tech Stack
* [📁 Folder Structure
* [📦 Installation
* [🗂️ Environment Configuration (.env)
* [🧪 Development
* [🚀 API Endpoints
* [🔒 Security Measures
* [✅ Testing
* [🤝 Contributing
* [📜 License
* [🔐 Features
---
JWT Authentication: Secure user authentication using JSON Web Tokens for stateless and scalable sessions.
OAuth Integration: Seamlessly authenticate users via Google OAuth using Passport.js.
MongoDB with Mongoose: Persistent data storage using a NoSQL database (MongoDB) with Mongoose ODM for structured data management.
Plaid API Integration: Connects to the Plaid API to securely fetch and manage user financial accounts and transaction data.
RESTful API Design: Follows REST principles for clear, predictable, and scalable API endpoints.
Security Best Practices: Includes rate limiting, CORS configuration, and Helmet for setting secure HTTP headers.
Comprehensive Error Handling: Robust error handling mechanisms to provide meaningful feedback.
---
🧰 Tech Stack
Node.js: JavaScript runtime for building the server-side application.
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
MongoDB: NoSQL database for storing user, authentication, and financial data.
Mongoose: MongoDB object data modeling (ODM) for Node.js.
Passport.js: Authentication middleware for Node.js, used specifically for Google OAuth strategy.
Plaid Node.js SDK: Official SDK for interacting with the Plaid API.
bcryptjs: For secure password hashing.
jsonwebtoken: For generating and verifying JSON Web Tokens.
dotenv: To load environment variables from a .env file.
cors: Node.js middleware for enabling Cross-Origin Resource Sharing.
helmet: Helps secure Express apps by setting various HTTP headers.
morgan: HTTP request logger middleware for Node.js.
express-rate-limit: Basic rate limiting middleware for Express.
---
##📁 Folder Structure
The backend application is structured for clarity, maintainability, and scalability:
```
backend/
├── config/                       # Configuration files (e.g., database connection, Passport setup).
│   ├── db.ts                     # MongoDB connection setup.
│   └── passport.ts               # Passport.js configuration for OAuth.
├── controllers/                  # Logic for handling API requests and responses.
│   ├── authController.ts
│   ├── accountController.ts
│   └── transactionController.ts
├── middleware/                   # Express middleware (e.g., authentication, error handling).
│   └── authMiddleware.ts
├── models/                       # Mongoose schemas and models for database entities.
│   ├── User.ts
│   ├── Account.ts
│   └── Transaction.ts
├── routes/                       # Defines API endpoints and links them to controllers.
│   ├── authRoutes.ts
│   ├── accountRoutes.ts
│   └── transactionRoutes.ts
├── utils/                        # Utility functions (e.g., JWT generation, Plaid helpers).
│   ├── generateToken.ts
│   └── plaidClient.ts
├── app.ts                        # Main Express application setup.
├── server.ts                     # Entry point for the Node.js server.
├── .env.example                  # Example environment variables file.
└── package.json                  # Project dependencies and scripts.
```
---
##📦 Installation
To set up the backend API on your local machine:

Clone the repository:
```Bash
git clone [https://github.com/your-username/personal-finance-dashboard.git](https://github.com/your-username/personal-finance-dashboard.git)
cd personal-finance-dashboard/backend
Note: If you cloned the monorepo, navigate into the backend directory first.
Install dependencies:
Bash
npm install
# or yarn install
# or pnpm install
```
---

##🗂️ Environment Configuration (.env)
Create a .env file in the backend/ directory based on the .env.example provided. These variables are essential for the API to connect to the database, secure tokens, and interact with external services.

PORT=8000 # The port your Express app will listen on

# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/personal_finance_db # Your MongoDB connection string

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here # A long, random string for signing JWTs

# Plaid API Credentials (Get these from your Plaid Dashboard)
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret
PLAID_ENV=sandbox # Options: sandbox, development, production

# Google OAuth Credentials (Get these from Google Cloud Console)
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback # Must match redirect URI in Google Console

# Frontend Client URL (for CORS and OAuth redirects)
CLIENT_URL=http://localhost:3000 # Your frontend application's URL (e.g., http://localhost:3000 or [https://your-domain.com](https://your-domain.com))

# Optional: GitHub OAuth Credentials
# GITHUB_CLIENT_ID=your_github_client_id
# GITHUB_CLIENT_SECRET=your_github_client_secret
# GITHUB_CALLBACK_URL=http://localhost:8000/api/auth/github/callback

✅ Security Note: Never commit your .env file to version control. It contains sensitive API keys and secrets. .gitignore should already be configured to exclude it.
---
##🧪 Development
To run the backend API in development mode with hot-reloading (using nodemon):

```Bash
npm run dev
# or yarn dev
# or pnpm dev
```
The API server will typically start on http://localhost:8000 (or the PORT specified in your .env).

🚀 API Endpoints
The API provides the following core endpoints:
---
## User & Authentication

Method	Route	Description	Request Body (Example)	Success Response (Example)
POST	/api/auth/register	Register a new user	{ "username": "user", "email": "user@example.com", "password": "password123" }	{ "message": "User registered successfully", "token": "..." }
POST	/api/auth/login	Authenticate and login a user	{ "email": "user@example.com", "password": "password123" }	{ "message": "Logged in successfully", "token": "..." }
GET	/api/auth/google	Initiate Google OAuth login flow	N/A	Redirects to Google authentication page
GET	/api/auth/google/callback	Google OAuth callback handler	N/A	Redirects to frontend with token/status
GET	/api/auth/me	Get authenticated user's profile (requires JWT)	N/A	{ "id": "...", "email": "...", "username": "..." }
Plaid & Financial Data

These endpoints typically require a valid JWT in the Authorization: Bearer <token> header.

Method	Route	Description	Request Body (Example)	Success Response (Example)
POST	/api/plaid/create_link_token	Create a Plaid Link token for client-side use	N/A	{ "link_token": "link-sandbox-..." }
POST	/api/plaid/set_access_token	Exchange Plaid public token for access token	{ "public_token": "public-sandbox-..." }	{ "message": "Plaid account linked successfully" }
GET	/api/accounts	Get all linked Plaid accounts for user	N/A	[ { "account_id": "...", "name": "...", "balances": {} }, ... ]
GET	/api/transactions	Get all transactions for linked accounts	?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD (optional query params)	[ { "transaction_id": "...", "name": "...", "amount": "..." }, ... ]
POST	/api/plaid/webhook	Plaid webhook listener (for async updates)	(Plaid webhook payload)	{ "status": "ok" }
🔒 Security Measures
Helmet: Sets various HTTP headers to help protect your app from well-known web vulnerabilities.
CORS: Configured to allow requests only from your specified frontend CLIENT_URL.
Rate Limiting: express-rate-limit is used to prevent brute-force attacks and abuse on certain routes (e.g., login, register).
JWT: Tokens are used for secure and stateless authentication, expiring after a set duration.
Password Hashing: User passwords are securely hashed using bcryptjs before being stored in the database.
Environment Variables: Sensitive credentials are kept out of source control using .env files.
✅ Testing
(If you have tests, describe how to run them here. E.g., Mocha, Chai, Jest)

To run the backend unit and integration tests:

```Bash
npm test
# or yarn test
```
---

##🤝 Contributing
We welcome contributions to the Personal Finance Dashboard Backend!

Setup: Follow the Installation and Development steps.
Branching: Create a new branch for your feature or bug fix: git checkout -b feature/add-new-api-endpoint.
Code Style: Ensure your code adheres to the project's ESLint and Prettier configurations.
API Documentation: If adding new endpoints, update the API Endpoints section in this README.
Pull Requests: Submit a clear and detailed pull request, explaining the changes and their purpose.
---
##📜 License
This backend API is licensed under the MIT License. For more information, see the LICENSE file in the root of the repository.

---
#🚀 Deployment - Full Stack Finance App Infrastructure





This document details the production-ready deployment setup for the Personal Finance Dashboard application. It outlines the architecture, components, and steps involved in containerizing, orchestrating, and deploying the full-stack application using Docker, Jenkins CI/CD, NGINX as a reverse proxy, and AWS EC2 as the hosting environment. This setup ensures high availability, scalability, and automated deployments.

##🗒️ Table of Contents
* [🏗️ Architecture Overview
* [🧱 Key Components
* [📦 Docker Setup
* [Docker Compose (docker-compose.yml)
* [NGINX Configuration (nginx.conf)
* [⚙️ Environment Files for Deployment
* [☁️ AWS EC2 Deployment Steps
Prerequisites
EC2 Instance Setup
Deployment Procedure
🔐 Domain & SSL Configuration
✅ Jenkins CI/CD Pipeline
Local Jenkins Setup (Optional)
Jenkins Pipeline Workflow
🤝 Contributing
📜 License
🏗️ Architecture Overview
The application is deployed using a containerized microservices approach orchestrated by Docker Compose, with NGINX acting as a reverse proxy to manage incoming traffic and direct it to the appropriate services. Jenkins automates the build and deployment process to an AWS EC2 instance.
```
+------------------+     +------------------------+
|      Internet    | --> |   Domain (your-domain.com) |
+------------------+     +------------------------+
         |                       |
         | (HTTP/S Traffic)      |
         V                       V
+-------------------------------------------------+
|              AWS EC2 Instance (Ubuntu)          |
|  +-------------------------------------------+  |
|  |           NGINX (Reverse Proxy)           |  |
|  | Listen 80/443, Routes Traffic to:         |  |
|  +-------------------------------------------+  |
|    |           |           |                  |
|    |           |           |                  |
|    V           V           V                  |
|  +-------------------------------------------+  |
|  |           Docker Network                  |  |
|  |  +-------------------+  +-------------------+  |
|  |  |     Frontend      |  |     Backend       |  |
|  |  | (Next.js - 3000)  |  | (Node.js - 8000)  |  |
|  |  +-------------------+  +-------------------+  |
|  |           | (MongoDB Connection)             |  |
|  |           V                                  |  |
|  |  +-------------------+                      |  |
|  |  |     MongoDB       |                      |  |
|  |  | (Data Persistence)|                      |  |
|  |  +-------------------+                      |  |
|  +-------------------------------------------+  |
+-------------------------------------------------+
```
🧱 Key Components
Frontend: The Next.js 14+ application, served as a Docker container.
Backend: The Node.js + Express + MongoDB API, served as a Docker container.
MongoDB: A dedicated Docker container for the database, with persistent volume mapping for data integrity.
NGINX: Acts as a reverse proxy to:
Route traffic for the frontend (/) and backend (/api).
Handle SSL termination (recommended).
Serve static assets if needed.
Docker Compose: Used to define and run the multi-container Docker application with a single command.
Jenkins: An automation server that orchestrates the CI/CD pipeline, building Docker images, pushing them (optionally) to a registry, and deploying them to the EC2 instance via SSH.
AWS EC2 Ubuntu Instance: The cloud virtual machine hosting all Docker containers.
📦 Docker Setup
The core of our deployment strategy relies on Docker for containerization and Docker Compose for orchestrating the multi-service application.

Docker Compose (docker-compose.yml)

This file defines the services, networks, and volumes for our application. It's placed in the root of the monorepo.

YAML
version: '3.8' # Use a recent Docker Compose file format

services:
  # Frontend Service
  frontend:
    build:
      context: ./frontend # Path to your frontend Dockerfile
      dockerfile: Dockerfile
    ports:
      - "3000:3000" # Expose frontend port for NGINX to access within the Docker network
    environment:
      # Inject frontend specific environment variables from an .env file
      # This file should be created manually on the server (e.g., .env.frontend)
      - NEXT_PUBLIC_BACKEND_URL=<span class="math-inline">\{NEXT\_PUBLIC\_BACKEND\_URL\}
\- NEXT\_PUBLIC\_PLAID\_CLIENT\_ID\=</span>{NEXT_PUBLIC_PLAID_CLIENT_ID}
      - NEXT_PUBLIC_PLAID_ENV=<span class="math-inline">\{NEXT\_PUBLIC\_PLAID\_ENV\}
\- NEXT\_PUBLIC\_PLAID\_PRODUCTS\=</span>{NEXT_PUBLIC_PLAID_PRODUCTS}
      - NEXT_PUBLIC_PLAID_COUNTRY_CODES=<span class="math-inline">\{NEXT\_PUBLIC\_PLAID\_COUNTRY\_CODES\}
\# Add other frontend env vars as needed
networks\:
\- app\-network
restart\: always \# Ensure the service restarts if it crashes
\# Backend S<26\>ervice
backend\:
build\:
context\: \./backend \# Path to your backend Dockerfile
dockerfile\: Dockerfile
ports\:
\- "8000\:8000" \# Expose backend</26\> port for NGINX to access
environment\:
\# Inject backend specific environment variables from an \.env file
\# This file should be created manually on the server \(e\.g\., \.env\.backend\)
\- PORT\=</span>{PORT}
      - MONGO_URI=<span class="math-inline">\{MONGO\_URI\}
\- JWT\_SECRET\=</span>{JWT_SECRET}
      - PLAID_CLIENT_ID=<span class="math-inline">\{PLAID\_CLIENT\_ID\}
\- PLAID\_SECRET\=</span>{PLAID_SECRET}
      - PLAID_ENV=<span class="math-inline">\{PLAID\_ENV\}
\- GOOGLE\_CLIENT\_ID\=</span>{GOOGLE_CLIENT_ID}
      - GOOGLE_CLIENT_SECRET=<span class="math-inline">\{GOOGLE\_CLIENT\_SECRET\}
\- GOOGLE\_CALLBACK\_URL\=</span>{GOOGLE_CALLBACK_URL}
      - CLIENT_URL=${CLIENT_URL} # Used for CORS and OAuth redirects
      # Add other backend env vars as needed
    networks:
      - app-network
    depends_on:
      - mongo # Ensure MongoDB is up before the backend starts
    restart: always

  # MongoDB Service
  mongo:
    image: mongo:latest # Use the official MongoDB Docker image
    ports:
      - "27017:27017" # Optional: Expose for local debugging, but not necessary for production
    volumes:
      - mongo-data:/data/db # Persist MongoDB data outside the container
    networks:
      - app-network
    restart: always

  # NGINX Reverse Proxy Service
  nginx:
    image: nginx:stable-alpine # Use a lightweight NGINX image
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro # Mount the NGINX configuration
      # Optional: Mount SSL certificates if managing them directly
      # - /etc/letsencrypt/live/[your-domain.com/fullchain.pem:/etc/nginx/ssl/fullchain.pem:ro](https://your-domain.com/fullchain.pem:/etc/nginx/ssl/fullchain.pem:ro)
      # - /etc/letsencrypt/live/[your-domain.com/privkey.pem:/etc/nginx/ssl/privkey.pem:ro](https://your-domain.com/privkey.pem:/etc/nginx/ssl/privkey.pem:ro)
    ports:
      - "80:80" # Expose HTTP port for incoming traffic
      # - "443:443" # Expose HTTPS port for incoming traffic (recommended for production)
    depends_on:
      - frontend # Ensure frontend is up before NGINX tries to route to it
      - backend  # Ensure backend is up before NGINX tries to route to it
    networks:
      - app-network
    restart: always

# Define named volumes for data persistence
volumes:
  mongo-data: # This will create a Docker volume to store MongoDB data persistently

# Define a custom bridge network for internal communication
networks:
  app-network:
    driver: bridge # Default Docker bridge network
NGINX Configuration (nginx/nginx.conf)

This configuration routes traffic based on the path. /api requests go to the backend, and all other requests go to the frontend.

Nginx
# nginx/nginx.conf
events {
    worker_connections 1024; # Max number of simultaneous connections that can be opened by a worker process.
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    # Define upstream servers for frontend and backend services
    upstream frontend {
        server frontend:3000; # 'frontend' is the service name in docker-compose.yml
    }

    upstream backend {
        server backend:8000; # 'backend' is the service name in docker-compose.yml
    }

    # Main server block for handling incoming HTTP requests
    server {
        listen 80; # Listen on HTTP port 80
        server_name your-domain.com [www.your-domain.com](https://www.your-domain.com); # Replace with your actual domain

        # Optional: Redirect HTTP to HTTPS (Highly recommended for production)
        # return 301 https://$host$request_uri;

        # Route traffic to the frontend for all root and non-/api paths
        location / {
            proxy_pass http://frontend; # Forward requests to the frontend service
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_redirect off; # Prevent NGINX from modifying response Location header
        }

        # Route traffic to the backend for /api paths
        location /api {
            proxy_pass http://backend; # Forward requests to the backend service
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_redirect off;
        }

        # Optional: Add SSL configuration for HTTPS if you're terminating SSL at NGINX
        # listen 443 ssl;
        # ssl_certificate /etc/letsencrypt/live/[your-domain.com/fullchain.pem](https://your-domain.com/fullchain.pem); # Path to your SSL certificate
        # ssl_certificate_key /etc/letsencrypt/live/[your-domain.com/privkey.pem](https://your-domain.com/privkey.pem); # Path to your SSL private key
        # include /etc/nginx/options-ssl-nginx.conf; # Recommended SSL options (e.g., from Certbot)
        # ssl_dhparam /etc/nginx/ssl/dhparam.pem; # DH parameters for stronger security
    }
}
⚙️ Environment Files for Deployment
For production deployments, it's crucial to manage environment variables securely. Instead of baking them into Docker images, you should load them from .env files on your EC2 instance.

Create the following files directly on your EC2 instance in the root directory where your docker-compose.yml resides:

.env.frontend: Contains all NEXT_PUBLIC_ variables for the frontend.
.env.backend: Contains all backend variables (PORT, MONGO_URI, JWT_SECRET, Plaid/Google credentials, etc.).
Example .env.backend (on EC2):

PORT=8000
MONGO_URI=mongodb://mongo:27017/personal_finance_db # 'mongo' refers to the service name in docker-compose
JWT_SECRET=your_production_jwt_secret_!!!!!!!_VERY_LONG_AND_RANDOM
PLAID_CLIENT_ID=your_production_plaid_client_id
PLAID_SECRET=your_production_plaid_secret
PLAID_ENV=production # Crucial for production environment
GOOGLE_CLIENT_ID=your_production_google_client_id
GOOGLE_CLIENT_SECRET=your_production_google_secret
GOOGLE_CALLBACK_URL=[https://your-domain.com/api/auth/google/callback](https://your-domain.com/api/auth/google/callback) # Use your domain!
CLIENT_URL=[https://your-domain.com](https://your-domain.com) # Use your domain!
Example .env.frontend (on EC2):

NEXT_PUBLIC_BACKEND_URL=[https://your-domain.com/api](https://your-domain.com/api) # Use your domain!
NEXT_PUBLIC_PLAID_CLIENT_ID=your_production_plaid_client_id
NEXT_PUBLIC_PLAID_ENV=production
NEXT_PUBLIC_PLAID_PRODUCTS=transactions,auth
NEXT_PUBLIC_PLAID_COUNTRY_CODES=US
⚠️ DO NOT COMMIT THESE FILES TO GIT! Ensure they are listed in your .gitignore. Manage them securely on your server.

☁️ AWS EC2 Deployment Steps
Prerequisites

AWS Account: An active AWS account.
EC2 Key Pair: An SSH key pair for accessing your EC2 instance.
Domain Name: A registered domain name (e.g., your-domain.com).
Route 53/DNS Management: Access to manage your domain's DNS records (e.g., AWS Route 53, Cloudflare).
Plaid/Google Credentials: Production-ready API keys for Plaid and Google OAuth.
SSH Client: (e.g., OpenSSH, PuTTY).
EC2 Instance Setup

Launch EC2 Instance:
Choose an Ubuntu Server AMI (e.g., Ubuntu Server 22.04 LTS).
Select an instance type (e.g., t2.medium or t3.medium for a full-stack app, adjust based on traffic).
Configure Security Group:
Allow SSH (Port 22) from your IP address.
Allow HTTP (Port 80) from 0.0.0.0/0.
Allow HTTPS (Port 443) from 0.0.0.0/0 (Crucial for production).
Attach your SSH key pair.
Launch the instance.
Connect to EC2:
Code snippet
ssh -i /path/to/your-key.pem ubuntu@YOUR_EC2_PUBLIC_IP
Update System & Install Docker:
Bash
sudo apt update
sudo apt upgrade -y
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL [https://download.docker.com/linux/ubuntu/gpg](https://download.docker.com/linux/ubuntu/gpg) | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] [https://download.docker.com/linux/ubuntu](https://download.docker.com/linux/ubuntu) $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io -y
sudo usermod -aG docker ubuntu # Add current user to docker group to run docker commands without sudo
newgrp docker # Activate new group (you might need to re-login SSH for this to fully take effect)
Install Docker Compose:
Bash
sudo apt install docker-compose -y # Or install via curl for latest version:
# sudo curl -L "[https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname](https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname) -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# sudo chmod +x /usr/local/bin/docker-compose
Deployment Procedure (Manual for first time, then Jenkins)

Clone the Repository:
Bash
git clone [https://github.com/your-username/personal-finance-dashboard.git](https://github.com/your-username/personal-finance-dashboard.git)
cd personal-finance-dashboard
Create .env files: As described in Environment Files for Deployment, create .env.frontend and .env.backend in the root of the cloned directory.
Run Docker Compose:
Bash
docker-compose up -d --build
This command will build your images (if not already built/pulled from Docker Hub), and start all services.
Verify Services:
Bash
docker ps
docker-compose logs -f
🔐 Domain & SSL Configuration
 For a production application, using a custom domain with SSL (HTTPS) is mandatory for security and user trust.

DNS Configuration (Route 53 or your DNS provider):
Create an A record for your domain (your-domain.com) and a CNAME or A record for www.your-domain.com (if desired).
Point these records to the Public IP of your AWS EC2 instance.
Allow time for DNS propagation (can take a few minutes to hours).
SSL/TLS Certificate (Let's Encrypt with Certbot Recommended):
Once your domain points to your EC2 instance, install Certbot:
Bash
sudo snap install core
sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
Stop any existing web server temporarily if it's binding to port 80:
Bash
sudo docker-compose stop nginx # Stop NGINX service to free port 80
Obtain certificate using NGINX authenticator (if NGINX is already configured for the domain, Certbot can auto-configure it, otherwise use --standalone):
Bash
sudo certbot certonly --standalone -d your-domain.com -d [www.your-domain.com](https://www.your-domain.com)
# Or, if NGINX is already running and configured for your domain:
# sudo certbot --nginx -d your-domain.com -d [www.your-domain.com](https://www.your-domain.com)
Update your nginx/nginx.conf to include the SSL configuration (uncomment and configure the listen 443 ssl block and ssl_certificate/ssl_certificate_key paths).
Restart NGINX via Docker Compose:
Bash
sudo docker-compose restart nginx
Set up automatic renewal for your certificates using certbot renew --dry-run and then sudo certbot renew --force-renewal (check if it works), then a cron job: sudo crontab -e and add 0 0 * * * /usr/bin/certbot renew --quiet && docker-compose restart nginx.
✅ Jenkins CI/CD Pipeline
Jenkins can automate the entire deployment process, triggered by code pushes to your GitHub repository.

Local Jenkins Setup (Optional)

For testing the CI/CD pipeline locally before deploying to AWS:

Install Jenkins: Follow official Jenkins documentation to install on a local VM or Docker container.
Install Plugins: Git, Docker, SSH Agent, Pipeline, Environment Injector (for .env files).
Configure Credentials: Add your GitHub credentials and your EC2 SSH private key as Jenkins credentials.
Create a Pipeline Job:
Select "Pipeline" project type.
Choose "Pipeline script from SCM" and point to your GitHub repository.
Specify your Jenkinsfile path (e.g., Jenkinsfile).
Jenkins Pipeline Workflow (Jenkinsfile example)

This is a conceptual Jenkinsfile. You'd place this file in the root of your repository.

Groovy
// Jenkinsfile
pipeline {
    agent any # Or specific agent with Docker capabilities

    environment {
        # Inject sensitive environment variables from Jenkins secrets or parameters
        # For actual deployment, you might load these from files on the EC2 instance
        # Or pass them via Jenkins Credentials (e.g., withCredentials([sshUserPrivateKey(...)]))
        EC2_HOST = 'your-ec2-public-ip-or-dns'
        EC2_USER = 'ubuntu'
        EC2_KEY_CREDENTIAL_ID = 'your-ec2-ssh-key-id-in-jenkins' # ID of your SSH private key credential
        # You can use a secrets file for the .env variables or pass them as parameters
        # For simplicity in this example, assuming .env files are handled on EC2
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', credentialsId: 'your-github-credential-id', url: '[https://github.com/your-username/personal-finance-dashboard.git](https://github.com/your-username/personal-finance-dashboard.git)'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    # Build frontend image
                    sh "docker build -t personal-finance-frontend:latest ./frontend"
                    # Build backend image
                    sh "docker build -t personal-finance-backend:latest ./backend"
                    # Optional: Push images to Docker Hub (if you want to use a registry)
                    # withDockerRegistry(credentialsId: 'dockerhub-credentials') {
                    #    sh "docker push your-dockerhub-username/personal-finance-frontend:latest"
                    #    sh "docker push your-dockerhub-username/personal-finance-backend:latest"
                    # }
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                # Ensure docker-compose is installed on EC2
                # Ensure .env.frontend and .env.backend files are present on EC2
                withCredentials([sshUserPrivateKey(credentialsId: env.EC2_KEY_CREDENTIAL_ID, keyFileVariable: 'SSH_KEY')]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -i \$SSH_KEY <span class="math-inline">\{env\.EC2\_USER\}@</span>{env.EC2_HOST} << 'EOF'
                            cd ~/personal-finance-dashboard # Navigate to your project directory on EC2
                            git pull origin main # Pull the latest code (including docker-compose.yml, nginx.conf)
                            
                            # Export environment variables from files so docker-compose can use them
                            # This is a common way to load .env files for docker-compose from a script
                            export \<span class="math-inline">\(cat \.env\.frontend \| xargs\)
export \\</span>(cat .env.backend | xargs)

                            # Bring down existing containers, remove old images, and rebuild
                            docker-compose down --remove-orphans
                            docker-compose pull # Pull latest images if from registry
                            docker-compose up -d --build # Build and start containers in detached mode
                            docker system prune -f # Clean up unused Docker objects
                            echo "Deployment complete!"
                        EOF
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs() # Clean up workspace
        }
        failure {
            echo 'Pipeline failed!'
            # Add notifications here (e.g., email, Slack)
        }
        success {
            echo 'Pipeline succeeded!'
            # Add notifications here
        }
    }
}