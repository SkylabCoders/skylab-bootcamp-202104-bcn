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

  async function getOneTask(req, res) {
    debug(`Inside the function ${chalk.magenta('getOneTask')}`);

    try {
      const task = await Task.findById(req.params.taskId);
      res.json(task);
    } catch (error) {
      res.status(404);
    }
  }

  async function deleteTask(req, res) {
    debug(`Inside the function ${chalk.magenta('deleteTask')}`);
    try {
      await Task.findByIdAndDelete(req.params.taskId);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(404);
    }
  }

  return {
    getAll,
    createTask,
    getOneTask,
    deleteTask,
  };
}

module.exports = tasksController;
