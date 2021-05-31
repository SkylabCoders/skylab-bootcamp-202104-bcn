const USER = require('../models/userModel');

function UserController() {
  async function getAll(req, res) {
    const users = await USER.find();
    res.json(users);
  }

  return {
    getAll
  };
}

module.exports = UserController;
