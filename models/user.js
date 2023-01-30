const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    maxLEngth: 20,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  member: {
    type: Boolean,
    default: false,
  },
  firstName: String,
  lastName: String,
});

UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model("User", UserSchema);
