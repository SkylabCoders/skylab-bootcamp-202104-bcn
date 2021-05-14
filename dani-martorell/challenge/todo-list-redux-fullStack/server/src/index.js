const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const debug = require('debug')('server');
require('dotenv').config();

const server = express();

try {
  mongoose.connect(
    process.env.DDBB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => debug(' Mongoose is connected'),
  );
} catch (e) {
  debug('could not connect');
}

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const tasksRouter = require('./routes/tasksRouter');

server.use('/tasks', tasksRouter);

server.listen('2020', () => debug('Server is running in localhost:2020'));
