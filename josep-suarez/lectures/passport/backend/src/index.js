const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
const auth = require('connect-ensure-login');
require('dotenv').config();
const server = express();
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

server.use(express.urlencoded({extended: false}))
server.use(express.json())
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
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function (user,cb){
  cb(null,user)
})

passport.deserializeUser(function(id, cb){
  User.findById(id, function(err,user){
    if(err) {return cb(err)}
    cb(null,user)
  })
})

server.use(passport.initialize());
server.use(passport.session())
server.use('views', express.static('views'))

server.post('/login',
  passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true })
);

server.get('/',
  auth.ensureLoggedIn({ redirectTo: '/login' }),
  function(req, res){
    res.render('index', { user: req.user });
  });
server.get('/login',(req, res)=>{
  res.render('login');
});

server.listen('2021',() => debug(`Server is running in ${chalk.yellow('DDBB_URL')}`));
