const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(morgan('tiny'));
server.use(cors());

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021',
  () => debug(`Server is running in ${chalk.yellowBright('localhost:2021')}`));
