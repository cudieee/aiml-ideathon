const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    unique: true,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    unique: true,
    required: true,
  },
  teamLeaderName: {
    type: String,
    required: true,
  },
  teamLeaderUID: {
    type: String,
    unique: true,
    required: true,
  },
  teamLeaderMobile: {
    type: String,
    unique: true,
    required: true,
  },
  yearAndDepartmentOfStudy: {
    type:String,
    required:true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  teamSize: {
    type: Number,
    required: true,
  },
  teamMembers: [teamMemberSchema],
  problemStatementID: {
    type: String,
    required: true,
  },
  problemStatement: {
    type: String,
    unique: true,
    required: true,
  },
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
