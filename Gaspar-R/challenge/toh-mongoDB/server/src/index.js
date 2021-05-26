/* eslint-disable max-len */
const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const heroesRouter = require('./routes/heroesRouter');

const server = express();

server.set('view engine', 'ejs');
server.use(express.urlencoded({ extended: false })); // para parsear el body
server.use('/public', express.static('public')); // para que utilice el css que esta en public.

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    process.env.DDBB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => debug(' Mongoose is connected')
  );
} catch (e) {
  debug('could not connect');
}

server.get('/', (req, res) => { // for rendering index
  res.render('index');
});

server.get('/about', (req, res) => { // for rendering about
  res.render('about');
});

server.get('/form', (req, res) => {
  res.render('form');
});

server.post('/home', (req, res) => {
  const { name, surname } = req.body; // renderiza home con los datos que se le pasan del formulario (req.body)
  res.render('home', {
    name,
    surname
  });
});

server.use(cors());

server.use(express.json());
server.use(morgan('tiny'));

server.use('/heroes', heroesRouter);

server.listen('2022',
  () => debug(`Server is running in ${chalk.magentaBright('2022')}`));
