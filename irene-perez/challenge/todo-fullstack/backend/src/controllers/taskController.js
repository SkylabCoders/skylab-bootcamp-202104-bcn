const Task = require('../model/taskModel');

function taskController() {
  async function createTask(req, res) {
    const newTask = new Task(req.body);
    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.send(error);
    }
  }

  async function deleteTaskById(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.taskId);
      res.status(204);
      res.json();
    } catch (error) {
      res.send(error);
    }
  }

  return {
    createTask,
    deleteTaskById
  };
}

module.exports = taskController;
