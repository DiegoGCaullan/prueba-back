// dependecia para hacer la conexion a mi base de datos
const mongoose = require("mongoose");

// para leer nuestras variables de entorno en nuestra aplicacion (.env)
require("dotenv").config();

// importamos nuestra aplicacion
const app = require("./app");

const dbUser = process.env.DB_USER; // diego
const dbPass = process.env.DB_PASSWORD; // goku001
const dbHost = process.env.DB_HOST; // basedatosdiego.bx5oqlj.mongodb.net
const ipServidor = process.env.IP_SERVER; // localhost
const apiVersion = process.env.API_VERSION; // v1
const port = 3977; // puerto 3977

// creo la funcion "connectDB" para conectarnos a nuestra base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/`);
    app.listen(port, () => {
      console.log("===================================");
      console.log("============== API ================");
      console.log("===================================");
      console.log(`http://${ipServidor}:${port}/api/${apiVersion}/`);
    });
  } catch (error) {
    console.log("Error al conectarse a la base de datos", error);
  }
};

connectDB();
