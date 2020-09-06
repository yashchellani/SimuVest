stockfile = open('companylist.csv')
data = stockfile.readlines()
stockfile.close()
data = data[1::]
stocksdata = []
string1 = "\""
stocknames = []
def processlist():
    for i in range(len(data)):
        data[i] = data[i].split(',')
        data[i] = data[i][0:-1]
        stocksdata.append([data[i][0]] + [data[i][1]]+ [data[i][-2]]+ [data[i][-1]])
    for  i in range(len(stocksdata)):
        for j in range (len(stocksdata[i])):
            if stocksdata[i][j][0] == string1:
                stocksdata[i][j] = stocksdata[i][j][1::]
    return stocksdata
def getStockNames():
    stocksdata = processlist()
    for i in range(len(stocksdata)):
        stocknames.append(stocksdata[i][0])
    return stocknames







