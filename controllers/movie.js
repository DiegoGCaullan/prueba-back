const Movie = require("../models/movie");
const image = require("../utils/image");

// obtener pelicula
async function getMovies(req, res) {
  try {
    const movies = await Movie.find();
    res.status(200).send(movies);
  } catch (error) {
    res.status(500).send({ msg: "Error al obtener pelicula" });
  }
}

// crear la pelicula
async function createMovie(req, res) {
  const newMovie = new Movie(req.body);

  if (req.files.image) {
    const imagePath = image.getFileName(req.files.image);
    newMovie.image = imagePath;

    console.log(imagePath);
  }

  // guardar pelicula
  try {
    await newMovie.save();
    res.status(200).send({ msg: "Pelicula guardada" });
  } catch (error) {
    res.status(500).send({ msg: `Error al guardar pelicula ${error}` });
  }
}

// actualizar pelicula
async function updateMovie(req, res) {
  const { id } = req.params;
  const movieData = req.body;

  if (req.files.image) {
    const imagePath = image.getFileName(req.files.image);
    movieData.image = imagePath;
  }

  try {
    await Movie.findByIdAndUpdate({ _id: id }, movieData);
    res.status(200).send({ msg: "Actualizacion de pelicula exitosa" });
  } catch (error) {
    res.status(400).send({ msg: "Error al actualizar pelicula" });
  }
}

// eliminar pelicula
async function deleteMovie(req, res) {
  const { id } = req.params;

  try {
    await Movie.findByIdAndDelete(id);
    res.status(200).send({ msg: "Pelicula eliminada" });
  } catch (error) {
    res.status(400).send({ msg: "Error al eliminar pelicula" });
  }
}
module.exports = {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
