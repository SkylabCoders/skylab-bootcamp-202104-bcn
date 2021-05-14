const Task = require('../model/productTask');

function tasksController() {
  async function getAllTasks(req, res) {
    const tasks = await Task.find();
    res.json(tasks);
  }

  async function createOne(req, res) {
    const tareita = new Task(req.body);
    try {
      await tareita.save();
      res.json(tareita);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getAllTasks,
    createOne
  };
}
module.exports = tasksController;
