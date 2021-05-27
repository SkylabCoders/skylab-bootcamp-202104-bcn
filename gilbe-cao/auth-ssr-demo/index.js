const express = require('express');
const { connect } = require('mongoose');
const debug = require('debug')('app');
require('dotenv').config();

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
).then(
  () => debug('database connection stablished'),
  (error) => debug('database connection error', error),
);

const app = express();
const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  res.send('login works');
});

app.listen(port, debug(`server is running on port ${port}`));
