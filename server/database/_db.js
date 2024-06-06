import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, () => {
      console.log(`MongoDB is Connected at ${connect.connection.host}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
