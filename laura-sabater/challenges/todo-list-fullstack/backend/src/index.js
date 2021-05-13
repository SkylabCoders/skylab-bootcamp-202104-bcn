const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');

require('dotenv').config();

const server = express();

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const tasksRouter = require('./routes/tasksRouter');

server.use('/tasks', tasksRouter);

server.listen('2021', () => debug(`Server is running in ${chalk.yellow('localhost:2021')}`));