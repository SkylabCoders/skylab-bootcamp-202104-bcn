const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
  heroId: String,
  name: String
});

module.exports = mongoose.model('Heroes', heroSchema);
