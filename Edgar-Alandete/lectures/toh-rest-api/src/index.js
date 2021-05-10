const express = require('express');
const heroes = require('./heroes');

const server = express();
server.use(express.json());

const routeCallback = (req, res) => { res.send('Skylab rules'); };
const routeHeroesCallback = (req, res) => { res.json(heroes); };
const routeOneHeroCallback = (req, res) => {
  const heroById = heroes.find((hero) => hero.id === +req.params.heroId);
  res.json(heroById);
};

server.get('/', routeCallback);
server.get('/heroes', routeHeroesCallback);
server.get('/heroes/:heroId', routeOneHeroCallback);
server.post('/heroes', (req, res) => {
  const newHero = req.body;
  heroes.push(newHero);
  res.json(heroes);
});
server.listen('2021');
