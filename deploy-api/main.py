from fastapi import FastAPI
from pydantic import BaseModel

class Data(BaseModel):
  x: float
  y: float

