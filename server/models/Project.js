const mongoose = require("mongoose");
const Schema = mongoose.Schema

const projectsSchema = new Schema({
  title: String,
  description: String,
  images: [String],
  gitLink: String,
  deployLink: String,
},{timestamps: true});

module.exports = mongoose.model("Portfolio", projectsSchema, "projects");
