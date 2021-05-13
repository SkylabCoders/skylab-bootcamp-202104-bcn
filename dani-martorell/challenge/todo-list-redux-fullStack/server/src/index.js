const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();

try {
  mongoose.connect(
    process.env.DDBB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(' Mongoose is connected'),
  );
} catch (e) {
  console.log('could not connect');
}

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

const tasksRouter = require('./routes/tasksRouter');

server.use('/tasks', tasksRouter);

server.listen('2020', () => console.log('Server is running in localhost:2020'));
