

const router = require('express').Router();

const { FlightController } = require('../../controller/index');
const {validate} =require("../../validator/validate");
const {FlightMiddleware} =require("../../middleware");




router.post('/', FlightMiddleware.validateCreateFlight, FlightController.createFlight);

router.get('/', FlightController.getAllFlights);

module.exports = router;
