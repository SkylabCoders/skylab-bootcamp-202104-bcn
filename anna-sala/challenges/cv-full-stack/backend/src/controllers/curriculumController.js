const debug = require('debug')('server:curriculumController');
const cv = require('../model/cvModel');

function curriculumController() {
  debug('inside getCV');
  async function getCV(req, res) {
    const curriculum = await cv.find();
    res.json(curriculum);
  }
  return {
    getCV,
  };
}

module.exports = curriculumController;
