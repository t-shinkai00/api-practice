import requests
import pandas as pd

from secret import APPLICATIONID, ENDPOINT
# print(APPLICATIONID, ENDPOINT)

params={
  "format":"json",
  "largeClassCode":"japan",
  "middleClassCode":"okinawa",
  "smallClassCode":"nahashi",
  "applicationid":APPLICATIONID,
}
# print(params)