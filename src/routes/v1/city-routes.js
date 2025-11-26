const router = require('express').Router();
const { CityController } = require('../../controller/index');
const { CityMiddleware } = require('../../middleware/index');

router.post('/',CityMiddleware.validateCityRequest, CityController.createCity);

module.exports = router;