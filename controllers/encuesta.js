const Encuesta = require("../models/encuesta");
const image = require("../utils/image");

// obtener encuesta
async function getEncuestas(req, res) {
  try {
    const encuestas = await Encuesta.find();
    res.status(200).send(encuestas);
  } catch (error) {
    res.status(500).send({ msg: "Error al obtener encuesta" });
  }
}

// crear la encuesta
async function createEncuesta(req, res) {
  const newEncuesta = new Encuesta(req.body);

  if (req.files.image) {
    const imagePath = image.getFileName(req.files.image);
    newEncuesta.image = imagePath;

    console.log(imagePath);
  }

  // guardar encuesta
  try {
    await newEncuesta.save();
    res.status(200).send({ msg: "Encuesta guardada" });
  } catch (error) {
    res.status(500).send({ msg: `Error al guardar encuesta ${error}` });
  }
}

// actualizar encuesta
async function updateEncuesta(req, res) {
  const { id } = req.params;
  const encuestaData = req.body;

  if (req.files.image) {
    const imagePath = image.getFileName(req.files.image);
    encuestaData.image = imagePath;
  }

  try {
    await Encuesta.findByIdAndUpdate({ _id: id }, encuestaData);
    res.status(200).send({ msg: "Actualizacion de encuesta exitosa" });
  } catch (error) {
    res.status(400).send({ msg: "Error al actualizar encuesta" });
  }
}

// eliminar encuesta
async function deleteEncuesta(req, res) {
  const { id } = req.params;

  try {
    await Encuesta.findByIdAndDelete(id);
    res.status(200).send({ msg: "Encuesta eliminada" });
  } catch (error) {
    res.status(400).send({ msg: "Error al eliminar encuesta" });
  }
}
module.exports = {
  getEncuestas,
  createEncuesta,
  updateEncuesta,
  deleteEncuesta,
};
