const mongoose = require('mongoose');

const tohSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Tour of Heros', tohSchema);
