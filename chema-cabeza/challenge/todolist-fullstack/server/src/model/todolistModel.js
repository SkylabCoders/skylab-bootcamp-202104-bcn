const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
  id: Number,
  name: String,
});

module.exports = mongoose.model('List', listSchema);
