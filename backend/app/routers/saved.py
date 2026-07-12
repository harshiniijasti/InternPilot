from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.saved_internships import SavedInternship

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/save-internship")
def save_internship(data: dict, db: Session = Depends(get_db)):
    internship = SavedInternship(
        company=data["company"],
        role=data["role"],
        location=data["location"],
        apply_url=data["apply_url"],
        match_percentage=data["match_percentage"],
    )

    db.add(internship)
    db.commit()

    return {
        "message": "Internship saved successfully!"
    }


@router.get("/saved-internships")
def get_saved(db: Session = Depends(get_db)):
    return db.query(SavedInternship).all()


@router.delete("/saved-internship/{internship_id}")
def delete_saved_internship(
    internship_id: int,
    db: Session = Depends(get_db)
):
    internship = (
        db.query(SavedInternship)
        .filter(SavedInternship.id == internship_id)
        .first()
    )

    if internship is None:
        return {
            "message": "Internship not found"
        }

    db.delete(internship)
    db.commit()

    return {
        "message": "Internship removed successfully"
    }