const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
require('./passport/local.strategy')(passport);

const auth = require('connect-ensure-login');
require('dotenv').config();

const server = express();

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
);

server.set('view engine', 'ejs');

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(require('morgan')('combined'));
server.use(require('body-parser').urlencoded({ extended: true }));
server.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

server.use(passport.initialize());
server.use(passport.session());
server.use('/views', express.static('views'));

server.get('/',
  auth.ensureLoggedIn({ redirectTo: '/login' }),
  (req, res) => {
    res.render('index', { user: req.user });
  });

server.post('/login',
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
  }));

server.get('/', (req, res) => res.render('index'));
server.get('/login', (req, res) => res.render('login'));
server.get('/home', (req, res) => res.render('home'));

server.listen('2021', () => console.log('Server is running in localhost:2021'));
