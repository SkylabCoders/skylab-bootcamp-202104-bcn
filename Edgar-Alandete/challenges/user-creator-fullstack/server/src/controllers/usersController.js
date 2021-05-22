const debug = require('debug')('server:usersController');
const User = require('../model/userModel');

function usersController() {
  async function getAll(req, res) {
    try {
      debug('dentro de la function getAll');
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.send(404);
    }
  }

  async function createOne(req, res) {
    const newHero = new User(req.body);

    try {
      await newHero.save();
      res.json(newHero);
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
    }
  }

  return {
    getAll,
    createOne,
    getById,
  };
}

module.exports = usersController;
