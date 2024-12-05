//Archivo para arrancar la aplicacion

//Creo el servidor por donde se va a desplegar la aplicacion con ayuda de express
//https:localhost/4000
import app from './app.js'
import dotenv from "dotenv";
import {connectDB} from "./db.js"

dotenv.config();
connectDB();
app.listen(
    process.env.PORT,
    console.log("Servidor en el puerto " + process.env.PORT)
  );
