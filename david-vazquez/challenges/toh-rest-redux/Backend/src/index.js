const cors = require('cors');
const express = require('express');

const server = express();
server.use(cors());
server.use(express.json());

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021');
