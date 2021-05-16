const INFO = require('../model/INFO');

function INFOController() {
  async function getAll(req, res) {
    const INFOCV = await INFO.find();
    res.json(INFOCV);
  }

  async function createOne(req, res) {
    const newData = new INFO(req.body);
    try {
      await newData.save();
      res.status(201);
      res.json(newData);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }
  return { getAll, createOne };
}

module.exports = INFOController;
