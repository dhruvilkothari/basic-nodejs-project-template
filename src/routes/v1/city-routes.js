/**
 * @swagger
 * tags:
 *   name: Cities
 *   description: City management API
 */

const router = require('express').Router();
const { CityController } = require('../../controller/index');
const { CityMiddleware } = require('../../middleware/index');


/**
 * @swagger
 * /cities:
 *   post:
 *     summary: Create a new city
 *     tags: [Cities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Mumbai"
 *     responses:
 *       201:
 *         description: City created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', CityMiddleware.validateCityRequest, CityController.createCity);


/**
 * @swagger
 * /cities:
 *   get:
 *     summary: Get all cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: List of all cities
 */
router.get('/', CityController.getAllCities);


/**
 * @swagger
 * /cities/{id}:
 *   get:
 *     summary: Get a city by ID
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: City ID
 *     responses:
 *       200:
 *         description: City details
 *       404:
 *         description: City not found
 */
router.get('/:id', CityController.getCity);


/**
 * @swagger
 * /cities/{id}:
 *   delete:
 *     summary: Delete a city
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: City ID
 *     responses:
 *       200:
 *         description: City deleted
 *       404:
 *         description: City not found
 */
router.delete('/:id', CityController.deleteCity);


module.exports = router;
