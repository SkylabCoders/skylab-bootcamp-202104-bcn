const Curriculum = require('../model/cvModel');

function cvController() {
  async function getAll(req, res) {
    const cv = await Curriculum.find();
    res.json(cv);
  }

  return {
    getAll
  };
}

module.exports = cvController;
