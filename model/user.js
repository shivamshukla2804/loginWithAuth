const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    gender: String,
    DOB: String,
    googleId: String
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
