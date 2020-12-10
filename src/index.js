const express = require("express");
const path = require("path");
require("dotenv").config({path: "variables.env"})

const configs = require("./config/config");
// const db = require("./config/db");
// db.authenticate()
// 	.then(() => console.log("db is conected"))
// 	.catch((error) => console.log("Error"));

const app = express();

app.set("port", process.env.PORT || 4000);
app.set("host",process.env.HOST || "0.0.0.0")

// * validar si estamos en desarrollo o en produccion
const config = configs[app.get("env")];
app.use(express.urlencoded({ extended: false }));

// ? plantillas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// ? middlewares
app.use((req, res, next) => {
	// * crea la fecha
	const fecha = new Date();
	app.locals.fechaActual = fecha.getFullYear();
	app.locals.titulo = config.nombreSitio;
	app.locals.ruta = req.path;
	// % req.path: nos muestra la ruta a la que se esta accediendo, esto se hace para colocar los links activos en el menu en el include header
	next();
});
// % se almacena en una variable global

// ? archivos estaticos
app.use(express.static(path.join(__dirname, "/public")));

// ? rutas
app.use(require("./routes/index.routes"));

// ? servidor
app.listen(app.get("port"),app.get("host"), servidor(app.get("port")));

function servidor(puerto) {
	console.log("Server on port", puerto);
}
