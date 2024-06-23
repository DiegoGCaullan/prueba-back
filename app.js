require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiVersion = process.env.API_VERSION;

// creamos nuestra aplicacion
const app = express();

// configurar header HTTP - CORS
app.use(cors());

// importar rutas
const authRoutes = require("./router/auth");
const userRoutes = require("./router/user");
const encuestaRoutes = require("./router/encuesta");
const respuestasRoutes = require("./router/respuesta");

// configurar body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configurar static folder
app.use(express.static("uploads"));

// configurar rutas
app.use(`/api/${apiVersion}`, authRoutes);
app.use(`/api/${apiVersion}`, userRoutes);
app.use(`/api/${apiVersion}`, encuestaRoutes);
app.use(`/api${apiVersion}`, respuestasRoutes);

module.exports = app;
