const router = require('express').Router();

const {AirplaneController,} = require('../../controller/index');
const { AirplaneMiddleware } = require('../../middleware');

router.post('/', AirplaneMiddleware.validateCreateAirplane, AirplaneController.createAirplane);
router.get("/", AirplaneController.getAirplanes)

module.exports = router;