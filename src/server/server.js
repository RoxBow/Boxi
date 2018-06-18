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

const { urlMongoDB } = require('./database');
const { userMail, passwordMail, host } = require('./accountMail');
const { port, baseUrl } = require('./constants');

/* # DATA # */
const { categories } = require('./mock/listCategory.json');
const { services } = require('./mock/listService.json');

/* # HELPERS # */
const { generateId } = require('./helpers/generateRandomId');

/* # MODELS # */
const User = require('./models/User.js');
const Service = require('./models/Service.js');

/*
  Add this line before express' response to set CORS header:
  res.header("Access-Control-Allow-Origin", "*");
*/

mongoose.connect(urlMongoDB);
const db = mongoose.connection;

// security (limit number request)
const apiLimiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 2000,
  delayMs: 0 // disabled
});

const smtpTransport = nodemailer.createTransport({
  host,
  auth: {
    user: userMail,
    pass: passwordMail
  }
});

const mailOptions = {
  from: `Boxi <${userMail}>`, // sender address
  to: 'vincent.deplais@orange.fr', // list of receivers
  subject: 'Activation compte' // Subject line
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

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* ### USER ### */

// Restrict user access
const checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    //req.isAuthenticated() will return true if user is logged in
    next();
  } else {
    console.log('Not authenticated');
    res.redirect('/');
  }
};

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
    // create user only with email to begin
    const emailId = generateId();
    const user = new User({ email, emailId });

    // send mail to employees
    sendEmail.send({
      template: 'example',
      locals: { url: `${baseUrl}/activationAccount/${emailId}` }
    });

    // save user each time
    user.save(err => {
      if (err) throw err;
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

      // update last connection date
      user.lastConnection = new Date();
      user.save();

      const messageInfo = "You correctly login in, let's login";
      return res.status(200).send({ messageInfo });
    });
  })(req, res, next);
});

app.get('/user/checkAuthentication', (req, res) => {
  const isAuthenticated = req.isAuthenticated();
  let cart = [];

  if (isAuthenticated && req.session.cart) {
    cart = req.session.cart;
  }

  res.status(200).send({ isAuthenticated, cart });
});

app.get('/user/getService', (req, res) => {
  if (req.user) {
    User.findOne({ _id: req.user._id })
      .populate('service')
      .exec((err, user) => {
        if (err) throw err;
        res.status(200).send({ services: user.service });
      });
  }
});

/* ### SERVICE ### */

app.get('/service/getListService', (req, res) => {
  res.send({ listService: services });
});

app.get('/service/getListCategory', (req, res) => {
  const { typeService } = req.query;
  let listCategory = [];

  switch (typeService) {
    case 'newspaper':
      listCategory = categories.newspaper;
      break;
    default:
      break;
  }

  res.send({ listCategory });
});

app.get('/service/getResultService', (req, res) => {
  const { typeService, categoryService } = req.query;

  Service.find({ type: typeService, category: categoryService }, (err, services) => {
    if (err) return err;
    res.send({ products: services });
  });
});

/* ### CART ### */

app.use((req, res, next) => {
  if (req.user && !req.session.cart) {
    req.session.cart = {
      listProduct: [],
      totalPrice: 0
    };
  }
  next();
});

app.post('/cart/addProduct', (req, res) => {
  const { product } = req.body;

  req.session.cart.totalPrice = req.session.cart.totalPrice + product.price;
  req.session.cart.listProduct.push(product);
  req.session.save();

  res.send({
    cart: req.session.cart.listProduct,
    totalPrice: req.session.cart.totalPrice
  });
});

app.post('/cart/removeProduct', (req, res) => {
  const { product } = req.body;

  req.session.cart.totalPrice = req.session.cart.totalPrice - product.price;
  req.session.cart.listProduct = req.session.cart.listProduct.filter(
    productInCart => productInCart.productId !== product.productId
  );
  req.session.save();

  res.send({ cart: req.session.cart.listProduct, totalPrice: req.session.cart.totalPrice });
});

app.post('/cart/paymentService', (req, res) => {
  // user has no cart or it's empty
  if (!req.session.cart || !req.session.cart.listProduct) {
    const error = "Vous n'avez pas de panier actuellement";
    return res.send({ error });
  }

  User.findOne({ _id: req.user._id }, (err, user) => {
    user.service = req.session.cart.listProduct;
    user.save(err => {
      if (err) throw err;

      req.session.cart.totalPrice = 0;
      req.session.cart.listProduct = [];
      req.session.save();
    });
  });
});

app.get('/cart/getCart', (req, res) => {
  if(req.session.cart && req.session.cart.listProduct){
    return res.send({ cart: req.session.cart.listProduct, totalPrice: req.session.cart.totalPrice });
  } else {
    const error = "Vous n'avez pas de panier actuellement";
    return res.send({ error });
  }
});

// Execute at the end
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(process.env.PORT || port, () => {
  console.log(`Serveur running on ${port}`);
});
