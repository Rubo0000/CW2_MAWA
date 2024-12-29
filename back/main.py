from fastapi import FastAPI
from app.database import engine, Base
from app.routes import users

# Create the database tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Include user routes
app.include_router(users.router, prefix="/api", tags=["Users"])

@app.get("/")
def root():
    return {"message": "Welcome to the Shangri-La backend!"}
