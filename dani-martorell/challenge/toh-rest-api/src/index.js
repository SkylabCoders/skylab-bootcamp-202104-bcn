const express = require('express');
const heroes = require('./heroes2');

const server = express();
server.use(express.json());

server.get('/heroes', (req, res) => {
  res.send(heroes);
});

server.get('/heroes/:heroId', (req, res) => {
  const { heroId } = req.params;
  const heroToGet = heroes.find((hero) => hero.id === +heroId);
  if (heroToGet) {
    res.json(heroToGet);
  } else {
    res.status(404).json('Invalid Id.');
  }
});

server.listen('2021');
