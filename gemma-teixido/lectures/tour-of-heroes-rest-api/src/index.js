// const http = require('http');
const express = require('express');

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.end('Hola mundo!');
// });

const server = express();

const users = [{ name: 'Pepe' }];

server.get('/', (req, res) => { res.send('Skylab mola!!!'); });
server.get('/heroes', (req, res) => { res.send('Heroes mola'); });
server.get('/users', (req, res) => { res.json(users); });
server.get('/users/:userName', (req, res) => {
  const response = users.find(
    (user) => user.name.toLowerCase() === req.params.userName.toLowerCase()
  );
  if (response) {
    res.json(response);
  } else {
    res.send(`There are no users with name: ${req.params.userName}`);
  }
});

server.listen('2021');
