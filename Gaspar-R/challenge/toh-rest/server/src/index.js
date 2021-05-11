
const express = require('express');
const cors = require('cors') ;


const server = express();
server.use(cors());

server.use(express.json());

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2022', () => 'Server is running in 2022');


