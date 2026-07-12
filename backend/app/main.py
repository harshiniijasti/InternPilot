from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models.user import User
from app.models.saved_internships import SavedInternship
from app.routers.user import router as user_router
from app.routers.saved import router as saved_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="InternPilot API",
    version="1.0.0",
    description="AI-Powered Internship Recommendation System",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://192.168.29.154:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)
app.include_router(saved_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to InternPilot API 🚀"
    }