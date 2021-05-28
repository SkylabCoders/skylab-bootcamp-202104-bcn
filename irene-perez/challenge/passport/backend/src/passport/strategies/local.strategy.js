const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../../model/userModel');

module.exports = function localStrategyConfig() {
  passport.use(
    new LocalStrategy.Strategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      (email, password, done) => {
        User.findOne({ email }).then((user) => {
          if (!user || !user.isValidPassword(password)) {
            return done(null, false);
          }
          return done(null, user);
        }, (error) => done(error));
      }
    )
  );
};
