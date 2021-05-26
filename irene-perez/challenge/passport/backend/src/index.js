const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('server');
const mongoose = require('mongoose');
const passport = require('passport');
const auth = require('connect-ensure-login');
const LocalStrategy = require('passport-local').Strategy;
require('dotenv').config();

const User = require('./model/userModel');

const server = express();

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.set('view engine', 'ejs');

mongoose.connect(process.env.DDBB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

server.use(passport.initialize());
server.use(passport.session());
server.use('views', express.static('views'));

server.post('/login',
  passport.authenticate('local', { successRedirect: '/success', failureRedirect: '/login', failureFlash: true }));

server.get('/',
  auth.ensureLoggedIn({ redirectTo: '/login' }),
  (req, res) => {
    res.render('index', { user: req.user });
  });
server.get('/login', (req, res) => {
  res.render('login');
});
server.get('/success', (req, res) => {
  res.render('success');
});

server.listen('2021',
  () => debug(`Server is running in ${chalk.bold.bgMagenta('DDBB_URL')}`));
