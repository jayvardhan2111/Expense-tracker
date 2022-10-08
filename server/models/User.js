const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
  firstname: { type: String, required: ["First name is required"] },
  lastname: { type: String, required: ["Last name is required"] },
  email: { type: String, required: ["Email is required"] },
  password: { type: String, required: ["Password is required"] },
    },
{timestamp:true}
    );

const User = new mongoose.model("User", UserSchema);

module.exports = User;
