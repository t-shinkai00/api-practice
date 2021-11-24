from fastapi import FastAPI
app=FastAPI()  # instance of FastAPI

@app.get("/hello")  # get from root by HTTP method
async def index():  # asynchronous processing
  return {"message": "Hello World!!!"}

@app.get("/countries/{country_name}")  # path parameter
async def country(country_name: str):
  return {"country_name": country_name}