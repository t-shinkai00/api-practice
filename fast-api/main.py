from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel

app=FastAPI()  # instance of FastAPI

@app.get("/hello")  # get from root by HTTP method
async def index():  # asynchronous processing
  return {"message": "Hello World!!!"}

@app.get("/countries/{country_name}")  # country_name: path parameter
async def country(country_name: str, country_number: Optional[int]=None):  # country_number: optional query parameter
  return {"country_name": country_name, "country_number": country_number}

class Item(BaseModel):
  name: str
  description: Optional[str] = None
  price: int
  tax: Optional[float] = None

@app.post("/item/")  # post method
async def create_item(item: Item):
  # return {"message": f"{item.name}は、税込み価格{item.price*item.tax}円です。"}
  return item