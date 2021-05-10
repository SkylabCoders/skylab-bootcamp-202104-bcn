// function heroesController(heroes) {
//   function getAll(req, res) {
//     res.json();
//   }
//   function createOne(req, res) {
//     res.json(heroes[0]);
//   }
//   function deleteById(req, res) {
//     res.status(204);
//     res.json();
//   }
//   function getById(req, res) {
//     res.json(heroes[0]);
//   }
//   function updatedById(req, res) {
//     res.json(heroes[0]);
//   }
//   return {
//     getAll,
//     createOne,
//     deleteById,
//     getById,
//     updatedById,
//   };
// }

// module.exports = heroesController;

let heroes = require('../heroes');

function heroesController() {
  function getAll(req, res) {
    res.json(heroes);
  }
  function getById(req, res) {
    const heroById = heroes.find((hero) => hero.id === +req.params.heroId);
    if (heroById) {
      res.status(302);
      res.json(heroById);
    } else {
      res.status(404);
      res.status(heroById);
    }
  }
  function createOne(req, res) {
    const newHero = { id: heroes.length + 1, name: `${req.params.heroName}` };
    heroes.push(newHero);
    res.json(heroes);
  }
  function updateById(req, res) {
    const { heroId } = req.params;
    const updateData = req.body;
    heroes = heroes.map((hero) => {
      if (hero.id === +heroId) {
        return {
          ...hero,
          ...updateData,
        };
      }
      return hero;
    });
    res.json(heroes);
  }
  function deleteById(req, res) {
    const { heroId } = req.params;
    const heroById = heroes.filter((hero) => hero.id === +heroId);
    if (heroById) {
      heroes = heroes.filter((hero) => hero.id !== +heroId);
      res.status(204);
      res.end();
    } else {
      res.status(404);
      res.json();
    }
    res.status(204);
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
module.exports = heroesController(heroes);
