const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  title: String,
  description: String,
  summary: String,
});

mongoose.model("profiles", profileSchema);
