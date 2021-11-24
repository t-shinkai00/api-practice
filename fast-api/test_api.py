import requests
import json

def main():
  url="http://127.0.0.1:8000/item/"
  body = {
    "name": "T-Shirt",
    "description": "white color",
    "price": 5000,
    "tax": 1.1
  }
  data = json.dumps(body)
  res = requests.post(url, data)
  print(res.json())

if __name__ == "__main__":
  main()