const express = require("express");
const Transaction = require("../models/Transaction.js");

const router = express.Router();

// This API only handles transaction part i.e adding expesnse only

// It fetches all expenses from database in decreasing order of creation time
router.get("/", async (req, res) => {
  let result = await Transaction.find({}).sort({ createdAt: -1 }); // sorted in decresing order
  res.json(result);
});

// It stores new document in database
router.post("/", async (req, res) => {
  const { amount, description, date } = req.body;
  const transaction = new Transaction({ amount, description, date });

  await transaction.save();

  res.json({ message: "success" });
});

router.patch("/:id",async (req,res) => {

  const id = req.params.id
  // const { amount, description, date } = req.body;
  await Transaction.updateOne({_id:id},req.body) 
  res.json({ message: "success" });

})

router.delete("/:id", async (req, res) => {
  //  await Transaction.findOneAndDelete({ _id: req.params.id });
   await Transaction.deleteOne({ _id: req.params.id });
  res.json({
    message: "success",
  });
});

module.exports = router;
