function heroesController(heroes) {
  let latestId = heroes.sort((a, b) => a.id - b.id)[heroes.length - 1].id;

  function getAll(req, res) {
    res.json(heroes);
  }

  function createOne(req, res) {
    latestId += 1;
    const newHero = {
      ...req.body,
      id: latestId,
    };
    heroes.push(newHero);
    res.json(newHero);
  }

  function getById(req, res) {
    const heroById = heroes.find(
      (hero) => hero.id === +req.params.heroId,
    );
    res.json(heroById);
  }

  function updateById(req, res) {
    res.json(heroes[0]);
  }

  function deleteById(req, res) {
    res.status(204);
    res.json();
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
