const express = require('express');

// const https = require('http');
// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.end('Hola mundo!');
// });

const server = express();
server.use(express.json());

// un fichero por cada sustantivo de la api
const heroesRouter = require('./routes/heroesRouter');

server.use('/heroes', heroesRouter);

server.listen('2021');
