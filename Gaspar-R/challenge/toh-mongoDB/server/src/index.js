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

// ------***otra forma de hacer connect, de esta
// manera me avisa cuando la conexion es correcta por consola ----****/

try {
  // Connect to the MongoDB cluster
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

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2022',
  () => debug(`Server is running in ${chalk.magentaBright('2022')}`));
