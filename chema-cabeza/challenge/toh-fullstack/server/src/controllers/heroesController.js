/* eslint-disable no-param-reassign */
function heroesController(heroes) {
  function getAll(req, res) {
    res.json(heroes);
  }

  function createOne(req, res) {
    res.json(heroes[0]);
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
