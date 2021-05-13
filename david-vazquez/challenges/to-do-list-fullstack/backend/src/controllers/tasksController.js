const debug = require('debug')('server:tasksController');
const Task = require('../model/taskModel');

function tasksController() {
  async function getAllTasks(req, res) {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  async function createOne(req, res) {
    const newTask = new Task(req.body);
    debug(newTask);
    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  async function deleteById(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.taskId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.taskId,
        req.body,
        { new: true },
      );
      res.json(updatedTask);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  return {
    getAllTasks,
    createOne,
    deleteById,
    updateById,
  };
}

module.exports = tasksController;
