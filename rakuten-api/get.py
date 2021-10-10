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

hotels=resuluts["hotels"]
# print(hotels[0]["hotel"][0]["hotelBasicInfo"]["hotelName"])
df=pd.DataFrame()
for i, hotel in enumerate(hotels):
  info=hotel["hotel"][0]["hotelBasicInfo"]
  # print(f'Name: {info["hotelName"]}, URL: {info["hotelInformationUrl"]}, MinCharge: {info["hotelMinCharge"]}')
  _df=pd.DataFrame(info, index=[i])
  # print(_df)
  df=df.append(_df)
# print(df)

# print(df.columns)
df[[
  'hotelName','hotelInformationUrl',
  'hotelMinCharge', 'latitude', 'longitude', 'postalCode', 'address1',
  'address2', 'telephoneNo', 'parkingInformation',
  'nearestStation'
]].to_csv("hotels.csv", index=False)
# print(df)