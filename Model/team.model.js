// now lets creaet a team model as well

const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  team_name: String,
});

const TeamModel = mongoose.model("teamdata", TeamSchema);

module.exports = {
  TeamModel,
};
