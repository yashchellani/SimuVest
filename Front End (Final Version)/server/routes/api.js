const express = require('express');
const { async } = require('rxjs/internal/scheduler/async');
const router = express.Router();
// var sha256 = require('js-sha256');

const MongoClient = require('mongodb').MongoClient;

// const bcrypt = require('bcryptjs');
// const BCRYPT_SALT_ROUNDS = 12;

// declare axios for making http requests
// const axios = require('axios');
// const { async } = require('rxjs/internal/scheduler/async');


var db;
var ObjectId = require('mongodb').ObjectID;


//change this later and stuff
MongoClient.connect('mongodb+srv://newUser1:Password1@cluster0.37ilo.mongodb.net/stockData?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('stockData');
    console.log("connected?")
});


router.get('/getCompanyDetails' , function (req,res) {
    db.collection('companyDetails').find().toArray((err,results) =>{
        res.send(results)
    })
})

router.get('/getStockPrices' , function (req,res) {
    db.collection('stockPrices').find().toArray((err,results) =>{
        res.send(results)
    })
})

router.get('/getIndex/:email' , function (req,res) {
    var email = req.params.email
    db.collection('indexData').find({"userEmail":email}).toArray((err,results) =>{
        res.send(results)
    })
})


router.post('/updateIndex' , async function (req,res) {

    var email = req.body.email
    var indexAdd = req.body.index
    console.log(email)
    var index = await db.collection('indexData').find({"userEmail": email}).toArray()
    // console.log(index)
    var indexArr = index[0].stocksList
    indexArr.push(indexAdd)
    console.log(indexArr)
    // res.send(index)
    db.collection('indexData').updateOne({ "userEmail": email }, { $set: { stocksList: indexArr  } }, (err, result) => {
        obj = result
        if (obj.result.nModified == 1) {
            res.send(true)
        }
        else if (obj.result.nModified == 0) {
            res.send(false)
        }
    });
})

router.post("/createIndex", function (req, res){
    var email = req.body.email
    var obj = {
        userEmail : email,
        stocksList : [],
        indexPrice : 0
    }
    db.collection("indexData").insertOne(obj , (err, result2) =>{
        // console.log(result2)
        res.status(200).send(true);
    })
})


module.exports = router;