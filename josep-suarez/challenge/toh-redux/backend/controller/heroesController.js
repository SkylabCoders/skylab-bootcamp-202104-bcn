const heroes = require('../heroes');

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
      res.status(302);
      res.json(heroById);
    } else {
      res.status(404);
      res.json(heroById);
    }
  }
  function updateById(req, res) {
    const { heroId } = req.params;
    const updateHero = req.body;
    const heroesArray = heroes.find((hero) => {
      if (hero.id === +heroId) {
        return {
          ...hero,
          ...updateHero,
        };
      }
      return hero;
    });
    res.json(heroesArray);
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
