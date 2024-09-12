const { Router } = require('express');
const User = require('../models/user.model');
const { isAuthenticated } = require('../utils/auth');

module.exports = () => {
  const userRoutes = Router();

  userRoutes
    .route('/')
    .all(isAuthenticated)
    .post(async (req, res) => {
      try {
        const user = await User.create(req.body);
        res.send(user);
      } catch (error) {
        res.status(500);
        res.send(error);
      }
    });

  return userRoutes;
};
