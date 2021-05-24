const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
  heroes: [
    {
      heroId: String,
      name: String
    }
  ]
});

module.exports = mongoose.model('Heroes', heroSchema);
