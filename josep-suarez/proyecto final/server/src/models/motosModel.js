const mongoose = require('mongoose');

const motosSchema = mongoose.Schema({
  tipo: String,
  marca: String,
  modelo: String,
  cc: String,
  descripcion: String,
  precio: Number,
  stock: Number
});

module.exports = mongoose.model('Motos', motosSchema);
