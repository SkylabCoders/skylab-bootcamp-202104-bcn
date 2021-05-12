const debug = require('debug')('app:productsController');
const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
require('dotenv').config();
const mongoose = require('mongoose');

const server = express();
try{
  mongoose.connect(
    process.env.DDBB_URL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => debug('Mongoose is connected')
  );
}catch (e){
  debug('error');
};


server.use(cors());
server.use(express.json());

const productsRouter = require('./routes/productsRouter');

server.use('/products', productsRouter);

server.listen('2022',
  // eslint-disable-next-line no-console
  () => console.log(`Server is running in ${chalk.yellow('localhost:2022')}`));
