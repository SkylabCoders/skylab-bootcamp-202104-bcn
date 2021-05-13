const debug = require('debug')('server:heroesController');
const Task = require('../model/taskModel');

function tasksController() {
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

  async function addTask(req, res) {
    const newTask = new Task(req.body);
    debug(req.body);
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

  async function deleteTaskById(req, res) {
    const { taskId } = req.params;
    try {
      await Task.findByIdAndDelete(taskId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function updateTaskById(req, res) {
    const { taskId } = req.params;
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        taskId,
        req.body,
        { new: true }
      );
      res.json(updatedTask);
    } catch (error) {
      debug(error);
      res.send(204);
    }
  }

  return {
    getAll, addTask, deleteTaskById, updateTaskById
  };
}
module.exports = tasksController;
