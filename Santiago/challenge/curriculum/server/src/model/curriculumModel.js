const mongoose = require('mongoose');

const curriculumSchema = mongoose.Schema({
  title: String
});

module.exports = mongoose.model('Userdetails', curriculumSchema);
