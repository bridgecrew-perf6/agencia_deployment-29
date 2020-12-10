const Viajes = require("../models/Viajes");
const Testimoniales = require("../models/Testimoniales");

exports.home = function (req, res) {
	const promises = [];

	promises.push(
		Viajes.findAll({
			limit: 3,
		})
	);
	promises.push(
		Testimoniales.findAll({
			limit: 3,
		})
	);
	// * Ejecutar los promises simultaneamente
	const resultado = Promise.all(promises);
	resultado.then((resultado) =>
		res.render("index", {
			clase: "home",
			viajes: resultado[0],
			testimoniales: resultado[1],
		})
	);
};
