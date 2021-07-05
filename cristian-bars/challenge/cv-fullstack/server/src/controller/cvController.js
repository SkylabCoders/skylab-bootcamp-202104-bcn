/* eslint-disable no-underscore-dangle */
const debug = require('debug')('app:cvController');
const Curriculum = require('../model/cvModel');

function cvController() {
  async function getAll(req, res) {
    const cvInfo = await Curriculum.find();
    res.json(cvInfo);
  }

  async function addData(req, res) {
    const newData = new Curriculum(req.body);
    debug(newData);
    try {
      await newData.save();
      res.json(newData);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getAll,
    addData
  };
}

module.exports = cvController;
