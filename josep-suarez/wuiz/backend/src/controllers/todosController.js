const TODO = require('../model/todoModel');

function TodosController() {
  async function getAll(req, res) {
    const todos = await TODO.find();
    res.json(todos);
  }
  async function createOne(req, res) {
    const newTask = new TODO(req.body);
    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.send(error);
    }
  }
  return {
    getAll,
    createOne
  };
}

module.exports = TodosController;
