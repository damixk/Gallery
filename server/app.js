// Dependencies
// =================

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const handler = require('./handlers/handler');
const winston = require('winston');
const http = require('http');
const path = require('path');

// Global
// =================
jwt = require('jsonwebtoken');
bcrypt = require('bcryptjs');

config = require('../config');

// MongoDB
// =================
mongoose.connect(config.mongoConnect);

// Express
// =================
const app = express();
app.disable('etag');

app.use(function(req, res, next) {
    res.removeHeader("X-Powered-By");
    next();
});

const router = express.Router(); // get an instance of the express Router

app.use(bodyParser.urlencoded({ extended: true, keepExtensions: true }));
app.use(bodyParser.json());

//ANALYTICS the lazy way
//===================

// TODO:

// ROUTES FOR API
api.setup(app, handler);

//TEST AREA
//==============
app.use(express.static('public/uploads'));
app.use(express.static('public/frontend'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public/frontend/', 'index.html'));
});
//==============
/*app.use(function(req, res, next) {
    res.redirect('/404');
});

// OTHER
app.use(function(err, req, res, next) {
    res.redirect('/500');
});*/

app.listen(config.web.port);

if (app.get('env') == 'production') {
  console.log('Listening on port ' + config.web.port + " -" + '\x1b[31m', app.get("env"), '\x1b[0m');
} else {
  console.log('Listening on port ' + config.web.port + " -" + '\x1b[32m', app.get("env"), '\x1b[0m');
}
