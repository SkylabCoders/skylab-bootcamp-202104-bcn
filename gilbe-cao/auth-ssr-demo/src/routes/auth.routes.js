const { Router } = require('express');

module.exports = () => {
  const authRoutes = Router();

  authRoutes
    .route('/')
    .get((req, res) => {
      res.render('home');
    });

  authRoutes
    .route('/login')
    .get((req, res) => {
      res.render('login');
    })
    .post((req, res) => {
      res.send('login works');
    });

  return authRoutes;
};
