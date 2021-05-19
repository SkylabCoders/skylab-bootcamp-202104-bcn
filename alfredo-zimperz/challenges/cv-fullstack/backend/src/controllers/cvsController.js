const debug = require('debug')('server:tasksController');
const Cv = require('../model/cvModel');

function cvsController() {
  async function getAll(req, res) {
    debug('enter to function getAll');
    try {
      const cvs = await Cv.find({});
      res.status(200);
      res.json(cvs);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getAll,
  };
}
module.exports = cvsController;
