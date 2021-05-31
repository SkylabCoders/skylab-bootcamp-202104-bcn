const Mongoose = require('mongoose');

const usersSchema = Mongoose.Schema({
  email: String,
  password: String
  // alias: String,
  // avatar: String
  // cart: [],
  // fav: []
});

usersSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = Mongoose.model('Users', usersSchema);
