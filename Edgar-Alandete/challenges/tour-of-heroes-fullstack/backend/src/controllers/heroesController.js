const debug = require('debug')('server:heroesController');
const chalk = require('chalk');
const Hero = require('../model/heroModel');

function heroesController() {
  async function getAll(req, res) {
    debug(`dentro de la función ${chalk.magenta('getAll')}`);
    const heroes = await Hero.find();
    res.json(heroes);
  }

  async function createOne(req, res) {
    const newHero = new Hero(req.body);

    try {
      await newHero.save();
      res.json(newHero);
    } catch (error) {
      debug(error);
    }
  }

  // function getById(req, res) {
  //   const { heroId } = req.params;
  //   const heroById = heroes.find((hero) => hero.id === +heroId);
  //   if (heroById) {
  //     res.status(200);
  //     res.json(heroById);
  //   } else {
  //     res.status(404);
  //     res.send(`The hero with the id ${heroId} doesn't exist`);
  //   }
  // }

  // function deleteById(req, res) {
  //   const { heroId } = req.params;
  //   let newHeroes = [...heroes];
  //   const heroById = heroes.find((hero) => +heroId === hero.id);
  //   if (heroById) {
  //     newHeroes = heroes.filter((hero) => +heroId !== hero.id);
  //     res.status(200);
  //   } else {
  //     res.status(404);
  //     res.send(`The hero with the id ${heroId} doesn't exist`);
  //   }
  //   res.json(newHeroes);
  // }

  // function updateById(req, res) {
  //   const { heroId } = req.params;
  //   const updateData = req.body;
  //   let newHeroes = [...heroes];
  //   newHeroes = heroes.map((hero) => {
  //     if (hero.id === +heroId) {
  //       return {
  //         ...hero,
  //         ...updateData,
  //       };
  //     }
  //     return hero;
  //   });

  //   res.json(newHeroes);
  // }

  return {
    getAll,
    createOne,
  };
}

module.exports = heroesController;
