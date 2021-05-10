/* eslint-disable no-param-reassign */
function heroesController(heroes) {
  function getAll(req, res) {
    res.json(heroes);
  }

  function createOne(req, res) {
    res.json(heroes[0]);
  }

  function getById(req, res) {
    res.json(heroes[0]);
  }

  function updateById(req, res) {
    const { heroId } = req.params;
    const name = req.body;
    heroes = [
      ...heroes,
      { id: heroId, name },
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
