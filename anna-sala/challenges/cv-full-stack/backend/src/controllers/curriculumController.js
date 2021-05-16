const debug = require('debug')('server:curriculumController');
const CV = require('../model/cvModel');

function curriculumController() {
  debug('inside getCV');
  async function getCV(req, res) {
    const curriculum = await CV.find();
    res.json(curriculum);
  }
  async function createCV(req, res) {
    const newCV = new CV(req.body);
    debug(newCV);
    try {
      await newCV.save();
      res.json(newCV);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getCV,
    createCV,
  };
}

module.exports = curriculumController;
