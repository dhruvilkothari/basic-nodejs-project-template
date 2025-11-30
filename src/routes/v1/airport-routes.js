

const router = require('express').Router();

const { AirportController } = require('../../controller/index');
const {validate} =require("../../validator/validate");
const {AirportMiddleware} =require("../../middleware");




router.post('/', AirportMiddleware.validateCreateAirport, AirportController.createAirport);



router.get("/", AirportController.getAirports);


router.get("/:id", AirplaneController.getAirplane);

router.get("/:id", AirportController.getAirport);


router.delete("/:id", AirportController.destroyAirport);

router.patch("/:id", AirportController.updateAirport);


module.exports = router;
