const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model('Hero', heroSchema); // el primer valor es el nombre que le quiero dar a mi Collection, el segundo el de la variable.
