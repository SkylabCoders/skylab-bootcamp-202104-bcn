const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();

const port = '2022';

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
const productsRouter = require('./routes/productsRouter');

server.use('/products', productsRouter);

server.listen(port, () => debug(`Server is running in localhost:${chalk.cyanBright(port)}`));
