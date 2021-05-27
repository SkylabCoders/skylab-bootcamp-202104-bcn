const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
});

userSchema.methods.verifyPassword = function verifyPassword(password) {
  return password === this.password;
};

module.exports = mongoose.model('Users', userSchema);
