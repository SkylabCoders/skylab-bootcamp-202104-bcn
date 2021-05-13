const debug = require('debug')('server:heroesController');
const chalk = require('chalk');
const Task = require('../model/taskModel');

function tasksController() {
  async function getAll(req, res) {
    debug(`dentro de la función ${chalk.magenta('getAll')}`);
    const tasks = await Task.find();
    res.json(tasks);
  }

  return {
    getAll,
  };
}

module.exports = tasksController;
