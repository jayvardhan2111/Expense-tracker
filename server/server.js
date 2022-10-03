const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

async function main() {
  try {
    let result = await mongoose.connect(MONGODB_URI);
  } catch (error) {}
}

// main();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`Server is Listening at ${PORT} `));
