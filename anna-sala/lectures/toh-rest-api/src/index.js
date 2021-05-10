const express = require('express');
let heroes = require('./superHeroData');

const profiles = [
  { name: 'Anna', age: 23, gender: 'female' },
  { name: 'Laura', age: 30, gender: 'female' },
];

const server = express();
server.use(express.json());

server.get('/heroes', (req, res) => {
  res.json(heroes);
});

server.get('/heroes/:heroId', (req, res) => {
  const heroById = heroes.find((hero) => hero.id === +req.params.heroId);
  if (heroById) {
    res.status(302);
    res.json(heroById);
  } else {
    res.status(404);
    res.json(heroById);
  }
});

server.post('/heroes', (req, res) => {
  const newHero = req.body;
  heroes.push(newHero);
  res.json(heroes);
});

server.put('/heroes/:heroId', (req, res) => {
  const { heroId } = req.params;
  const updateData = req.body;
  heroes = heroes.map((hero) => {
    if (hero.id === +heroId) {
      return {
        ...hero,
        ...updateData,
      };
    }
    return hero;
  });

  res.json(heroes);
});

server.delete('/heroes/:heroId', (req, res) => {
  const { heroId } = req.params;
  heroes = heroes.filter((hero) => +heroId !== hero.id);
  res.json(heroes);
});

server.get('/users', (req, res) => {
  res.send('Hola Soy un usuario :D');
});

server.get('/profiles', (req, res) => {
  res.json(profiles);
});

server.get('/profiles/:personName', (req, res) => {
  const response = profiles.find(
    (user) => user.name.toLowerCase() === req.params.personName.toLowerCase(),
  );
  if (response) {
    res.json(response);
  } else {
    res.send(`There are no users with name ${req.params.personName}`);
  }
});

server.listen('2021');
