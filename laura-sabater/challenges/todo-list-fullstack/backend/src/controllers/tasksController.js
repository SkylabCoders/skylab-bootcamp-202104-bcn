const Task = require('../model/taskModel');

function tasksController() {
  async function getTasks(req, res) {
    try {
      const tasks = await Task.find();
      res.status(200);
      res.json(tasks);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function addTask(req, res) {
    try {
      const newTask = await new Task(req.body).save();
      res.status(200);
      res.json(newTask);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function deleteTask(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.taskId);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return { getTasks, addTask, deleteTask };
}

module.exports = tasksController;
