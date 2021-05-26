const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const mongoose = require('mongoose');
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

const tohRouter = require('./routes/tohRouter');

server.use('/toh', tohRouter);

server.listen('12345', () => debug(`Server is running in ${chalk.blue('localhost:12345')}`));
