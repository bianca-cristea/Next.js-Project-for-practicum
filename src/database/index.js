// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// export default async function connectToDB() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to the database");
//   } catch (error) {
//     console.error("Error connecting to the database: ", error);
//     console.error("Stack Trace:", error.stack);
//   }
// }
// export async function connectToDBAdmin() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI_ADMIN, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected as admin");
//   } catch (error) {
//     console.error("Error connecting as admin:", error);
//   }
// }
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI_ADMIN = process.env.MONGODB_URI_ADMIN;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI must be defined in .env");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

let cachedAdmin = global.mongooseAdmin;

if (!cachedAdmin) {
  cachedAdmin = global.mongooseAdmin = { conn: null, promise: null };
}

export async function connectToDBAdmin() {
  if (cachedAdmin.conn) {
    return cachedAdmin.conn;
  }

  if (!cachedAdmin.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cachedAdmin.promise = mongoose
      .connect(MONGODB_URI_ADMIN, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  cachedAdmin.conn = await cachedAdmin.promise;
  return cachedAdmin.conn;
}
