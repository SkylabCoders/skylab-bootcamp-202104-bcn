const passport = require('passport');
const { Router } = require('express');
const jwt = require('jsonwebtoken');

const authRoutes = Router();

authRoutes.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res) => {
    res.json({
      message: 'Signup successful',
      user: req.user,
    });
  },
);

authRoutes.post(
  '/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');

            return next(error);
          }

          return req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const data = { _id: user._id, email: user.email };
              const token = jwt.sign({ user: data }, process.env.JWT_SECRET);

              return res.json({ token });
            },
          );
        } catch (error) {
          return next(error);
        }
      },
    )(req, res, next);
  },
);

module.exports = authRoutes;
