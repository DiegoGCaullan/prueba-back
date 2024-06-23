const Respuesta = require("../models/respuesta");

async function Resultados(req, res) {
  try {
    const { answers, total } = req.body;
    const nuevaRespuesta = new Respuesta({ answers, total });
    await nuevaRespuesta.save();
    res.status(200).send({ msg: "Respuestas guardadas correctamente" });
  } catch (error) {
    res.status(400).json({ msg: "No se guardo las respuestas", error });
  }
}

module.exports = {
  Resultados,
};
