const Task = require('../model/todoModel');

function todoController() {
  async function getAll(req, res) {
    const task = await Task.find();
    res.json(task);
  }

  async function createTask(req, res) {
    const newTask = new Task(req.body);

    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  async function getTaskById(req, res) {
    try {
      const taskById = await Task.findById(req.params.taskId);

      res.json(taskById);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function deleteTaskById(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.taskId);
      res.status(204);
      res.json();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return {
    createTask,
    deleteTaskById,
    getAll,
    getTaskById
  };
}

module.exports = todoController;
