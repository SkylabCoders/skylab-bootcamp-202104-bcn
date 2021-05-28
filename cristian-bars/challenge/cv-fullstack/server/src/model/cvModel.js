const mongoose = require('mongoose');

const cvSchema = mongoose.Schema({
  datos_personales: {
    name: String,
    sureName: String
  },
  historial_laboral: {
    0: {
      titulo: String,
      empresa: String,
      duracion: String,
      descripcion: String
    }
  },
  historial_academico: {
    0: {
      titulo: String,
      institucion_academica: String,
      curso: String,
      description: String
    }
  }
});

module.exports = mongoose.model('Curriculum', cvSchema);
