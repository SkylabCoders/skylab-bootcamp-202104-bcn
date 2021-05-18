const cors = require('cors');
const express = require('express');

const server = express();
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');

server.use(cors());

server.use(express.json());

server.use(morgan('dev'));

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021', () => debug(`Server is running in ${chalk.blue('localhost: 2021')}`));
