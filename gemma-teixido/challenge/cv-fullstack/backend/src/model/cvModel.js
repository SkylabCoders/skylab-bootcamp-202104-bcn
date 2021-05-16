const mongoose = require('mongoose');

const Information = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Informations', Information);
