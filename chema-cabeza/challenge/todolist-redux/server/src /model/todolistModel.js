const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('List', listSchema);
