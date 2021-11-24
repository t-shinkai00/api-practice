from typing import Optional
from fastapi import FastAPI
app=FastAPI()  # instance of FastAPI

@app.get("/hello")  # get from root by HTTP method
async def index():  # asynchronous processing
  return {"message": "Hello World!!!"}

@app.get("/countries/{country_name}")  # country_name: path parameter
async def country(country_name: str, country_number: Optional[int]=None):  # country_number: optional query parameter
  return {"country_name": country_name, "country_number": country_number}