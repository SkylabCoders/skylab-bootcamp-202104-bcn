const passportLocal = require('passport-local');
const User = require('../model/userModel');

module.exports = function (passport) {
  const LocalStrategy = passportLocal.Strategy;

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
      return cb(null, user);
    });
  });
};
