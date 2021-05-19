const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
);

server.use(cors());
server.use(express.json());

server.use(morgan('dev'));

const cvsRouter = require('./routes/cvsRouter');
const contactsRouter = require('./routes/contactsRouter');

server.use('/api/cvs', cvsRouter);
server.use('/api/contacts', contactsRouter);

server.listen('2021', () => debug(`Server is running in ${chalk.yellow('localhost:2021')}`));
