const cors = require('cors');
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(process.env.DDBB_URL);

const server = express();
server.use(cors());
server.use(express.json());

server.use(morgan('tiny'));

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021', () => debug(`Server is running in ${chalk.yellow('localhost: 2021')}`));
