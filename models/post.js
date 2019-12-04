const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  date: Date,
  title: String,
  subtitle: String,
  body: String,
  tags: [String]
});

module.exports = mongoose.model("Post", postSchema);
