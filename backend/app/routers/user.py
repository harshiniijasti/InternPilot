from app.services.adzuna import get_internships
from app.services.matcher import calculate_match
from app.services.ai_analyzer import analyze_resume
from app.services.resume_parser import extract_resume_text
from fastapi import UploadFile, File
import shutil
import os
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.user import User
from app.schemas.user import UserCreate

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/users")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    new_user = User(
        full_name=user.full_name,
        email=user.email,
        phone=user.phone,
        college=user.college,
        degree=user.degree,
        branch=user.branch,
        graduation_year=user.graduation_year,
        cgpa=user.cgpa,
        preferred_role=user.preferred_role,
        preferred_location=user.preferred_location,
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "Profile saved successfully!",
        "user_id": new_user.id,
    }


@router.get("/users")
def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()


@router.post("/upload-resume")
def upload_resume(resume: UploadFile = File(...)):
    upload_folder = "uploads"
    os.makedirs(upload_folder, exist_ok=True)

    file_path = os.path.join(upload_folder, resume.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    resume_text = extract_resume_text(file_path)
    analysis = analyze_resume(resume_text)

    resume_skills = analysis["skills"]

    search_query = "Software Engineer Intern"
    internships = get_internships(search=search_query)

    recommended = []

    for internship in internships:

        text = internship["text"]

        matched_skills = []

        for skill in resume_skills:
            if skill.lower() in text:
                matched_skills.append(skill)

        result = calculate_match(
            resume_skills,
            matched_skills
        )

        if result["match_percentage"] > 0:
            recommended.append({
                "company": internship["company"],
                "role": internship["role"],
                "location": internship["location"],
                "apply_url": internship["apply_url"],
                "match_percentage": result["match_percentage"],
                "matched_skills": result["matched_skills"]
            })

    recommended.sort(
        key=lambda x: x["match_percentage"],
        reverse=True
    )

    return {
        "message": "Resume uploaded successfully!",
        "filename": resume.filename,
        "analysis": analysis,
        "recommended_internships": recommended
    }