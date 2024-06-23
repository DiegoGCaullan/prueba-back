const mongoose = require("mongoose");

const EncuestaSchema = mongoose.Schema({
  name: String,
  description: String,
  state: Boolean,
  category: String,
  questions: String,
  image: String,
});

module.exports = mongoose.model("Encuesta", EncuestaSchema);
