/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const chalk = require('chalk');

const server = express();

server.use(cors());
server.use(express.json());

const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021', () => console.log(`Server is running in ${chalk.yellow('localhost:2021')}`));
