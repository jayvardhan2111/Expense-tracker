const mongoose = require("mongoose");

// Used to connect mongodb using Mongoose
async function connect() {
    try {
      let result = await mongoose.connect(process.env.MONGODB_URI);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  }



module.exports = connect 