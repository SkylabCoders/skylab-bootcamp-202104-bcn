const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const debug = require('debug')('app');
const morgan = require('morgan');
const UserModel = require('./models/userModel');
const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');

require('dotenv').config();
require('./auth/auth');
require('./database/mongoose.config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use('/', routes);

mongoose.connection.on('error', (error) => console.log(error));
mongoose.Promise = global.Promise;

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// Handle errors.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.get('/', (req, res) => { res.send('works'); });
app.listen(port, debug(`server is running on port ${port}`));
