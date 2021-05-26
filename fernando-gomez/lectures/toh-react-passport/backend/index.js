const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const auth = require('connect-ensure-login');
const User = require('./src/model/userModel');

const server = express();

require('dotenv').config();

server.use(express.urlencoded({ extended: false }));
server.set('view engine', 'ejs');
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
);

const heroesRouter = require('./src/routes/heroesRouter');

server.get('/', (req, res) => {
  res.redirect('/login');
});

server.get('/login', (req, res) => {
  res.render('index');
});

server.post('/logout', (req, res) => {
  res.redirect('/login');
});

server.use('/heroes', heroesRouter);

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

server.post('/login',
  passport.authenticate('local', {
    successRedirect: '/user',
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
server.get('/user', (req, res) => {
  res.render('loggedIn');
});

server.listen('2021',
  () => debug(`Server is running in ${chalk.yellow('localhost:2021')}`));
