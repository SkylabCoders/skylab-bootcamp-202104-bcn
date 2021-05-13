const mongoose = require('mongoose');

const TodosSchema = mongoose.Schema({
  id: Number,
  name: String
});

module.exports = mongoose.model('Todos', TodosSchema);
