const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
  heroes: [
    {
      id: String,
      name: String
    }
  ]
});

module.exports = mongoose.model('Heroes', heroSchema);
