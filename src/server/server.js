const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const RateLimit = require('express-rate-limit');

const port = 3001; // set port server

/* # MODELS # */
const User = require('./models/User.js');

/*
  Add this line before express' response to set CORS header:
  res.header("Access-Control-Allow-Origin", "*");
*/

// Complete here with url mongoDB
// mongoose.connect('');
// const db = mongoose.connection;

// security (limit number request)
const apiLimiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 150,
  delayMs: 0 // disabled
});

app.use('/', apiLimiter);

app.use(cors());

// set helmet security
app.use(helmet());

// load statics files
app.use('/contrib', express.static(path.join(__dirname, 'contrib')));
app.use(express.static('dist'));

app.use(
  session({
    cookieName: 'session',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Config bodyParser
app.use(bodyParser.json()); // For parsing application/json
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
  })
); // for parsing application/x-www-form-urlencoded

// db.on('error', console.error.bind(console, 'Error connect database'));
// db.once('open', () => {
//   console.log('Connected to database');
// });

// passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Execute at the end
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(process.env.PORT || port, () => {
  console.log(`Serveur running on ${port}`);
});
