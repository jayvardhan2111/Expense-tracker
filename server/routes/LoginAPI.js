const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(406).json({ message: "credentials not found" });
    return;
  }

  const matched = await bcrypt.compare(password, user.password);

  if(!matched){
    res.status(406).json({ message: "password is incorrect" });
    return;
  }

  const token = jwt.sign({},"secret")
  res.json({message:"success login",token})

//   console.log(result);
//   res.send(result);

});

module.exports = router;
