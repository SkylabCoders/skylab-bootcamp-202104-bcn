const mongoose = require('mongoose');

const curriculumShema = mongoose.Schema({
  name: String,
  resumee: String,
  profileBackgroundImage: String,
  profileImage: String,
  studies: [
    {
      institutionImage: String,
      institution: String,
      title: String,
      start: String,
      finish: String,
    },
  ],
  work: [
    {
      institutionImage: String,
      institution: String,
      title: String,
      start: String,
      finish: String,
    },
  ],
});

module.exports = mongoose.model('Curriculums', curriculumShema);
