const express = require('express');
const cors = require('cors');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
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

const usersRouter = require('./routes/usersRouter');

server.use('/api/users', usersRouter);

server.listen(process.env.PORT, () => debug(`Server is running in ${process.env.PORT}`));
