let heroes = require('../heroes');

function heroesController() {
  function getAll(req, res) {
    res.json(heroes);
  }
  function createOne(req, res) {
    const newHero = req.body;
    heroes.push(newHero);
    res.json(newHero);
  }
  function getById(req, res) {
    const heroById = heroes.find(
      (hero) => hero.id === +req.params.heroId,
    );
    if (heroById) {
      res.json(heroById);
    } else {
      res.json(heroById);
    }
  }
  function updateById(req, res) {
    const { heroId } = req.params;
    const {name} = req.body;
    const selectedHero = heroes.find((hero) => hero.id === +heroId);
    selectedHero.name = name;
    heroes = [
      ...heroes,
      selectedHero
    ];
    res.json(heroes);
  }
  function deleteById(req, res) {
    const { heroId } = req.params;
    const deletedArray = heroes.filter(
      (hero) => hero.id !== +heroId,
    );
    res.json(deletedArray);
  }
  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById,
  };
}
module.exports = heroesController();
