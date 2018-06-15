const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
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
const { generateId } = require('./helpers/generateRandomId');
const { userMail, passwordMail } = require('./accountMail');

/* # MODELS # */
const User = require('./models/User.js');
const Service = require('./models/Service.js');

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
    user: userMail,
    pass: passwordMail
  }
});

const mailOptions = {
  from: `Boxi <${userMail}>`, // sender address
  to: 'vincent.deplais@orange.fr', // list of receivers
  subject: 'Test' // Subject line
};

const sendEmail = new Email({
  message: mailOptions,
  transport: smtpTransport,
  send: false,
  preview: true,
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
app.get('/user/getEmailSignup', (req, res) => {
  User.findOne({ emailId: req.query.emailId }, (err, user) => {
    if (err) return err;
    res.send({ email: user.email });
  });
});

app.post('/users/createEmployees', (req, res) => {
  const { emails } = req.body;

  // get all emails sends
  emails.forEach(({ email }) => {
    // create user only with emails to begin
    const emailId = generateId();
    const user = new User({ email, emailId });

    // send mail to employees
    sendEmail.send({
      template: 'example',
      locals: { url: `${baseUrl}/activationAccount/${emailId}` }
    });

    // save user each time
    user.save(err => {
      if (err) {
        throw err;
      }
      console.log('User created');
    });
  });
});

app.post('/user/signup', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (err) return err;

    user.setPassword(password, () => {
      // user validate his account
      user.isVerified = true;

      user.save(err => {
        if (err) throw err;
        const messageInfo = "You correctly sign up, let's login";
        res.status(200).send({ messageInfo });
      });
    });

    return;
  });
});

app.post('/user/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).send({ err });
    if (!user) return res.status(401).send({ message: 'User or password is incorrect' });

    req.login(user, err => {
      if (err) return res.status(500).send({ err });
      return res.send({ success: true, message: 'authentication succeeded' });
    });
  })(req, res, next);
});

// Execute at the end
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(process.env.PORT || port, () => {
  console.log(`Serveur running on ${port}`);
});
