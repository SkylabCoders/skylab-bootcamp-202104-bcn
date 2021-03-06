const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.isValidPassword = function (password) {
  const user = this;
  return password === user.password;
};

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
