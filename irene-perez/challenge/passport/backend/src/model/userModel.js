const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: String
});

userSchema.methods.verifyPassword = function (value) {
  return (value === this.password);
};

module.exports = mongoose.model('User', userSchema);
