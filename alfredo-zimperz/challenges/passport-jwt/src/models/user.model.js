const { model, Schema } = require('mongoose');

const userSchema = Schema({
  username: String,
  password: String,
});

userSchema.methods.verifyPassword = function verifyPassword(password) {
  return password === this.password;
};

module.exports = model('Users', userSchema);
