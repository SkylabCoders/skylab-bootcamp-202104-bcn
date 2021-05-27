const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const { connect } = require('mongoose');
require('dotenv').config();

const server = express();

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const motosRouter = require('./routes/motosRouter');

server.use('/motos', motosRouter);

server.listen('2021',
  () => debug(`Server is running in ${chalk.yellow('DDBB_URL')}`));
