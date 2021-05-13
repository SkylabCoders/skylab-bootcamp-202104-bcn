const debug = require('debug')('server:tasksController');
const Task = require('../model/taskModel');

function tasksController() {
  async function getTasks(req, res) {
    const tasks = await Task.find();
    res.json(tasks);
  }

  async function addTask(req, res) {
    // debug('enter to function addTask');
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

  async function deleteTask(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.taskId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return { getTasks, addTask, deleteTask };
}

module.exports = tasksController;
