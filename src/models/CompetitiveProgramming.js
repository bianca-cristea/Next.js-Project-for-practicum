import mongoose from "mongoose";

const CompetitiveProgrammingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
});

const CompetitiveProgramming = mongoose.model(
  "CompetitiveProgramming",
  CompetitiveProgrammingSchema
);
export default CompetitiveProgramming;
