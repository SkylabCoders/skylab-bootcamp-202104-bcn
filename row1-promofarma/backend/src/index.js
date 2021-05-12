const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
require('dotenv').config();
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.h7xul.mongodb.net/team-row-1-promofarma',
  { useUnifiedTopology: true }, { useNewUrlParser: true })

server.use(cors());
server.use(express.json());

const productsRouter = require('./routes/productsRouter');

server.use('/products', productsRouter);

server.listen('2022',
  () => console.log(`Server is running in ${chalk.yellow('localhost:2022')}`));
