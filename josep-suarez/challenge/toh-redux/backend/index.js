const express = require('express')

const server = express();
server.use(express.json());
const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);
server.listen('2021');