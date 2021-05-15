const mongoose = require('mongoose');

const cvSchema = mongoose.Schema({
  person: {
    name: String,
    lastName: String,
    nationality: String,
    birthDate: Date,
  },
});

module.exports = mongoose.model('Cvs', cvSchema);
