/* eslint-disable no-param-reassign */
const debug = require('debug')('server:heroesController');

function heroesController(heroes) {
  let highestId = heroes.sort((a, b) => a.id - b.id)[heroes.length - 1].id;
  function getAll(req, res) {
    debug('dentro de la funcion getAll');
    res.json(heroes);
  }

  function createOne(req, res) {
    highestId += 1;
    const newHero = {
      ...req.body,
      id: highestId,
    };
    heroes.push(newHero);
    res.json(newHero);
  }

  function getById(req, res) {
    const { heroId } = req.params;
    const selectedHero = heroes.find((hero) => hero.id === +heroId);
    res.json(selectedHero);
  }

  function updateById(req, res) {
    const { heroId } = req.params;
    const { name } = req.body;
    const selectedHero = heroes.find((hero) => hero.id === +heroId);
    selectedHero.name = name;
    heroes = [
      ...heroes,
      selectedHero,
    ];
    res.json(heroes);
  }

  function deleteById(req, res) {
    const { heroId } = req.params;
    heroes = heroes.filter((hero) => hero.id !== +heroId);
    // res.status(204);
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
