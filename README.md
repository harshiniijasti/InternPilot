# 🚀 InternPilot

> **An AI-Powered Internship Recommendation Platform that helps students discover relevant internship opportunities through intelligent matching and real-time job listings.**
---

## 🌐 Live Demo- https://intern-pilot-umber.vercel.app/

**Frontend:** https://YOUR-VERCEL-URL.vercel.app

**Backend API:** https://internpilot-sdiz.onrender.com

---

## 📖 Overview

InternPilot is a modern full-stack web application designed to simplify internship discovery for students.

The platform combines a responsive user interface with a FastAPI backend to deliver personalized internship recommendations. It integrates the Adzuna Jobs API for real-time internship listings while providing secure authentication using Clerk.

---

## ✨ Features

- 🔐 Secure authentication with Clerk
- 👤 Student profile management
- 🤖 AI-powered internship recommendations
- 🔍 Real-time internship search via Adzuna API
- ❤️ Save favorite internships
- 📊 Personalized dashboard
- ⚡ Fast REST API using FastAPI
- 📱 Fully responsive UI
- 🎨 Modern and clean user experience

---

## 🛠️ Tech Stack

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Clerk Authentication
- Framer Motion

### Backend
- Python
- FastAPI
- SQLAlchemy
- SQLite
- Uvicorn

### APIs & Services
- Adzuna Jobs API
- Clerk
- Render
- Vercel
- GitHub

---

## 🔑 Environment Variables

### Backend (.env)

```env
ADZUNA_APP_ID=your_adzuna_app_id
ADZUNA_APP_KEY=your_adzuna_app_key
```

---

### Frontend (.env.local)

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key

CLERK_SECRET_KEY=your_secret_key

NEXT_PUBLIC_API_URL=https://internpilot-sdiz.onrender.com
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | API Health Check |
| GET | `/docs` | Swagger Documentation |
| POST | `/users` | Create User |
| GET | `/users/{id}` | Get User |
| POST | `/saved` | Save Internship |
| GET | `/saved` | Retrieve Saved Internships |

---

## 🚀 Deployment

| Component | Platform |
|-----------|----------|
| Frontend | Vercel |
| Backend | Render |

---

## 🔮 Future Enhancements

- AI Resume Analysis
- Resume Parsing
- Smart Skill Gap Detection
- Internship Match Score
- Email Notifications
- Interview Preparation Assistant
- PostgreSQL Integration
- Docker Support
- Admin Dashboard
- Advanced Search & Filters

---

## 📸 Screenshots

<img width="960" height="504" alt="image" src="https://github.com/user-attachments/assets/a03ed1a2-18bd-4b5e-a55f-dcc367c92344" />
<img width="941" height="442" alt="image" src="https://github.com/user-attachments/assets/71ee6d47-2d12-442b-aa4c-15d9a8ffed6e" />
<img width="960" height="504" alt="image" src="https://github.com/user-attachments/assets/e6acfc06-ab89-4b0e-aa98-a039de29f5a7" />

---

## 👩‍💻 Author

**Harshini Jasti**

Aspiring Software Engineer & AI Engineer

GitHub: https://github.com/harshiniijasti

LinkedIn: https://www.linkedin.com/in/harshinijasti

---

## 📄 License

This project is licensed under the **MIT License**.

See the **LICENSE** file for more information.

---

⭐ If you found this project helpful, consider giving it a star!



