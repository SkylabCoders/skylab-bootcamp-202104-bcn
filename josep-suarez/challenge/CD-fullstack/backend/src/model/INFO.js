const mongoose = require('mongoose');

const DatosSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Datos', DatosSchema);
