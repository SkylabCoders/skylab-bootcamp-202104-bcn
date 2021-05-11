function heroesController(heroes) {
  let heroesList = [...heroes];

  function getAll(req, res) {
    res.json(heroesList);
  }

  function createOne(req, res) {
    const newHeroBody = req.body;
    const { id: newHeroId } = req.body;
    const isHeroIdAlreadyInUse = heroesList.find((hero) => hero.id === +newHeroId);
    if (!isHeroIdAlreadyInUse) {
      heroesList.push(newHeroBody);
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
      res.status(404);
      res.json({ message: 'Invalid Id.' });
    }
  }

  function updateById(req, res) {
    const { heroId } = req.params;
    const { body } = req;
    let updatedHero;
    const heroToModify = heroesList.find((hero) => hero.id === +heroId);
    if (heroToModify) {
      const updatedHeroes = heroesList.map((hero) => {
        if (hero.id === +heroId) {
          updatedHero = { ...hero, ...body };
          return updatedHero;
        }
        return hero;
      });
      heroesList = [...updatedHeroes];
      res.json(updatedHero);
    } else {
      res.status(404);
      res.json({ message: 'Invalid Id.' });
    }
  }

  function deleteById(req, res) {
    const { heroId } = req.params;
    const heroToDelete = heroesList.find((hero) => hero.id === +heroId);
    if (heroToDelete) {
      const updatedHeroes = heroesList.filter((hero) => hero.id !== +heroId);
      heroesList = [...updatedHeroes];
      res.json(heroesList);
    } else {
      res.status(404);
      res.json({ message: 'Invalid Id.' });
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
