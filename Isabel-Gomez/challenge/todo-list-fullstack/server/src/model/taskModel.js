const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: String,
  completed: Boolean
});

module.exports = mongoose.model('Tasks', taskSchema); // el primer valor es el nombre que le quiero dar a mi Collection, el segundo el de la variable.
