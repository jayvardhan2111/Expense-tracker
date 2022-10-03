const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;
var cors = require('cors')


app.use(express.json());
app.use(cors())

async function main() {
  try {
    let result = await mongoose.connect(MONGODB_URI);
  } catch (error) {}
}


app.get("/", (req, res) => {
   
  res.send("hello world");
  
});

app.post("/", (req, res) => {

    
    console.log(req.body.date)
  res.send(req);
  
});

app.listen(PORT, () => console.log(`Server is Listening at ${PORT} `));
