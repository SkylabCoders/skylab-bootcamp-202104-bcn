const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  password: String
});

module.exports = mongoose.model('User model', userSchema);
