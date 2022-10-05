const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  amount: Number,
  description: String,
  date: { type: Date, default: new Date() },
  createdAt: { type: Date, default: Date.now },
});

const Transaction = new mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
