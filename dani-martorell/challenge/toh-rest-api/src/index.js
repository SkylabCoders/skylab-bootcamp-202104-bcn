const express = require('express');
let heroes = require('./heroes2');

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
    res.status(404).send({ message: 'Invalid Id.' });
  }
});

server.delete('/heroes/:heroId', (req, res) => {
  const { heroId } = req.params;
  const heroToDelete = heroes.find((hero) => hero.id === +heroId);
  if (heroToDelete) {
    const updatedHeroes = heroes.filter((hero) => hero.id !== +heroId);
    heroes = [...updatedHeroes];
    res.json(heroes);
  } else {
    res.status(404).json({ message: 'Invalid Id.' });
  }
});

server.post('/heroes', (req, res) => {
  const newHeroBody = req.body;
  const { id: newHeroId } = req.body;
  const isHeroIdAlreadyInUse = heroes.find((hero) => hero.id === +newHeroId);
  if (!isHeroIdAlreadyInUse) {
    heroes.push(newHeroBody);
    res.json(heroes);
  } else {
    res.status(400).json({ message: 'Invalid Id.' });
  }
});

server.put('/heroes/:heroId', (req, res) => {
  const { heroId } = req.params;
  const { body } = req;
  const heroToModify = heroes.find((hero) => hero.id === +heroId);
  if (heroToModify) {
    const updatedHeroes = heroes.map((hero) => {
      if (hero.id === +heroId) {
        return { ...hero, ...body };
      }
      return hero;
    });
    heroes = [...updatedHeroes];
    res.json(heroes);
  } else {
    res.status(404).json({ message: 'Invalid Id.' });
  }
});

server.listen('2021');
