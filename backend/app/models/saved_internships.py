from sqlalchemy import Column, Integer, String
from app.database import Base


class SavedInternship(Base):
    __tablename__ = "saved_internships"

    id = Column(Integer, primary_key=True, index=True)

    company = Column(String)
    role = Column(String)
    location = Column(String)
    apply_url = Column(String)

    match_percentage = Column(Integer)