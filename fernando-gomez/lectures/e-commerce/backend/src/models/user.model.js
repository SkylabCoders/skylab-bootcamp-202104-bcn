const { model, Schema } = require('mongoose');

const userSchema = Schema({
  email: String,
  password: String,
  address: String,
  whislist: [Schema.Types.ObjectId],
  cart: [Schema.Types.ObjectId],
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
