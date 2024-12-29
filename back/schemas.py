from pydantic import BaseModel
from typing import Optional

class UserCreate(BaseModel):
    email: str
    name: str
    password: str
    bio_id: str
    is_committee: Optional[bool] = False
