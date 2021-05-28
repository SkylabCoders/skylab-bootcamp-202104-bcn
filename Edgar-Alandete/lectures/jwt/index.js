const express = require('express');
const passport = require('passport');
const debug = require('debug')('app');
const morgan = require('morgan');
require('dotenv').config();
const authRoutes = require('./src/routes/auth.routes')();
const secureRoute = require('./src/routes/secure.routes');

require('./src/ddbb/mongoose.config');

const server = express();
const port = process.env.PORT || 4000;

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

require('./src/passport/passport.config')(server);

server.use('/', authRoutes);
server.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

server.listen(port, debug(`server is running on port ${port}`));
