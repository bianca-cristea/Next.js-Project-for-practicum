import mongoose from "mongoose";

const PassionSchema = new mongoose.Schema({
  passion: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
});

const Passion = mongoose.model("Passion", PassionSchema);

export default Passion;
