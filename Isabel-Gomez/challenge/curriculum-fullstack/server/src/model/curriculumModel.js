const mongoose = require('mongoose');

const curriculumSchema = mongoose.Schema({
  personalData: {
    name: String,
    lastName: String,
    birthDate: Date,
    image: String,
    contact: {
      phone: Number,
      email: String,
      gitHub: String,
      website: String,
    },
  },
  stack: [String],
  studies: {
    grades: [{
      title: String,
      startDate: Date,
      finishDate: Date,
      organization: String,
    }],
    languages: [{
      description: String,
      level: String,
    }],
  },
  experience: [{
    organization: String,
    title: String,
    startDate: Date,
    finishDate: Date,
    description: String,
  }],
  referals: [{
    name: String,
    title: String,
    phone: Number,
  }],

});

module.exports = mongoose.model('Curriculums', curriculumSchema);
