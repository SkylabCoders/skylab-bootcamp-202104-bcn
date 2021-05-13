const debug = require('debug')('server:tasksController');
const Task = require('../model/taskModel');

function productsController() {
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

  async function getTaskById(req, res) {
    debug('enter to function getTaskById');
    const { taskId } = req.params;
    try {
      const tasks = await Task.findById(taskId);
      res.status(200);
      res.json(tasks);
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

  async function addTask(req, res) {
    debug('enter to function addTask');
    const newTask = new Task(req.body);
    try {
      await newTask.save();
      res.status(200);
      res.json(newTask);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function modifyTask(req, res) {
    debug('enter to function modifyTask');
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.taskId,
        { ...req.body },
        { new: true }
      );
      res.status(201);
      res.json(updatedTask);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  return {
    getAll,
    getTaskById,
    deleteTaskById,
    addTask,
    modifyTask
  };
}
module.exports = productsController;
