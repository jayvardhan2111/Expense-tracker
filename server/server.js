const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const Transaction = require("./models/Transaction");
require('dotenv').config();

const app = express();
const PORT = 4000;
var cors = require("cors");

// In order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// To send and receive json response
app.use(express.json());

// To easily make a API req from react to node/express.
app.use(cors());

// Used to connect mongodb using Mongoose
async function main() {
  try {
    let result = await mongoose.connect(process.env.MONGODB_URI);
    // console.log(result);
  } catch (error) {console.log(error) }
}

main();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/transaction", async (req, res) => {
  const {amount,description,date} = req.body;
  const transaction = new Transaction({
    amount,
    description,
    date,
  });
  await transaction.save();

  res.json({ message: "success" });
});

app.listen(PORT, () => console.log(`Server is Listening at ${PORT} `));
