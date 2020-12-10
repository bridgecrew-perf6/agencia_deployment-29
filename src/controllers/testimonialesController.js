const Viajes = require("../models/Viajes");
const Testimoniales = require("../models/Testimoniales");

exports.testimoniales = async function (req, res) {
    try {
        const testimoniales = await Testimoniales.findAll();
        res.render("testimoniales", { pagina: "Testimoniales", testimoniales });
    } catch (error) {
        console.log(error);
    }
}

exports.nuevoTestimonial = (req, res) => {
    // * validar los campos
    let { nombre, correo, mensaje } = req.body;

    let errores = [];
    if (!nombre) {
        errores.push({ mensaje: "Agrega tu Nombre" });
    }
    if (!correo) {
        errores.push({ mensaje: "Agrega tu correo" });
    }
    if (!mensaje) {
        errores.push({ mensaje: "Agrega tu Mensaje" });
    }

    if (errores.length) {
        res.render("testimoniales", {
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
        });
    }

    // * almacenar en la bd
    Testimoniales.create({
        nombre,
        correo,
        mensaje,
    })
        .then((testimonial) => res.redirect("/testimoniales"))
        .catch((err) => console.log(err));
    // % almacenar en la bd muy parecido a mongoose
}