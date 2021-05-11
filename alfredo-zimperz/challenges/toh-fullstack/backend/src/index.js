const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');

const server = express();

server.use(cors());
server.use(express.json());

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021', () => debug(`Server is running in ${chalk.yellow('localhost:2021')}`));
