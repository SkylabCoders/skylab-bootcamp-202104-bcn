const express = require('express');
require('dotenv').config();

const server = express();
const port = 3535;

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

const cvRouter = require('./routes/cvRouter');

server.use('/curriculum', cvRouter);

server.listen(port, () => debug(`Server is running in ${chalk.red(port)}`));
