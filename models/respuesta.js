const mongoose = require("mongoose");

const RespuestaSchema = mongoose.Schema({
  answers: [String],
  total: Number,
});

module.exports = mongoose.model("Respuesta", RespuestaSchema);
