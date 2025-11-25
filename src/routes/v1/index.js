const router = require('express').Router();

const { InfoController, AirplaneController } = require('../../controller');

router.use('/airplanes', require('./airplane-routes'));

router.get("/info", InfoController.info);
module.exports = router;