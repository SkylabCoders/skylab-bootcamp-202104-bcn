const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
const port = 1305;

try {
  mongoose.connect(
    process.env.DDBB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => debug(' Mongoose is connected')
  );
} catch (e) {
  debug('could not connect');
}

server.use(cors());

server.use(express.json());
server.use(morgan('tiny'));

const tasksRouter = require('./routes/tasksRouter');

server.use('/tasks', tasksRouter);

server.listen(port,
  () => debug(`Server is running in ${chalk.magentaBright(port)}`));
