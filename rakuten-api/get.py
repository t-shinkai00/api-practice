import requests
import pandas as pd

from secret import APPLICATIONID, ENDPOINT
# print(APPLICATIONID, ENDPOINT)

params={
  "format":"json",
  "largeClassCode":"japan",
  "middleClassCode":"okinawa",
  "smallClassCode":"nahashi",
  "applicationId":APPLICATIONID,
}
# print(params)

res=requests.get(url=ENDPOINT, params=params)
# print(res)

resuluts=res.json()
# print(resuluts)