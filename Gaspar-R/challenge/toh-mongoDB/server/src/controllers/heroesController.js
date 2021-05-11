const debug = require('debug')('app:heroesController');
const chalk = require('chalk');
const Hero = require('../model/heroModel');

function heroesController(heroes) {
  async function getAll(req, res) {
    debug(`dentro de la funcion ${chalk.magenta('getAll')}`);
    const heroes = await Hero.find();
    res.status(200);
    res.json(heroes);
  }

  async function createOne(req, res) {
    const newHero = new Hero(req.body);
    newHero.id = ((heroes[heroes.length - 1].id) + 1);
    try {
      await newHero.save();
      res.status(201);
      res.json(newHero);
    } catch (error) {
      debug(error);
    }
  }

  async function getById(req, res) {
    try {
      const heroBydId = await Hero.findById(req.params.heroId);
      res.status(200);
      res.json(heroBydId);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedHero = await Hero.findByIdAndUpdte(
        req.params.heroId,
        req.body,
        { new: true }
      );

      res.status(200);
      res.json(updatedHero);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      const deleteHeroes = await Hero.findByIdAndDelete(req.params.heroId);
      res.status(200);
      res.json(deleteHeroes);
    } catch (error) {
      res.send(error);
      res.status(404);
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
