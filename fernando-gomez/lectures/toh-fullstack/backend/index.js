const express = require('express');
const chalk = require('chalk');
const cors = require('cors');
const debug = require('debug')('server');
const morgan = require('morgan');

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021',
  () => debug(`Server is running in ${chalk.bold.magenta('localhost:')} ${chalk.blue(2021)}`));
