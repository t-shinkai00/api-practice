import requests
import json

url="https://api.gnavi.co.jp/RestSearchAPI/v3/"
params={}
params["keyid"]="0846a192ed0cf888c032b3ab9b9db356"
params["freeword"]="神田駅, ラーメン"
# print(params)

res=requests.get(url=url, params=params)
# print(res.json())
result=res.json()
restaurants=result["rest"]