const debug = require('debug')('server:heroesController');
const chalk = require('chalk');
const User = require('../model/userModel');

function heroesController() {
  async function getAll(req, res) {
    debug(`dentro de la función ${chalk.magenta('getAll')}`);
    const heroes = await User.find();
    res.json(heroes);
  }

  async function createOne(req, res) {
    const newUser = new User(req.body);

    try {
      await newUser.save();
      res.json(newUser);
    } catch (error) {
      res.send(error);
      debug(error);
    }
  }

  async function getById(req, res) {
    const { userId } = req.params;
    try {
      const userById = await User.findById(userId);
      res.status(200);
      res.json(userById);
    } catch (error) {
      res.status(404);
      res.send(`The hero with the id ${userId} doesn't exist`);
      debug(error);
    }
  }

  async function deleteById(req, res) {
    const { userId } = req.params;
    try {
      await User.findByIdAndDelete(userId);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(404);
      debug(error);
    }
  }

  async function updateById(req, res) {
    const { userId } = req.params;
    const updateData = req.body;
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        updateData,
        { new: true },
      );
      res.json(updatedUser);
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
