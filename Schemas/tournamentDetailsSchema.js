const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tournamentDetails = new Schema({
  date : String,
  time : String,
});

tournamentSchema = mongoose.model('tournament', tournamentDetails)

module.exports = tournamentSchema