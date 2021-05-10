// const http = require('http');
const express = require('express');

/* const server = http.createServer((req, res) => {
  console.log(req);
  res.end('Hola Cristian');
}); */

const server = express();

const users = [{ name: 'Cristian' }, { name: 'Irina' }];

server.get('/', (req, res) => { res.send('Hola Cristian de nou!'); });
server.get('/heroes', (req, res) => { res.send('Herois!!'); });
server.get('/users', (req, res) => { res.json(); users; });
server.get('/users/:userName', (req, res) => {
  const response = users.find((user) => user.name.toLowerCase() === req.params.userName.toLowerCase());
  if (response) {
    res.json(response);
  } else {
    res.send('There are no users with name: ${req.params.userName}');
  }
});

server.listen('2021');
