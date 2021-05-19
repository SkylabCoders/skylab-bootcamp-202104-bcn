const express = require('express');
const cors = require('cors');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
const port = process.env.PORT;

try {
  mongoose.connect(
    process.env.DDBB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => debug('Mongoose is connected'),
  );
} catch (e) {
  debug('could not connect');
}

server.use(cors());

server.use(express.json());
server.use(morgan('tiny'));

// const productsRouter = require('./routes/productsRouter');

// server.use('/products', productsRouter);

server.listen(port,
  () => debug(`Server is running in ${port}`));
