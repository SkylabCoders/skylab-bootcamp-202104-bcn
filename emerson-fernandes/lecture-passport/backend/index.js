const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');

require('dotenv').config();

const server = express();

server.use(cookieParser('secreto'));

server.use(session({ secret: 'secreto' }));

server.use(passport.initialize());
server.use(passport.session());

// eslint-disable-next-line consistent-return
passport.use(new LocalStrategy((username, password, done) => {
  if (username === 'emerson' && password === '12345') {
    return done(null, { id: 1, name: 'emerson' });
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, { id: 1, name: 'emerson' });
});

server.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.set('view engine', 'ejs');

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

// eslint-disable-next-line consistent-return
server.get('/', (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}, (req, res) => {
  res.render('index');
});

server.get('/register', (req, res) => {
  res.render('register');
});

server.get('/login', (req, res) => {
  res.render('login');
});

server.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

server.listen('1818', () => debug(`Server is running in ${chalk.blue('localhost:1818')}`));
