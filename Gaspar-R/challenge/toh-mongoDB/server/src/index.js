/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
// mongoose.connect(
//   process.env.DDBB_URL,
//   {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//   }
// );

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    process.env.DDBB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(' Mongoose is connected')
  );
} catch (e) {
  console.log('could not connect');
}

server.use(cors());

server.use(express.json());
server.use(morgan('tiny'));

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2022',
  () => debug(`Server is running in ${chalk.magentaBright('2022')}`));
