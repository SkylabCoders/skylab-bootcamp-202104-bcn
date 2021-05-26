const mongoose = require('mongoose');

const userShema = mongoose.Schema({
  userName: String,
  password: String
});
userShema.methods.verifyPassword = function (val) {
  return (val === this.password);
};

module.exports = mongoose.model('Users', userShema);
