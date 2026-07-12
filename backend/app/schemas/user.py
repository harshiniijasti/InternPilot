from pydantic import BaseModel


class UserCreate(BaseModel):
    full_name: str
    email: str
    phone: str
    college: str
    degree: str
    branch: str
    graduation_year: int
    cgpa: float
    preferred_role: str
    preferred_location: str