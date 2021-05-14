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
);

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const tasksRouter = require('./routes/taskRouter');

server.use('/tasks', tasksRouter);

server.listen('2024',
  () => debug(`Server is running in ${chalk.yellow('localhost:2024')}`));
