const debug = require('debug')('server:heroesController');
const Hero = require('../model/heroModel');

function heroesController() {
  async function getAll(req, res) {
    const heroes = await Hero.find();
    res.json(heroes);
  }

  async function getHeroById(req, res) {
    try {
      const heroById = await Hero.findById(
        req.params.heroId
      );
      res.json(heroById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function deleteHeroById(req, res) {
    try {
      await Hero.findByIdAndDelete(req.params.heroId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function addHero(req, res) {
    const newHero = new Hero(req.body);
    debug(newHero);
    try {
      await newHero.save();
      res.json(newHero);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function modifyHeroById(req, res) {
    try {
      const updatedHero = await Hero.findByIdAndUpdate(
        req.params.heroId,
        req.body,
        { new: true }
      );
      res.json(updatedHero);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getAll,
    getHeroById,
    deleteHeroById,
    addHero,
    modifyHeroById
  };
}

module.exports = heroesController;
