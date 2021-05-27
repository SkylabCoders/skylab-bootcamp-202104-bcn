const { Router } = require('express');
const passport = require('passport');
const { isAuthenticated } = require('../utils/auth');

module.exports = () => {
  const authRoutes = Router();

  authRoutes
    .route('/')
    .all(isAuthenticated)
    .get((req, res) => {
      res.render('index');
    });

  authRoutes
    .route('/login')
    .get((req, res) => {
      res.render('login');
    })
    .post(passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
    }));
  return authRoutes;
};
