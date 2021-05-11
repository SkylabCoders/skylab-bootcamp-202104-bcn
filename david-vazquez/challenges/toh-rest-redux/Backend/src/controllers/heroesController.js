const debug = require('debug')('server:heroesController');
let heroes = require('../heroes');

function heroesController() {
  let latestId = heroes.sort((a, b) => a.id - b.id)[heroes.length - 1].id;
  function getAll(req, res) {
    debug('dentro de la función getAll');
    res.json(heroes);
  }
  function getById(req, res) {
    const heroById = heroes.find((hero) => hero.id === +req.params.heroId);
    if (heroById) {
      res.status(200);
      res.json(heroById);
    } else {
      res.status(404);
      res.status(heroById);
    }
  }
  function createOne(req, res) {
    latestId += 1;
    const newHero = { ...req.body, id: latestId };
    heroes.push(newHero);
    res.json(newHero);
  }
  function updateById(req, res) {
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
    res.json(updateData);
  }
  function deleteById(req, res) {
    const { heroId } = req.params;
    const heroById = heroes.filter((hero) => hero.id === +heroId);
    if (heroById) {
      heroes = heroes.filter((hero) => hero.id !== +heroId);
      res.status(204);
      res.end();
    } else {
      res.status(404);
      res.json();
    }
    res.status(204);
    res.json(heroes);
  }
  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById,
  };
}
module.exports = heroesController;
