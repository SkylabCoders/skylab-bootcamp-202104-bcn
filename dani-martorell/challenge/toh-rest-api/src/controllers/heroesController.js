function heroesController(heroes) {
  let heroesList = [...heroes];

  function getAll(req, res) {
    res.json(heroes);
  }

  function createOne(req, res) {
    const newHeroBody = req.body;
    const { id: newHeroId } = req.body;
    const isHeroIdAlreadyInUse = heroes.find((hero) => hero.id === +newHeroId);
    if (!isHeroIdAlreadyInUse) {
      heroes.push(newHeroBody);
      res.json(newHeroBody);
    } else {
      res.status(400);
      res.json({ message: 'Invalid Id.' });
    }
  }

  function getById(req, res) {
    const { heroId } = req.params;
    const heroToGet = heroes.find((hero) => hero.id === +heroId);
    if (heroToGet) {
      res.json(heroToGet);
    } else {
      res.status(404).send({ message: 'Invalid Id.' });
    }
  }

  function updateById(req, res) {
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
      heroesList = [...updatedHeroes];
      res.json(heroesList);
    } else {
      res.status(404).json({ message: 'Invalid Id.' });
    }
  }

  function deleteById(req, res) {
    const { heroId } = req.params;
    const heroToDelete = heroes.find((hero) => hero.id === +heroId);
    if (heroToDelete) {
      const updatedHeroes = heroes.filter((hero) => hero.id !== +heroId);
      heroesList = [...updatedHeroes];
      res.json(heroesList);
    } else {
      res.status(404).json({ message: 'Invalid Id.' });
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
