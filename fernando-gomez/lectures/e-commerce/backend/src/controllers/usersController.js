const debug = require('debug')('server:heroesController');
const User = require('../models/user.model');

function usersController() {
  async function getAll(req, res) {
    debug('enter to function getAll');
    try {
      const users = await User.find({}).populate('wishlist').populate('cart');
      res.status(200);
      res.json(users);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function getUserById(req, res) {
    const userToFind = new User(req.body);
    debug(req.body);
    debug(userToFind);
    try {
      const users = await User.findById(userToFind).populate('wishlist').populate('cart');
      res.status(200);
      res.json(users);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function addUser(req, res) {
    const newUser = new User(req.body);
    debug(req.body);
    debug(newUser);
    try {
      await newUser.save();
      res.status(200);
      res.json(newUser);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function deleteUserById(req, res) {
    const { userId } = req.params;
    try {
      await User.findByIdAndDelete(userId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function updateUserById(req, res) {
    const { userId } = req.params;
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        req.body,
        { new: true },
      );
      res.json(updatedUser);
    } catch (error) {
      debug(error);
      res.send(204);
    }
  }

  return {
    getAll, getUserById, addUser, deleteUserById, updateUserById,
  };
}
module.exports = usersController;
