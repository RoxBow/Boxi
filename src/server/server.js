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
const nodemailer = require('nodemailer');
const Email = require('email-templates');

const port = 3001; // set port server

const { urlMongoDB } = require('./database');
const { baseUrl } = require('./constants');

/* # MODELS # */
const User = require('./models/User.js');

/*
  Add this line before express' response to set CORS header:
  res.header("Access-Control-Allow-Origin", "*");
*/

// Complete here with url mongoDB
mongoose.connect(urlMongoDB);
const db = mongoose.connection;

// security (limit number request)
const apiLimiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 150,
  delayMs: 0 // disabled
});

const smtpTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: 'bonjour.boxi@gmail.com',
    pass: 'Boxiproject2018'
  }
});

const mailOptions = {
  from: 'Boxi <bonjour.boxi@gmail.com>', // sender address
  to: 'vincent.deplais@orange.fr', // list of receivers
  subject: 'Test' // Subject line
};

const email = new Email({
  message: mailOptions,
  transport: smtpTransport,
  send: false,
  preview: false,
  views: {
    root: __dirname + '/emails',
    options: {
      extension: 'ejs'
    }
  }
});

// stop all next request from 150
app.use('/', apiLimiter);

// configure cors
app.use(cors());

// set helmet security
app.use(helmet());

// load statics files
app.use('/contrib', express.static(path.join(__dirname, 'contrib')));
app.use('/images', express.static(path.join(__dirname, '../client/images')));
app.use(express.static('dist'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

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

db.on('error', console.error.bind(console, 'Error connect database'));
db.once('open', () => {
  console.log('Connected to database');
});

// passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Active account when user click in active mail
app.get('/activationAccount/:emailId', (req, res) => {
  console.log('Email id: ', req.params.emailId);
});

app.post('/users/createEmployees', (req, res) => {
  console.log(req);
});

// Execute at the end
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(process.env.PORT || port, () => {
  console.log(`Serveur running on ${port}`);
});

email.send({
  template: 'example',
  locals: { url: `${baseUrl}/activationAccount/<0947e266-00e1-bfb9-8082-fae591ce3d7e@gmail.com>` }
});
