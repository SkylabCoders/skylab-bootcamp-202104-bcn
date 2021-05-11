function heroesController(heroes) {
  function getAll(req, res) {
    res.status(200);
    res.json(heroes);
  }

  function createOne(req, res) {
    const newHero = req.body;
    newHero.id = ((heroes[heroes.length - 1].id) + 1);
    heroes.push(newHero);
    res.status(201);
    res.json(heroes);
  }

  function getById(req, res) {
    const { heroId } = req.params;
    const selectedHero = heroes.find((hero) => hero.id === +heroId);
    if (selectedHero) {
      res.status(200);
      res.json(selectedHero);
    } else {
      res.status(404);
      res.end();
    }
  }

  function updateById(req, res) {
    const { heroId } = req.params;
    const selectedHero = heroes.find((hero) => hero.id === +heroId);
    if (selectedHero) {
      res.status(200);
      selectedHero.name = req.body.name;
      res.json(heroes);
    } else {
      res.status(404);
      res.end();
    }
  }

  function deleteById(req, res) {
    const { heroId } = req.params;
    const selectedHero = heroes.find((hero) => hero.id === +heroId);
    if (selectedHero) {
      heroes = heroes.filter((hero) => +heroId !== hero.id);
      res.status(302);
      res.json(heroes);
    } else {
      res.status(404);
      res.end();
    }
  }

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById
  };
}

module.exports = heroesController;
