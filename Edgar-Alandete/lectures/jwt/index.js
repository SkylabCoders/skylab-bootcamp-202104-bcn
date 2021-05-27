const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
require('dotenv').config();

require('./src/ddbb/mongoose.config');

const server = express();
const port = process.env.PORT || 4000;

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(port, debug(`server is running on port ${port}`));
