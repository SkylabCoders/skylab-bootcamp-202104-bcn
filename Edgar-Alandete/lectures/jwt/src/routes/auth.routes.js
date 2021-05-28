/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = () => {
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
            debugger;
            if (err || !user) {
              const error = new Error('An error occurred.');

              return next(error);
            }

            req.login(
              user,
              { session: false },
              async (error) => {
                if (error) return next(error);

                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, 'TOP_SECRET');

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

  return authRoutes;
};
