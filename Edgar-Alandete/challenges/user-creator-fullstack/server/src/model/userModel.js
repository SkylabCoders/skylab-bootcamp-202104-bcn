const mongoose = require('mongoose');

const userShema = mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  country: String,
  age: Number,
  direction: {
    street: String,
    streetNumber: Number,
    door: String,
    flat: String,
    cp: String,
  },
});

module.exports = mongoose.model('Users', userShema);
