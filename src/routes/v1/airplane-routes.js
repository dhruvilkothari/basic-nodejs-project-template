const router = require('express').Router();

const {AirplaneController} = require('../../controller/index');

router.post('/', AirplaneController.createAirplane);

module.exports = router;