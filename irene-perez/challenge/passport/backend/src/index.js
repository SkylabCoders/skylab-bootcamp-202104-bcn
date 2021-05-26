const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('server');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DDBB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const heroesRouter = require('./routes/heroesRouter');

server.use('/hero', heroesRouter);

server.listen('2021',
  () => debug(`Server is running in ${chalk.bold.bgMagenta('localhost:2021')}`));
