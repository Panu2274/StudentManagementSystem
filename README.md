# 🎓 Student Management System - Angular Web App

This is a student data management system built using **Angular** and deployed using **Firebase Hosting**. The application provides separate modules for Admin and Student with basic login-based role access.

## ✨ Features

- 🔐 Login system for admin and students
- 🧑‍💼 Admin Module:
  - View all student data
  - Add, Edit, Delete (CRUD operations)
  - View own profile
    
- 🧑‍🎓 Student Module:
  - Add personal data
  - View all student records
  - View own profile
- 🔁 Role-based routing and restricted access
- 🗂️ JSON-server used to simulate a backend (`users.json`)

---

## 📸 Screenshot


![Login Screenshot](./assets/login.png)
![Register Screenshot](./assets/register.png)
![Admin Panel Screenshot](./assets/admin-panel.png)
![Admin Profile Screenshot](./assets/profile.png)
![Admin view Screenshot](./assets/admin-view.png)
![Student View Screenshot](./assets/stud-view.png)
![Dashboard Screenshot](./assets/dashboard.png)
---

## 🛠️ Tech Stack

- Angular
- TypeScript
- Bootstrap 5
- JSON Server

---

## 🔧 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/Panu2274/StudentManagementSystem.git

# Navigate to project directory
cd StudentManagementSystem

# Install dependencies
npm install

# Run JSON server to simulate backend
json-server --watch db.json
json-server --watch users.json --port 3001

# Run the Angular app locally
ng serve
