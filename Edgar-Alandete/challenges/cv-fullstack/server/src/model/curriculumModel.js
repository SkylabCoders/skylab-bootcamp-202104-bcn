const mongoose = require('mongoose');

const curriculumSchema = mongoose.Schema({

  personalData: {
    name: String,
    birthDate: Date,
    jobTitle: String,
    phoneNumber: Number,
    email: String,
    description: String,
    socialMedia: [{
      name: String,
      image: String,
      url: String,
    }],
  },

  workExperience: [{
    companyName: String,
    startDate: Date,
    finishDate: Date,
    isActual: Boolean,
    jobDescription: String,
  }],

  studies: {
    oficial: [{
      school: String,
      startDate: Date,
      finishDate: Date,
    }],
    languages: [{
      name: String,
      level: String,
      certification: String,
    }],
  },

  stack: [String],

  certifications: [{
    name: String,
  }],

});

module.exports = mongoose.model('Curriculums', curriculumSchema);
