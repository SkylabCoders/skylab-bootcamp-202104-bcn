const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

const server = express();
mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.use(express.json());
server.use(cors());
server.use(morgan('tiny'));

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021', () => debug(`Server is running in ${chalk.yellow('localhost: 2021')}`));
