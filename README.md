# 🔐🌈🌟 AuthVault Enterprise Edition - The authorization App 🌈🌟🔐

## Introduction
Production-grade authentication system built with the **MERN stack**, enhanced with **DevOps infrastructure, containerization, and automated deployment**.

AuthVault Enterprise is an upgraded version of the original AuthVault project, demonstrating **secure authentication architecture and full production deployment** using modern cloud and DevOps tools. Crafted using the MERN stack — MongoDB, Express, React, and Node.js. This dynamic site offers seamless authentication capabilities, allowing users to sign up, sign in securely, and sign out. It includes Google's OAuth functionality and delete user functionality. Access to protected routes is exclusively granted to authenticated users so that users can update their credentials such as profile picture, username, email, and password.

## [![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://authvault.duckdns.org)

## 🏠Homepage

![Screenshot of AuthVault's Homepage](/client/src/assets/authvaultPic1.png)

## 📝About page describing why i built AuthVault

![Screenshot of AuthVault's Aboutpage](/client/src/assets/authvaultPic2.png)

## 👉Sign In Page

![Screenshot of AuthVault's SignInPage](/client/src/assets/authvaultPic3.png)

## ✅Sign Up Page

![Screenshot of AuthVault's SignUpPage](/client/src/assets/authvaultPic4.png)

## 👤User Profile Page

![Screenshot of AuthVault's UserProfilePage](/client/src/assets/authvaultPic5.png)

## 🧠 Project Purpose

This project demonstrates how a modern authentication system can be:

- Secure
- Scalable
- Containerized
- Cloud deployed
- Automatically deployed via CI/CD

It simulates how authentication services are deployed in **real production environments**.
## 🛠️ Tech Stack

- **Frontend**: 🌐React.js, React Router, Tailwind CSS
- **Backend**: ⚙️Node.js, Express
- **Database**:🧑‍💻 MongoDB
- **State Management**: 🧑‍💻Redux Toolkit
- **Authentication**: 🔐JSON Web Tokens (JWT), Google OAuth
- **Storage**: 🏬Firebase Storage (for profile images)

## 🏗️ Architecture Overview
User Browser
    │
    ▼
DuckDNS Domain
    │
    ▼
Nginx Reverse Proxy (HTTPS)
    │
    ├──────────────► React Frontend Container
    │
    ▼
Node.js Backend API Container
    │
    ├──────────────► MongoDB Atlas
    │
    ▼
Redis Container (Caching / Rate Limiting)

## 🌐Infrastructure hosted on:

- AWS EC2
- Docker Compose
- Nginx Reverse Proxy
- GitHub Actions CI/CD
- Let's Encrypt SSL
- Elastic IP
# ⚙️ Tech Stack

## Frontend

- React.js
- React Router
- Tailwind CSS
- Redux Toolkit

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Redis
- JWT Authentication
- Google OAuth
- bcrypt password hashing

---

## DevOps & Infrastructure

- Docker
- Docker Compose
- Nginx Reverse Proxy
- AWS EC2
- Elastic IP
- DuckDNS domain
- Let's Encrypt SSL
- GitHub Actions CI/CD

---

# 🔐 Security Features

- JWT based authentication
- Password hashing using bcrypt
- Protected API routes
- Secure cookie handling
- Rate limiting to prevent abuse
- HTTPS encryption via Let's Encrypt
- Reverse proxy security with Nginx
- Token based authentication validation

---

# 🚀 Core Features

### Authentication

- User registration
- Secure login/logout
- Google OAuth authentication
- JWT token based authentication

---

### Profile Management

Users can:

- Update username
- Update email
- Change password
- Upload profile picture
- Delete account

---

### Security

- Password hashing
- Route protection
- Rate limiting
- Secure authentication tokens

---

### Deployment

- Containerized using Docker
- Nginx reverse proxy
- HTTPS enabled
- CI/CD auto deployment
- Cloud hosted on AWS EC2

---

# 📦 Infrastructure Components

### Docker Containers

authvault_client → React frontend  
authvault_api → Node.js backend  
authvault_redis → Redis caching  
authvault_nginx → Reverse proxy

All services are managed using **Docker Compose**.

---

# 🔄 CI/CD Pipeline

Automated deployment using **GitHub Actions**.

Workflow:

Push to main branch
        │
        ▼
GitHub Actions triggered
        │
        ▼
SSH into AWS EC2
        │
        ▼
Pull latest code
        │
        ▼
Rebuild Docker containers
        │
        ▼
Restart services automatically


This ensures **automatic deployment after every commit**.

---

# 🔒 HTTPS Setup

Secure HTTPS using:

- Let's Encrypt SSL certificates
- Automatic certificate renewal
- Nginx SSL termination
- HTTP → HTTPS redirect

---

## 🔍 How it Works

1. **Frontend Setup**: Set up React.js and integrated Tailwind CSS. Used React Router for client-side routing and created authentication pages.
2. **Authentication Mastery**: Implemented email and password authentication with JWT and integrated Google OAuth for easier sign-ins.
3. **State Management**: Utilized Redux Toolkit for efficient state management.
4. **Profile Management**: Securely managed user profiles, including updating profile information and handling profile picture uploads.
5. **Account Deletion**: Added delete user accounts safely with proper token checks.
6. **CRUD Operations**: Perform Create, Read, Update, and Delete operations using MongoDB.
7. **Password Encryption**: Encrypted user's passwords in MongoDB Atlas using bcryptjs library.

## 📈 Key Learning Outcomes

This project demonstrates:

- Full MERN stack development
- Authentication system design
- Secure backend API architecture
- Containerized application deployment
- Reverse proxy configuration
- SSL certificate management
- Cloud deployment on AWS
- CI/CD automation using GitHub Actions
  
## 📝 Contributing

Contributions are welcome! If you would like to help improve AuthVault or add new features, please fork the repository and submit a pull request. .

## 👤 Author

AuthVault Enterprise is crafted with 💚 by **Amol**. Feel free to reach out for any questions or suggestions!
