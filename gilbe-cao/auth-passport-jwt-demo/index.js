const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const passport = require('passport');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

require('dotenv').config();

require('./src/passport/passport.config');

require('./src/ddbb/mongoose.config');

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));

app.use('/', authRoutes);
app.use(
  '/user',
  passport.authenticate('jwt', { session: false }),
  userRoutes,
);

app.listen(port, debug(`server is running on port ${port}`));
