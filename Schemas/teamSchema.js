const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamMemberSchema = new Schema({
  name: String,
  id: String
});

const  teamMembersSchema= new Schema({
  captain: teamMemberSchema,
  tm2: teamMemberSchema,
  tm3: teamMemberSchema,
  tm4: teamMemberSchema,
  email : String
});

const teamSchema = mongoose.model('team', teamMembersSchema)

module.exports = teamSchema