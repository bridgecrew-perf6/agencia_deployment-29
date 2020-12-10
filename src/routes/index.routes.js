const router = require("express").Router();

// ? controladores
const nosotrosController = require("../controllers/nosotrosController");
const homeController = require("../controllers/homeController");
const viajeController = require("../controllers/viajeController");
const testimonialesController = require("../controllers/testimonialesController");

// ? rutas
router
	.get("/",homeController.home)
	.get("/nosotros", nosotrosController.nosotros)
	.get("/viajes", viajeController.viajes)
	.get("/viajes/:id",viajeController.viaje)
	.get("/testimoniales",testimonialesController.testimoniales)
	.post("/testimoniales",testimonialesController.nuevoTestimonial);

module.exports = router;
