const express = require('express');
const session = require('express-session');
const debug = require('debug')('server');
const morgan = require('morgan');
const authRoutes = require('./src/routes/authRouter')();
const userRoutes = require('./src/routes/usersRouter')();

require('dotenv').config();

require('./src/ddbb/mongoose.config');

const server = express();
const port = process.env.PORT || 4000;

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

require('./src/passport/passport.config')(server);

server.set('view engine', 'ejs');
server.set('views', './src/views');
server.use('/', authRoutes);
server.use('/api/users', userRoutes);
server.listen(port, debug(`server is running on port ${port}`));
