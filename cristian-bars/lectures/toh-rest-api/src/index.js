// const http = require('http');
const express = require('express');

/* const server = http.createServer((req, res) => {
  console.log(req);
  res.end('Hola Cristian');
}); */

const server = express();

server.get('/', (req, res) => {
  res.send('Hola Cristian de nou!');
});

server.listen('2021');
