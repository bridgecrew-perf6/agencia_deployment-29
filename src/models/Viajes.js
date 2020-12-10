const Sequelize = require("sequelize");

const db = require("../config/db");

const Viaje = db.define("viajes",{
    titulo:{
        type: Sequelize.STRING
    },
    precio:{
        type: Sequelize.STRING
    },
    fecha_ida:{
        type:Sequelize.DATE
    },
    fecha_vuelta:{
        type:Sequelize.DATE
    },
    imagen:{
        type:Sequelize.STRING
    },
    descripcion:{
        type:Sequelize.STRING
    },
    disponibles:{
        type:Sequelize.STRING
    },
})
// % al definir un modelo se debe colocar los campos tal cual como se llaman en la tabla

module.exports = Viaje;