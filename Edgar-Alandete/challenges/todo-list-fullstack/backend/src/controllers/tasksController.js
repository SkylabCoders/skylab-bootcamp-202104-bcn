const debug = require('debug')('server:heroesController');
const chalk = require('chalk');
const Task = require('../model/taskModel');

function tasksController() {
  async function getAll(req, res) {
    debug(`Inside the function ${chalk.magenta('getAll')}`);
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      res.send(error);
    }
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
    const { taskId } = req.params;
    try {
      await Task.findByIdAndDelete(taskId);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(404);
    }
  }

  async function updateTask(req, res) {
    debug(`Inside the function ${chalk.magenta('deleteTask')}`);
    const { taskId } = req.params;
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        req.body,
        { new: true },
      );
      res.json(updatedTask);
    } catch (error) {
      res.status(404);
    }
  }

  return {
    getAll,
    createTask,
    getOneTask,
    deleteTask,
    updateTask,
  };
}

module.exports = tasksController;
