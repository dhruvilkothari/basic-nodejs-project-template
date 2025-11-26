const router = require('express').Router();

const {AirplaneController,} = require('../../controller/index');
const { AirplaneMiddleware } = require('../../middleware');

router.post('/', AirplaneMiddleware.validateCreateAirplane, AirplaneController.createAirplane);
router.get("/", AirplaneController.getAirplanes);
router.get("/:id", AirplaneController.getAirplane);
router.delete("/:id", AirplaneController.destroyAirplane);
router.patch("/:id", AirplaneController.updateAirplane);

module.exports = router;