const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
// const passport = require('passport');
const authRoutes = require('./src/routes/auth.routes');
const usersRoutes = require('./src/routes/user.routes');
const productsRoutes = require('./src/routes/products.routes');

require('dotenv').config();

require('./src/passport/passport.config');

require('./src/database/mongoose.config');

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', authRoutes);
app.use(
  '/api/users',
  // passport.authenticate('jwt', { session: false }),
  usersRoutes,
);
app.use(
  '/api/products',
  productsRoutes,
);

app.listen(port, debug(`server is running on port ${port}`));
