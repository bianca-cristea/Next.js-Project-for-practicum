import mongoose from "mongoose";

const ResearchSchema = new mongoose.Schema({
  publication: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
const Research =
  mongoose.models.Research || mongoose.model("Research", ResearchSchema);

export default Research;
