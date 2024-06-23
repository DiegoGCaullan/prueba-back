const express = require("express");
const RespuestasController = require("../controllers/respuesta");
const api = express.Router();

api.post("/respuestas", RespuestasController.Resultados);

module.exports = api;
