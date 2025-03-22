import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
    console.error("Stack Trace:", error.stack);
  }
}
