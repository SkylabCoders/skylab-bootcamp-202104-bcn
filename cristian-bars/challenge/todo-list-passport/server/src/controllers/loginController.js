const User = require('../models/userModel');

function loginController() {
  async function createUser(req, res) {
    try {
      const newUser = await new User(req.body);
      res.status(200);
      res.json(newUser);
    } catch (error) {
      res.status(400);
      res.send(error);
    }
  }
  return {
    createUser
  };
}

module.exports = loginController;
