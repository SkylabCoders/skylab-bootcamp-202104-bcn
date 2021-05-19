const mongoose = require('mongoose');

const cvSchema = mongoose.Schema({
  name: String,
  sureName: String
});

module.exports = mongoose.model('Curriculum', cvSchema);
