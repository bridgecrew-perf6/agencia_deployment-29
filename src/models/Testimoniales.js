const Sequelize = require("sequelize");

const db = require("../config/db");

const Testimoniales = db.define("testimoniales",{
    nombre:{
        type: Sequelize.STRING
    },
    correo:{
        type: Sequelize.STRING
    },
    mensaje:{
        type:Sequelize.STRING
    },
})
// % al definir un modelo se debe colocar los campos tal cual como se llaman en la tabla

module.exports = Testimoniales;
