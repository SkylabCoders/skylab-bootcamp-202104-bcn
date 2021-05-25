const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model('Hero', heroSchema);
