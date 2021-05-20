const mongoose = require('mongoose');

const cvSchema = mongoose.Schema({
  _id: String,
  title: String,
  name: String,
  personalData: {
    adress: String,
    tlfNumber: String,
    email: String
  },
  media: {
    linkedin: String,
    github: String
  },
  studies: [
    { schoolName: String }
  ],
  lenguages: {
    catalan: String,
    spanish: String,
    english: String
  },
  workExpercience: {
    liveEvents: [
      { workName: String }

    ],
    studio: [
      { workName: String }
    ],
    others: String
  }
});

module.exports = mongoose.model('Cv-fullstacks', cvSchema);
