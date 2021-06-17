const User = require('../model/userModel');

function userController() {
  async function getAll(req, res) {
    const users = await User.find();
    res.json(users);
  }
  async function createOne(req, res) {
    const newTask = new User(req.body);
    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.send(error);
    }
  }
  async function getById(req, res) {
    try {
      const userById = await User.findById(
        req.params.userById
      );
      res.json(userById);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    getById
  };
}

module.exports = userController;
