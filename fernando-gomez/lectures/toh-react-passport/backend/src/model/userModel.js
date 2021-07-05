const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  password: String,
});

userSchema.methods.verifyPassword = function (val) {
  return (val === this.password);
};

module.exports = mongoose.model('Users', userSchema);
