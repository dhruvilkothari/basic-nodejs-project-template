// const router = require('express').Router();

// const {AirplaneController,} = require('../../controller/index');
// const { AirplaneMiddleware } = require('../../middleware');

// router.post('/', AirplaneMiddleware.validateCreateAirplane, AirplaneController.createAirplane);
// router.get("/", AirplaneController.getAirplanes);
// router.get("/:id", AirplaneController.getAirplane);
// router.delete("/:id", AirplaneController.destroyAirplane);
// router.patch("/:id", AirplaneController.updateAirplane);

// module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Airplanes
 *   description: Airplane management API
 */

const router = require('express').Router();

const { AirplaneController } = require('../../controller/index');
const { AirplaneMiddleware } = require('../../middleware');
const {validate} =require("../../validator/validate");
const {airplaneCreateSchema} =require("../../validator/index");


/**
 * @swagger
 * /airplanes:
 *   post:
 *     summary: Create a new airplane
 *     tags: [Airplanes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - modelNumber
 *               - capacity
 *             properties:
 *               modelNumber:
 *                 type: string
 *                 example: "Boeing-777"
 *               capacity:
 *                 type: integer
 *                 example: 350
 *     responses:
 *       201:
 *         description: Airplane created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', validate(airplaneCreateSchema), AirplaneMiddleware.validateCreateAirplane, AirplaneController.createAirplane);


/**
 * @swagger
 * /airplanes:
 *   get:
 *     summary: Get all airplanes
 *     tags: [Airplanes]
 *     responses:
 *       200:
 *         description: List of airplanes
 */
router.get("/", AirplaneController.getAirplanes);


/**
 * @swagger
 * /airplanes/{id}:
 *   get:
 *     summary: Get airplane by ID
 *     tags: [Airplanes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Airplane ID
 *     responses:
 *       200:
 *         description: Airplane details
 *       404:
 *         description: Airplane not found
 */
router.get("/:id", AirplaneController.getAirplane);


/**
 * @swagger
 * /airplanes/{id}:
 *   delete:
 *     summary: Delete an airplane
 *     tags: [Airplanes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Airplane ID
 *     responses:
 *       200:
 *         description: Airplane deleted
 *       404:
 *         description: Not found
 */
router.delete("/:id", AirplaneController.destroyAirplane);


/**
 * @swagger
 * /airplanes/{id}:
 *   patch:
 *     summary: Update an airplane
 *     tags: [Airplanes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Airplane ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               modelNumber:
 *                 type: string
 *                 example: "Airbus-A380"
 *               capacity:
 *                 type: integer
 *                 example: 500
 *     responses:
 *       200:
 *         description: Updated successfully
 *       404:
 *         description: Not found
 */
router.patch("/:id", AirplaneController.updateAirplane);


module.exports = router;
