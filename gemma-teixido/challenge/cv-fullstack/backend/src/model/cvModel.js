const mongoose = require('mongoose');

const Information = mongoose.Schema({
  Name: String,
  Title: String,
  Description: String
});

module.exports = mongoose.model('Informations', Information);
