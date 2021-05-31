const { Router } = require('express');

const authRoutes = Router();

authRoutes.get(
  '/profile',
  (req, res) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.alias,
      token: req.headers.authorization
    });
  }
);

module.exports = authRoutes;
