const debug = require('debug')('server:taskController');
const Task = require('../models/taskModel');

function heroesController() {
  async function getAll(req, res) {
    debug('enter to function getAll');
    try {
      const tasks = await Task.find({});
      res.status(200);
      res.json(tasks);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }
  async function getById(req, res) {
    debug('Enter in getById');
    const { taskId } = req.params;
    try {
      const tasks = await Task.findById(taskId);
      res.status(200);
      res.json(tasks);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function createOne(req, res) {
    const newTask = new Task(req.body);
    debug(newTask);
    try {
      await newTask.save();
      res.status(200);
      res.json(newTask);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    debug('Enter in updated function');
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.taskId,
        {...req.body},
        { new: true },
      );
      res.status(201);
      res.json(updatedTask);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function deleteTaskById(req, res) {
    debug('enter to function deleteTaskById');
    const { taskId } = req.params;
    try {
      await Task.findByIdAndDelete(taskId);
      res.status(201);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteTaskById,
  };
}

module.exports = heroesController;
