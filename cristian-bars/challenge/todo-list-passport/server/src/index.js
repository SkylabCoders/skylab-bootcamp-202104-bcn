/* eslint-disable prefer-arrow-callback */
const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
const auth = require('connect-ensure-login');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/userModel');
require('dotenv').config();

const server = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.set('view engine', 'ejs');

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({ username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (id, cb) {
  User.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

server.use(passport.initialize());
server.use(passport.session());
server.use('views', express.static('views'));

server.post('/login',
  passport.authenticate('local', { successRedirect: '/success', failureRedirect: '/login', failureFlash: true }));

server.get('/', auth.ensureLoggedIn({ redirectTo: '/login' }),
  function (req, res) {
    res.render('index', { user: req.user });
  });

server.get('/login', (req, res) => {
  res.render('login');
});

server.get('/success', (req, res) => {
  res.render('success');
});

server.listen('2022',
  () => debug(`Server is running in ${chalk.yellow('localhost:2022')}`));
