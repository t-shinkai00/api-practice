from fastapi import FastAPI
app=FastAPI()  # instance of FastAPI

@app.get("/hello")  # get from root by HTTP method
async def index():  # asynchronous processing
  return {"message": "Hello World!!!"}