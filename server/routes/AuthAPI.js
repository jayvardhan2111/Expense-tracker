const express = require("express");
const User = require("../models/User");
const bcrypt = require('bcrypt')

const router = express.Router();

router.post("/register", async (req, res) => {
  // let result = new User(req.body)
  const  { email,password ,firstname,lastname} = req.body;
  const hashedpassword = await bcrypt.hash(password,5)

  

  const userExist = await User.findOne({ email });

  

  if(userExist){
    res.status(406).json("User is already registered with given email, try another email")
    return
  }

  const user = new User({ email,password:hashedpassword ,firstname,lastname})
  user.save()

  console.log(user);
  res.status(201).json({"message":"user is created"});
});

module.exports = router;
