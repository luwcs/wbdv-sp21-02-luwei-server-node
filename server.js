const express = require('express')
const app = express()
require('dotenv').config()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose')

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/wbdv-sp21-02'

mongoose.connect(
    dbUrl,
    {useNewUrlParser: true, useUnifiedTopology: true});

// configure CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

require("./controllers/quizzes-controller")(app);
require("./controllers/questions-controller")(app);
require('./controllers/quiz-attempts-controller')(app);

app.listen(4000);