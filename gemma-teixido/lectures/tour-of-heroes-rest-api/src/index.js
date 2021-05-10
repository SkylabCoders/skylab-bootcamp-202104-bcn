// const http = require('http');
const express = require('express');

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.end('Hola mundo!');
// });

const server = express();

server.get('/', (req, res) => { res.send('Skylab mola!!!'); });
server.get('/heroes', (req, res) => { res.send('Heroes mola'); });

server.listen('2021');
