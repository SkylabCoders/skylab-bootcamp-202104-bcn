// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// const User = require('../model/userModel');

// passport.use(new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
// },
// (username, password, done) => {
//   User.findOne({ username }, (err, user) => {
//     if (err) { return done(err); }
//     if (!user) { return done(null, false); }
//     if (!user.verifyPassword(password)) { return done(null, false); }
//     return done(null, user);
//   });
// }));
