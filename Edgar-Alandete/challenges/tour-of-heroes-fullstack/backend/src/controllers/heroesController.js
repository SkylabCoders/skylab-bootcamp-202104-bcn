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
      res.send(error);
      debug(error);
    }
  }

  async function getById(req, res) {
    const { heroId } = req.params;
    try {
      const heroById = await Hero.findById(heroId);
      res.status(200);
      res.json(heroById);
    } catch (error) {
      res.status(404);
      res.send(`The hero with the id ${heroId} doesn't exist`);
      debug(error);
    }
  }

  async function deleteById(req, res) {
    const { heroId } = req.params;
    try {
      await Hero.findByIdAndDelete(heroId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
    }
  }

  async function updateById(req, res) {
    const { heroId } = req.params;
    const updateData = req.body;
    try {
      const updatedHero = await Hero.findByIdAndUpdate(
        heroId,
        updateData,
        { new: true },
      );
      res.json(updatedHero);
    } catch (error) {
      debug(error);
    }
  }

  return {
    getAll,
    createOne,
    getById,
    deleteById,
    updateById,
  };
}

module.exports = heroesController;
