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
      res.status(404);
      res.send(error);
    }
  }
  async function updateTaskStatus(req, res) {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.taskId,
        req.body,
        { new: true },
      );
      res.json(updatedTask);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }
  async function deleteTask(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.taskId);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }
  return {
    getAll,
    createTask,
    updateTaskStatus,
    deleteTask,
  };
}

module.exports = tasksController;
