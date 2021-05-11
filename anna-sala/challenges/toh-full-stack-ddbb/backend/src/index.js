const express = require('express');

const server = express();

const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');

server.use(express.json());

server.use(cors());
server.use(morgan('dev'));

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021', () => debug(`Server is running in ${chalk.bgCyan('2021')}`));
