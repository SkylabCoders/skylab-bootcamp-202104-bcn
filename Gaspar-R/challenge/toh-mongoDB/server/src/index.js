/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('server');

require('dotenv').config();
require('./passport/local.strategy')(passport);

const auth = require('connect-ensure-login');
require('dotenv').config();

const server = express();

const port = 2025;

/** *************esto lo copie de internet, y escuche que habia que usarlo, pero no se donde ni como ni para que.*********** */

//   server.use(session({
//     secret: 'caca',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
//   }));

// // Passport Local Strategy
// passport.use(User.createStrategy());

// // To use with sessions
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// server.use('/heroes', heroesRouter);

//* ****************************** */

try {
  // Connect to the MongoDB cluster w/ try catch and debug message//
  mongoose.connect(
    process.env.DDBB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => debug(' Mongoose is connected')
  );
} catch (e) {
  debug('could not connect');
}

server.use(cors());
server.set('view engine', 'ejs');
server.use(morgan('tiny'));
server.use(express.json());

server.use(express.urlencoded({ extended: false })); // para parsear el body
server.use(require('body-parser').urlencoded({ extended: true })); // parser middleware
server.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false })); // session middleware

server.use(passport.initialize());
server.use(passport.session());
server.use('/views', express.static('views')); // para que utilice el css que esta en views(si tuviera).

server.get('/',
  auth.ensureLoggedIn({ redirectTo: '/loginForm' }),
  (req, res) => {
    res.render('index', { user: req.user });
  });

server.post('/loginForm',
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/loginForm'
  }));

server.post('/home', (req, res) => {
  const { username, password } = req.body; // renderiza home con los datos que se le pasan del formulario (req.body)
  res.render('home.ejs', {
    username,
    password
  });
});

server.get('/', (req, res) => res.render('index')); // for rendering index
server.get('/loginForm', (req, res) => res.render('loginForm'));
server.get('/home', (req, res) => res.render('home'));

server.listen(port,
  () => debug(`Server is running in ${chalk.magentaBright(port)}`));
