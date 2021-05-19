const mongoose = require('mongoose');

const curriculumSchema = mongoose.Schema({
  name: String,

});

module.exports = mongoose.model('Curriculums', curriculumSchema);
