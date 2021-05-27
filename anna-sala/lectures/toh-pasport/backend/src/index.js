/* eslint-disable consistent-return */
const express = require('express');
const auth = require('connect-ensure-login');
require('dotenv').config();

const server = express();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const port = 2424;

const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const chalk = require('chalk');
const debug = require('debug')('server');
const User = require('./model/userModel');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.set('view engine', 'ejs');
server.use(cors());
server.use(morgan('dev'));

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
);

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  },
));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

server.use(passport.initialize());
server.use(passport.session());
server.use('views', express.static('views'));

const heroesRouter = require('./routes/heroesRouter');

server.use('/api/heroes', heroesRouter);

server.post('/login',
  passport.authenticate('local', {
    successRedirect: '/success',
    failureRedirect: '/login',
    failureFlash: true,
  }));

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

server.listen(port, () => debug(`Server is running in ${chalk.bgCyan(port)}`));
