from sqlalchemy import Column, Integer, String, Float

from app.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    phone = Column(String)
    college = Column(String)
    degree = Column(String)
    branch = Column(String)
    graduation_year = Column(Integer)
    cgpa = Column(Float)
    preferred_role = Column(String)
    preferred_location = Column(String)