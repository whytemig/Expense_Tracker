import mongoose from "mongoose";

const transactionModel = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      enum: ["cash", "card"],
      required: true,
    },
    category: {
      type: String,
      enum: ["savings", "expense", "assest"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      default: "N/A",
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionModel);

export default Transaction;
