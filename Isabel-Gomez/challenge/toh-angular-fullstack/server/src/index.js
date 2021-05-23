const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const server = express();
const port = 2305;

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
const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen(port, () => debug(`Server is running in localhost:${port}`));
