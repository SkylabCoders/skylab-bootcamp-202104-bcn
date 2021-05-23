const debug = require('debug')('app:heroesController');
const Hero = require('../model/heroModel');

function heroesController() {
  async function getAll(req, res) {
    try {
      const heroes = await Hero.find();
      res.status(200);
      res.json(heroes);
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  async function createOne(req, res) {
    try {
      const newHero = await new Hero(req.body).save();
      res.status(200);
      res.json(newHero);
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const heroById = await Hero.findById(
        req.params.heroId,
      );
      res.status(200);
      res.json(heroById);
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedHero = await Hero.findByIdAndUpdate(
        req.params.heroId,
        req.body,
        { new: true },
      );
      res.status(200);
      res.json(updatedHero);
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Hero.findByIdAndDelete(req.params.heroId);
      res.status(200);
      res.json();
    } catch (error) {
      debug(error);
      res.status(400);
      res.send(error);
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
