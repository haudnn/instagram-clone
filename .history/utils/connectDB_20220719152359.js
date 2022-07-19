import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.DB_URI;
export async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://admin:SSUVHxUGFgvK0abS@cluster0.v06gy.mongodb.net/ins-clone?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("err", err);
  }
}