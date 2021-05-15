const mongoose = require('mongoose');

const Experience = mongoose.Schema({
  Name: String,
  Place: String,
  Duration: String,
  Description: String
});

module.exports = mongoose.model('Informations', Experience);
