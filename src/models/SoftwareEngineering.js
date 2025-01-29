import { duration } from "@mui/material";
import mongoose from "mongoose";

const SoftwareEngineeringSchema = new mongoose.Schema({
  position: { type: String, required: true },
  company: { type: String, required: true },
  duration: { type: String, required: true },
  location: { type: String, required: true },
});

const SoftwareEngineering =
  mongoose.models.SoftwareEngineering ||
  mongoose.model("SoftwareEngineering", SoftwareEngineeringSchema);

export default SoftwareEngineering;
