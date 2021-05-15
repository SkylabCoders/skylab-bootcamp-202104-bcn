const Information = require('../model/cvMode');

function cvController() {
  async function getInformation(req, res) {
    const Informations = await Information.find();
    res.json(Informations);
  }

  return {
    getInformation
  };
}

module.exports = cvController;
