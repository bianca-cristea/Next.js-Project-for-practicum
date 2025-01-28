import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://biancacristea01:1cGhLEvi4yxeVC6h@cluster0.fooea.mongodb.net/"
    );
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}
