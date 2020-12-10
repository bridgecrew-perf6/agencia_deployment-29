const Viajes = require("../models/Viajes");
const Testimoniales = require("../models/Testimoniales");

exports.viajes = async function (req, res) {
    try {
        const viajes = await Viajes.findAll();
        res.render("viajes", { pagina: "Proximos Viajes", viajes });
    } catch (error) {
        console.log(error);
    }
}

exports.viaje = async function (req, res) {
    try {
        const viaje = await Viajes.findByPk(req.params.id);
        res.render("viaje", { viaje });
    } catch (error) {
        console.log(error);
    }
}