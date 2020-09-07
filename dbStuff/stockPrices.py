import yfinance as yf
from datetime import date
from datetime import timedelta
import pymongo
from pymongo import MongoClient
import stockSymbolExtractor
stockSymbols= stockSymbolExtractor.getStockNames()
d1 = date.today()
yesterday = d1 - timedelta(days = 1)
cluster = MongoClient("mongodb+srv://yashc:Password1@cluster0.37ilo.mongodb.net/stockData?retryWrites=true&w=majority")
db = cluster['stockData']
collection = db['stockPrices']

sample_data = yf.download(stockSymbols[0:100], start = yesterday, end = yesterday, progress=False)
resultDic = sample_data.to_dict('list')

#dictionary to be uploaded
uploadDict = {}
#uploadDict['date'] = date.today()
def findDate(todayDate = d1.strftime("%d/%m/%Y")):
    #newQuery = {'date': todayDate}
    #print (collection.find(newQuery))
    #if collection.find(newQuery):
     #   pass
    #else:
    try: 
        collection.update_one({'_id' : 'date'},{"$set":{'date' : d1.strftime("%d/%m/%Y")}})
        for key in resultDic:
            valueNum = resultDic[('Close', key[1])][0]
            if valueNum == 'nan' or valueNum == 'NaN' or valueNum == None:
                pass
            uploadDict[key[1]] = {}
            uploadDict[key[1]]['_id'] = key[1]
            uploadDict[key[1]]['stockPrice'] = valueNum

        for key in uploadDict:
            if (type(uploadDict[key])) == 'datetime.date':
                pass
            else:
                collection.update_one({'_id': key}, {"$set":{'stockPrice': uploadDict[key[1]]['stockPrice']}})
    except:
        print("There was an error in inserting your data.")

findDate()
def uploadData():
    try: 
        collection.insert_one({'_id' : 'date', 'date' : d1.strftime("%d/%m/%Y")})
        for key in resultDic:
            valueNum = resultDic[('Close', key[1])][0]
            if valueNum == 'nan' or valueNum == 'NaN' or valueNum == None:
                pass
            uploadDict[key[1]] = {}
            uploadDict[key[1]]['_id'] = key[1]
            uploadDict[key[1]]['stockPrice'] = valueNum

        #implement a check for date
        #inserting everything in the database
        for key in uploadDict:
            if (type(uploadDict[key])) == 'datetime.date':
                pass
            else:
                collection.insert_one(uploadDict[key])
    except: 
        print("There was an error in inserting your data.")
    finally:
        print("Process complete.")


