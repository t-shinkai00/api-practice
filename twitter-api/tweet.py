import json
from requests_oauthlib import OAuth1Session

from secrets import API_KEY, API_KEY_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET
# print(API_KEY, API_KEY_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
ENDPOINT="https://api.twitter.com/1.1/statuses/update.json"

twitter=OAuth1Session(API_KEY, API_KEY_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
# print(twitter)

params={
  "status":"test tweet"
}

res=twitter.post(url=ENDPOINT,params=params)
print(res)