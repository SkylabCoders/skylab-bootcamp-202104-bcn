const debug = require('debug')('server:heroesController');
const Hero = require('../model/heroModel');

// const nextHeroId = 31;

function heroesController() {
  async function getAll(req, res) {
    debug('enter to function getAll');
    const heroes = await Hero.find({});
    res.status(200);
    res.json(heroes);
  }

  async function createOne(req, res) {
    const newHero = new Hero(req.body);
    try {
      await newHero.save();
      res.status(201);
      res.json(newHero);
    } catch (error) {
      debug(error);
      res.sed(error);
    }
  }

  async function getById(req, res) {
    const heroById = await Hero.findById(req.params.heroId);
    if (heroById) {
      res.status(200);
      res.json(heroById);
    } else {
      res.status(404);
      res.json();
    }
  }

  // function updateById(req, res) {
  //   const { heroId } = req.params;
  //   const updateData = req.body;
  //   const updatedHeroes = heroes.map((hero) => {
  //     if (hero.id === +heroId) {
  //       return {
  //         ...hero,
  //         ...updateData,
  //       };
  //     }
  //     return hero;
  //   });
  //   res.status(200);
  //   res.json(updatedHeroes);
  // }

  // function deleteById(req, res) {
  //   const { heroId } = req.params;
  //   const heroById = heroes.find((hero) => hero.id === +heroId);
  //   if (heroById) {
  //     const updatedHeroes = heroes.filter((hero) => +heroId !== hero.id);
  //     res.status(200);
  //     res.json(updatedHeroes);
  //   } else {
  //     res.status(404);
  //     res.json();
  //   }
  // }

  return {
    getAll,
    createOne,
    getById,
    // updateById,
    // deleteById,
  };
}

module.exports = heroesController;
