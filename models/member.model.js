const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  id: String,
  name: String,
  job: String,
  nationality: String,
  profilePath: String,
  experience: String,
  paisderesidencia: String,
  skill: String,
  interesses: String,
  disponibilidade: String
}, { collection: 'members' });

module.exports = mongoose.model('Member', memberSchema);
