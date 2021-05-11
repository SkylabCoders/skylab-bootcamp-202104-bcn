const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('tiny'));

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021',
  () => debug(`Server is running in localhost:${chalk.blue('2021')}`));
