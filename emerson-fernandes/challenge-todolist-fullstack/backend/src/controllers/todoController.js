const Task = require('../model/todoModel');

function todoController() {
  async function createTask(req, res) {
    const newTask = new Task(req.body);

    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    createTask
  };
}

module.exports = todoController;
