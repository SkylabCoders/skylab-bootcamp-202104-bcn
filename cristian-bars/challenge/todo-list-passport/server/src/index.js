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

server.post('/main',
  passport.authenticate('local'),
  { successRedirect: '/success', failureRedirect: '/main', failureFlash: true });

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

passport.use(new LocalStrategy(
  (userName, password, done) => {
    User.findOne({ userName }, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    cb(err, user);
  });
});

server.use(passport.initialize());
server.use(passport.session());
server.use('views', express.static('views'));

server.post('/main',
  passport.authenticate('local', { successRedirect: '/success', failureRedirect: '/main', failureFlash: true }));

server.get('/', auth.ensureLoggedIn({ redirectTo: '/main' }),
  (req, res) => {
    res.render('index', { user: req.user });
  });

server.get('/main', (req, res) => {
  res.render('main');
});

server.get('/success', (req, res) => {
  res.render('success');
});

server.listen('2022',
  () => debug(`Server is running in ${chalk.yellow('localhost:2022')}`));
