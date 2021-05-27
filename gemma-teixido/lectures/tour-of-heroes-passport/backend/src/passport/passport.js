const passport = require('passport')();
require('./local.strategy');
const User = require('./userModel');

module.exports = function passportConfig(server) {
  server.use(passport.initialize());
  server.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
