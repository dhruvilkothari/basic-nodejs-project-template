const router = require('express').Router();
const { CityController } = require('../../controller/index');
const { CityMiddleware } = require('../../middleware/index');

router.post('/',CityMiddleware.validateCityRequest, CityController.createCity);

router.get('/', CityController.getAllCities);

router.get('/:id', CityController.getCity);

router.delete("/:id", CityController.deleteCity);

module.exports = router;