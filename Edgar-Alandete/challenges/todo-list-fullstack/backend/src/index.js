const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => debug('Mongoose is connected'),
);
server.use(cors());
server.use(express.json());

server.use(morgan('tiny'));
const tasksRouter = require('./routes/taskRouter');

server.use('/tasks', tasksRouter);

server.listen('2021', () => debug(`Server is running in ${chalk.blue('2021')}`));
