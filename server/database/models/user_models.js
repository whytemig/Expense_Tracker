import mongoose, { Schema } from "mongoose";

const userModel = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: ["male", "feemale", "other"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userModel);

export default User;
