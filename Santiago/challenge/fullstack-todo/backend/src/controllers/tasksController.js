const Task = require('../model/taskModel');

function tasksController() {
  async function createOne(req, res) {
    const newTask = new Task(req.body);
    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.send(error);
    }
  }

  async function getAll(req, res) {
    const tasks = await Task.find();
    res.json(tasks);
  }

  return {
    createOne,
    getAll
  };
}

module.exports = tasksController;
