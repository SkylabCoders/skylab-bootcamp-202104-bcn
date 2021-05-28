const mongoose = require('mongoose');

const motosSchema = mongoose.Schema({
  motos: [Object]
});

module.exports = mongoose.model('Motos', motosSchema);
