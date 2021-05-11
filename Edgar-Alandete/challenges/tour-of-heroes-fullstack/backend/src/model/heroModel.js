const mongoose = require('mongoose');

const heroShema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Heroes', heroShema);
