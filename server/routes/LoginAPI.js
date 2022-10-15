const express = require("express");
const User = require("../models/User");
const bcrypt = require('bcrypt')

const router = express.Router();

router.post('/login',(req,res)=>{

    let email = req.body.email
    let psswd = req.body.password

    

})