import mongoose from "mongoose";

const TeachingSchema = new mongoose.Schema({
  course: { type: String, required: true },
  link: { type: String, required: true },
});
const Teaching =
  mongoose.models.Teaching || mongoose.model("Teaching", TeachingSchema);

export default Teaching;
