let nextHeroId = 31;

function heroesController(heroes) {
  function getAll(req, res) {
    res.status(200);
    res.json(heroes);
  }

  function createOne(req, res) {
    const newHero = { ...req.body, id: nextHeroId };
    heroes.push(newHero);
    res.status(201);
    res.json(newHero);
    nextHeroId += 1;
  }

  function getById(req, res) {
    const heroById = heroes.find((hero) => hero.id === +req.params.heroId);
    if (heroById) {
      res.status(200);
      res.json(heroById);
    } else {
      res.status(404);
      res.json();
    }
  }

  function updateById(req, res) {
    const { heroId } = req.params;
    const updateData = req.body;
    const updatedHeroes = heroes.map((hero) => {
      if (hero.id === +heroId) {
        return {
          ...hero,
          ...updateData,
        };
      }
      return hero;
    });
    res.status(200);
    res.json(updatedHeroes);
  }

  function deleteById(req, res) {
    const { heroId } = req.params;
    const heroById = heroes.find((hero) => hero.id === +heroId);
    if (heroById) {
      const updatedHeroes = heroes.filter((hero) => +heroId !== hero.id);
      res.status(200);
      res.json(updatedHeroes);
    } else {
      res.status(404);
      res.json();
    }
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
