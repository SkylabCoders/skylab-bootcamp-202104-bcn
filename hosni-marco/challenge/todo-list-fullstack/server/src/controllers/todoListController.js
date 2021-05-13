const debug = require('debug')('app:todoListController');
const List = require('../model/todoListModel');

function toloListController() {
  async function getAll(req, res) {
    const todoList = await List.find();
    res.json(todoList);
  }

  async function createOne(req, res) {
    const newList = new List(req.body);
    // debug(newList);
    try {
      await newList.save();
      res.json(newList);
    } catch (error) {
      // debug(error);
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const taskId = await List.findById(
        req.params.taskId
      );
      res.json(taskId);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updateList = await List.findByIdAndUpdate(
        req.params.taskId,
        req.body,
        { new: true }
      );
      res.json(updateList);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await List.findByIdAndDelete(req.params.taskId);
      const todoList = await List.find();
      res.status(204);
      res.json(todoList);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById
  };
}

module.exports = toloListController;
