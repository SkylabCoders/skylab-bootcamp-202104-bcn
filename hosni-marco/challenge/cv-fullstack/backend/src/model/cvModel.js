const mongoose = require('mongoose');

const cvSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Curriculum', cvSchema);
