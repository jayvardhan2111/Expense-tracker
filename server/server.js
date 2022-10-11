// Dependencies (NPM package)
const express = require("express");
const bodyParser = require("body-parser");


// Local Package from project
const TransactionsAPI = require("./routes/TransactionsAPI.js");
const AuthAPI = require("./routes/AuthAPI.js");
const connect = require("./database/dbconnection.js");
require("dotenv").config();


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

// To easily make an API req from react to node/express.
app.use(cors());

// connecting with mongodb atlas
connect();

app.get("/", (req, res) => {
  res.send("hello world");
});


app.use("/transaction", TransactionsAPI);
app.use("/auth", AuthAPI);

app.listen(PORT, () => console.log(`Server is Listening on ${PORT} `));
