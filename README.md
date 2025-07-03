# The Users Dashboard – Project Documentation

A modern, Dockerized dashboard built with **Next.js**, **Tailwind CSS**, and **TypeScript** that interacts with a **Google Cloud Function API** for full CRUD operations on user data.

---

## 📦 Tech Stack

* **Next.js** – React-based web framework
* **TypeScript** – Static typing
* **Tailwind CSS** – Utility-first CSS framework
* **Google Cloud Functions** – Serverless backend
* **Docker** – Containerized deployment

---

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/the-users-frontend.git
cd the-users-frontend
```

### 2. Build Docker Image

```bash
docker build -t the-users-app .
```

### 3. Run the Docker Container

```bash
docker run -p 3000:3000 the-users-app
```

### 4. Open the App

Go to:

```
http://localhost:3000
```

---

## 🧪 CRUD Operations (UI)

| Action | UI Interaction                   | API Method |
| ------ | -------------------------------- | ---------- |
| Create | Fill form and click "Add User"   | POST       |
| Read   | Users are shown in the table     | GET        |
| Update | Click , update, then submit form | PUT        |
| Delete | Click  delete beside the user    | DELETE     |

---

## 🌐 API Documentation

### Base Endpoint:

```
https://us-central1-assesmentpric.cloudfunctions.net/getPricUsers
```

### 📥 GET `/getPricUsers`

* Fetch all users
* **Response:**

```json
[
  {
    "id": "theid23134",
    "name": "Shreyas Ghansawant",
    "email": "Shreyasghansawant@gmail.com",
    "role": "Developer"
  }
]
```

---

### ➕ POST `/getPricUsers`

* Add new user
* **Request Body:**

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "role": "HR"
}
```

* **Response:**

```json
{
  "id": "generated_id",
  "name": "Jane Smith",
  "email": "jane@example.com",
  "role": "HR"
}
```

---

### ✏️ PUT `/getPricUsers`

* Update existing user
* **Request Body:**

```json
{
  "id": "abc123",
  "name": "Updated Name",
  "email": "updated@email.com",
  "role": "Manager"
}
```

---

### 🗑️ DELETE `/getPricUsers`

* Delete user by ID
* **Request Body:**

```json
{
  "id": "abc123"
}
```

* **Response:**

```json
{
  "success": true
}
```

---

## 📁 Directory Structure

```
the-users-frontend/
├── components/       # UI Components
├── pages/            # Next.js Pages (incl. dashboard)
├── public/           # Static Assets
├── types/            # TypeScript Interfaces
├── styles/           # Optional global styles
├── Dockerfile        # Docker setup
├── .dockerignore     # Docker exclusions
├── package.json      # NPM Config
├── tsconfig.json     # TypeScript Config
├── README.md         # Project Info
```

---

## 👨‍💻 Author

Made with 💻 by [Shreyas Ghansawant](https://github.com/<your-username>)
