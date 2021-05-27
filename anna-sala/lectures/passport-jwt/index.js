const express = require('express');
const debug = require('debug')('server');
const morgan = require('morgan');

require('dotenv').config();

const server = express();
const port = process.env.PORT || 4000;

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => { res.send('works'); });

server.listen(port, debug(`server is running on port ${port}`));
