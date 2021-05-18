const Task = require('../model/taskModel');

function taskController() {
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

  async function getAllTasks(req, res) {
    try {
      const allTasks = await Task.find();
      res.json(allTasks);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return {
    createTask,
    deleteTaskById,
    getAllTasks
  };
}

module.exports = taskController;
