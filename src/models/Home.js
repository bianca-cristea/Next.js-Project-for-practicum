import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
const Home = mongoose.model("Home", HomeSchema);
export default Home;
