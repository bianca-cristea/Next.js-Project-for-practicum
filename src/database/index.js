import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectToDBAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI_ADMIN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected as admin");
  } catch (error) {
    console.error("Error connecting as admin:", error);
  }
}

export async function connectToDBApp() {
  try {
    await mongoose.connect(process.env.MONGODB_URI_APP, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected as app user");
  } catch (error) {
    console.error("Error connecting as app user:", error);
  }
}
