import pandas as pd
import yfinance as yf
import stockanalysis
import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://yashc:Password1@cluster0.37ilo.mongodb.net/stockData?retryWrites=true&w=majority")
db = cluster['stockData']
collection = db['companyDetails']
#post = {"_id": 'hello', "name": "user2"}
#collection.insert_one(post)
stockSymbols= stockanalysis.getStockNames()
dataDict = {}
for i in range(100):
    try:
        stockSymbol = stockSymbols[i]
        dataDict[stockSymbol] = {}
        stockTicker = yf.Ticker(stockSymbol)
        stockInfo = stockTicker.info
        print(stockInfo)
        dataDict[stockSymbol]['_id'] = stockSymbol
        dataDict[stockSymbol]['name'] = stockInfo['longName']
        dataDict[stockSymbol]['sector'] = stockInfo['sector']
        dataDict[stockSymbol]['profit margin'] = stockInfo['profitMargins']
        dataDict[stockSymbol]['website'] = stockInfo['website']
        dataDict[stockSymbol]['logo'] = stockInfo['logo_url']
        print(i)
    except:
        pass

for key in dataDict:
    if dataDict[key] == {}:
        pass
    else:
        collection.insert_one(dataDict[key])
