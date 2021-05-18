const express = require('express');
require('dotenv').config();

const server = express();
const PORT = 2023;

const cors = require('cors');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('server');
const mongoose = require('mongoose');

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
);

const tasksRouter = require('./routes/tasksRouter');

server.use('/tasks', tasksRouter);

server.listen(PORT, () => debug(`Server for TO-DO-LIST is running in ${chalk.bgCyan(PORT)}`));
