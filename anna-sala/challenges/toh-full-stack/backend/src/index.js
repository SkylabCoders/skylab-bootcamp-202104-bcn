const express = require('express');

const server = express();

const cors = require('cors');

server.use(express.json());

server.use(cors());

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021', () => 'Server is running in 2021');
