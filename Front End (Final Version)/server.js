// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// Get our API routes
const api = require('./server/routes/api');
const app = express();

app.enable('trust proxy'); // disable this when not in production!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Parsers for POST data
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

//disable when not in production !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// app.use (function (req, res, next) {
//     if(req.protocol!=='http'){
//             // request was via https, so do no special handling
//             return next();
//     } else {
//             // request was via http, so redirect to https
//             return res.redirect('https://' + req.headers.host + req.url);
//     }
// });

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
// Set our API routes
app.use('/api', api);
// Catch all other routes and return the index file
app.get('*', (req, res) => { 
    res.sendFile(path.join(__dirname, 'dist/index.html')); 
});



// Get port from environment and store in Express
const port = process.env.PORT || '8080';
app.set('port', port);
// Create HTTP server
const server = http.createServer(app);


server.listen(port, () => console.log(`API running on localhost:${port}`));

