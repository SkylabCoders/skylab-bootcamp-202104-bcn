const debug = require('debug')('server:tasksController');
const Task = require('../model/taskModel');

function tasksController() {
  debug('dentro de getAll');
  async function getAll(req, res) {
    const tasks = await Task.find();
    res.json(tasks);
  }

  async function createTask(req, res) {
    const newTask = new Task(req.body);
    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.send(error);
    }
  }
  return {
    getAll,
    createTask,
  };
}

module.exports = tasksController;
