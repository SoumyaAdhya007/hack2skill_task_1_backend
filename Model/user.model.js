const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  number: Number,
  city: String,
  url: String,
});

const UserModel = mongoose.model("userdata", UserSchema);

module.exports = {
  UserModel,
};
