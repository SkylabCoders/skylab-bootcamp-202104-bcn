const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/routes')
require('dotenv').config();
require('./controller/loginController')
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.set('view engine', 'ejs');

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.use(express.urlencoded({ extended: false }));
server.use(routes);



server.listen('2022',
  () => console.log(`Server is running in ${chalk.yellow('localhost:2022')}`));