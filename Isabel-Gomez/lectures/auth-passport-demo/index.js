const express = require('express');
const session = require('express-session');
const debug = require('debug')('app');
const morgan = require('morgan');
const authRoutes = require('./src/routes/auth.routes')();
const userRoutes = require('./src/routes/user.routes')();

require('dotenv').config();

require('./src/ddbb/mongoose.config');

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

require('./src/passport/passport.config')(app);

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', authRoutes);
app.use('/api/users', userRoutes);

app.listen(port, debug(`server is running on port ${port}`));
