import pandas as pd
from alpha_vantage.timeseries import TimeSeries
import time
import stockanalysis

api_key = "3UJ0X4P2FAGE2DOV"
timeSeries = TimeSeries(key = api_key, output_format='pandas')
data = timeSeries.get_daily(symbol = [0], outputsize='compact')
stockdata = stockanalysis.processlist()

for i in range(5):
    print(stockdata[i][1])
    print("-"*40)
    data = timeSeries.get_daily(symbol = stockdata[i][0], outputsize='compact')
    print(data)
    print("-"*40)

industry = input("pick any one of the following industries: Capital Goods \
,Health Care,Finance, Technology, Public Utilities, Basic Industries").lower()
