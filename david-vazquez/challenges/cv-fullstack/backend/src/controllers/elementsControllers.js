const debug = require('debug')('server:elementsControllers');
const Element = require('../model/elementModel');

function elementsController() {
  async function getAllElements(req, res) {
    const elements = await Element.find();
    res.json(elements);
  }

  async function createOne(req, res) {
    const newElement = new Element(req.body);
    debug(newElement);
    try {
      await newElement.save();
      res.json(newElement);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updateElement = await Element.findByIdAndUpdate(
        req.params.elementId,
        req.body,
        { new: true },
      );
      res.json(updateElement);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getAllElements, createOne, updateById,
  };
}

module.exports = elementsController;
