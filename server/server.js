const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')

const app = express();
const PORT = 4000;
var cors = require("cors");



// In order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// To send and receive json response
app.use(express.json());

// To easily make a API req from react to node/express.
app.use(cors());

// Used to connect mongodb using Mongoose
async function main() {
  try {
    let result = await mongoose.connect(MONGODB_URI);
  } catch (error) {}
}

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/transaction", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => console.log(`Server is Listening at ${PORT} `));
