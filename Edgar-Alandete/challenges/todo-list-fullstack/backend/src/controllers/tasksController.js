const debug = require('debug')('server:heroesController');
const chalk = require('chalk');
const Task = require('../model/taskModel');

function tasksController() {
  async function getAll(req, res) {
    debug(`Inside the function ${chalk.magenta('getAll')}`);
    const tasks = await Task.find();
    res.json(tasks);
  }

  async function createTask(req, res) {
    debug(`Inside the function ${chalk.magenta('createTask')}`);
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
