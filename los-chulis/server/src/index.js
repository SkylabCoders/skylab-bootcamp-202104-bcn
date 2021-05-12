const express = require('express');
require('dotenv').config();

const server = express();
const port = 2300;

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

const productsRouter = require('./routes/productsRouter');

server.use('/products', productsRouter);

server.listen(port, () => debug(`Server is running in ${chalk.bgCyan(port)}`));