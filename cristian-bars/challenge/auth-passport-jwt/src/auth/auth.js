const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const User = require('../models/userModel');

passport.use(
  new LocalStrategy(
    (username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  )
);
