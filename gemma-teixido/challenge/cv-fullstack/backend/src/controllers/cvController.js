const Information = require('../model/cvModel');

function cvController() {
  async function getInformation(req, res) {
    const Informations = await Information.find();
    try {
      res.json(Informations);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  return {
    getInformation
  };
}

module.exports = cvController;
