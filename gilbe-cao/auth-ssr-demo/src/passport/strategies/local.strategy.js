const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../../models/user.model');

module.exports = function localStrategyConfig() {
  passport.use(
    new LocalStrategy.Strategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      (email, password, done) => {
        User.findOne({ email }).then((error, user) => {
          if (error) {
            return done(error);
          }

          if (!user || !user.isValidPassword(password)) {
            return done(null, false);
          }

          return done(null, user);
        });
      },
    ),
  );
};
