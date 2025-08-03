
# 📝 Blog Website - MERN Stack

### 👨‍🎓 **Project By:**  
**K Jeevan Kumar**  
🎓 **Final Year, Computer Science & Engineering**  
🏫 **Alva's Institute of Engineering & Technology**  
🆔 **USN: 4AL22CS067**

---

## 📌 Table of Contents  

| Section | Description |
|---------|-------------|
| [📌 Overview](#-overview) | Project Introduction & Features |
| [🛠️ Tech Stack](#️-tech-stack) | Frontend & Backend Technologies Used |
| [📂 Project Structure](#-project-structure) | Folder Structure of the Project |
| [🖼️ Results](#️-results) | Screenshots of Application Pages |

---

## 📌 Overview  
The **Blog Website** is a full-stack blogging platform where users can **register**, **login**, **create blog posts**, and **comment** on others' posts. The application features modern UI with Tailwind CSS and secure backend authentication using JWT tokens.

### ✨ Key Features:
✅ **User Authentication** – Register/Login using JWT  
✅ **Create, Read & Delete Posts** – Blog post management  
✅ **Commenting System** – Readers can add comments  
✅ **Responsive UI** – Works on all screen sizes  
✅ **Typewriter Hero Section** – Motivational animated quotes

---

## 🛠️ Tech Stack

### Frontend  
- ⚛️ **React.js (with Vite)** – Lightning-fast development  
- 🎨 **Tailwind CSS** – Utility-first modern styling  
- 💫 **Framer Motion** – Smooth animations  
- 🌐 **Axios** – API communication

### Backend  
- 🟢 **Node.js with Express** – RESTful APIs  
- 🌿 **MongoDB** – NoSQL database  
- 🧩 **Mongoose** – MongoDB ODM  
- 🔐 **JWT (JSON Web Token)** – Authentication  
- 🧰 **dotenv** – Secure environment variables

---

## 📂 Project Structure

```bash
BlogWebsite/
├── client/                          # React frontend
│   ├── src/
│   │   ├── pages/                   # Home, Login, Register, CreatePost, Profile
│   │   ├── components/              # Navbar, Hero, PostList, PostItem, CommentList, CommentForm
│   │   ├── context/                 # AuthContext
│   │   ├── services/                # API services (auth, post, comment)
│   │   └── assets/screenshots/      # Project screenshots
│   └── public/                      # Static files
│
├── server/                          # Express backend
│   ├── models/                      # User, Post, Comment schemas
│   ├── controllers/                 # Logic for auth, post, comment
│   ├── routes/                      # API route handlers
│   ├── middleware/                  # JWT auth middleware
│   └── config/                      # DB connection
│
├── .env                             # Environment variables
├── package.json                     # Project metadata and scripts
└── README.md                        # Documentation
```
