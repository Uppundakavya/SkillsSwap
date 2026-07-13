# 🚀 Skill Swap Platform

A Full Stack Web Application that allows users to exchange skills by sending and managing skill swap requests.

---

## 📌 Features

- 👤 User Registration & Login
- 🏠 User Dashboard
- 💻 Skill Management (Add, Update, Delete, View)
- 🤝 Send Skill Swap Requests
- ✅ Accept / Reject Requests
- 📞 View Contact Information after Request Acceptance
- 🎨 Responsive UI using Tailwind CSS

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Fetch API
- React Hot Toast

### Backend
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate
- REST APIs

### Database
- MySQL

---

## 📂 Project Structure

```
SkillsSwap
│
├── skillswap-backend
│   ├── controller
│   ├── entity
│   ├── repository
│   ├── service
│   ├── SkillswapBackendApplication.java
│
├── skillswap-frontend
│   ├── src
│   │   ├── Components
│   │   ├── Layouts
│   │   ├── Pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│
└── README.md
```

---

## ✨ Modules

### User Module
- Register
- Login
- Dashboard

### Skills Module
- Add Skill
- Update Skill
- Delete Skill
- View Skills

### Swap Request Module
- Send Request
- Accept Request
- Reject Request
- Delete Request
- View Contact Details

---

## 🗄 Database

Database Name:

```
skillswap_db
```

Tables:

- users
- skills
- swap_requests

---

## REST APIs

### User

```
POST   /users/register
POST   /users/login
GET    /users
GET    /users/{id}
```

### Skills

```
GET    /skills
POST   /skills
PUT    /skills/{id}
DELETE /skills/{id}
```

### Swap Requests

```
GET    /swaprequests
POST   /swaprequests
PUT    /swaprequests/{id}/accept
PUT    /swaprequests/{id}/reject
DELETE /swaprequests/{id}
```

---

## Future Enhancements

- JWT Authentication
- Password Encryption (BCrypt)
- Search & Filter Skills
- Chat Between Users
- Email Notifications
- Profile Images

---

## 👩‍💻 Author

**Kavya Karanth**

Java Full Stack Developer
