const mongoose = require('mongoose');

const curriculumSchema = mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  image: String,
  biography: String,
  city: String,
  phone: Number,
  email: String,
  socialMedia: {
    instagram: String,
    linkedin: String,
    gitHub: String,
    portfolio: String,
    vimeo: String,
  },
  experience: [{
    dateStart: String,
    dateEnd: String,
    position: String,
    company: String,
    description: String,
  }],
  education: [{
    dateStart: String,
    dateEnd: String,
    title: String,
    center: String,
    city: String,
  }],
  codingSkills: [{
    skill: String,
    level: Number,
  }],
  designSkills: [{
    skill: String,
    level: Number,
  }],
  languages: [{
    language: String,
    level: String,
  }],
});

module.exports = mongoose.model('Curriculums', curriculumSchema);
