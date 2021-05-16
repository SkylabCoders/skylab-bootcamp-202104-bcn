const mongoose = require('mongoose');

const DatosSchema = mongoose.Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model('Datos', DatosSchema);
