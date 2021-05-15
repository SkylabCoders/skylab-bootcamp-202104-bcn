const mongoose = require('mongoose');

const Information = mongoose.Schema({
  Position: String,
  Place: String,
  Duration: String,
  Description: String
});

module.exports = mongoose.model('Informations', Information);
