import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
  },
  years: { type: String, required: true },
  college: {
    type: String,
    required: true,
  },
});

const Education = mongoose.model("Education", EducationSchema);

export default Education;
