from fastapi import FastAPI
import random

app = FastAPI()

@app.get('/')
async def root():
    return {'message': 'Welcome to the Shangri-La backend!'}