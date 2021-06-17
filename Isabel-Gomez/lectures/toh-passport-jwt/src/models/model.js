const { model, Schema } = require('mongoose');

const userSchema = Schema({
  email: String,
  password: String,
});

userSchema.methods.verifyPassword = function verifyPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
