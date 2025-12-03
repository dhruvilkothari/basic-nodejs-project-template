
const CrudRepository = require('./crud-repository');
const {Flight, Sequelize} = require('../models');
const { where, col } = require('sequelize');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filterOptions) {
        const response = await Flight.getAll({
            where: filterOptions,
            include: [{
                model: 'Airplane',
                required: true,
            },
            {
                model: 'Airport',
                required: true,
                on: {
                    col1: Sequelize.where(col('Flight.departureAirportId'), '=', col('Airport.id'))
                }
            },
            {
                model: 'Airport',
                required: true,
                as: "departureAirport",
                on: {
                    col1: Sequelize.where(col('Flight.arrivalAirportId'), '=', col('departureAirport.code'))
                },
                include:[
                    {model: 'City', required: true}
                ]
                
            }, {
                model: 'Airport',
                required: true,
                as: "arrivalAirport",
                on: {
                    col1: Sequelize.where(col('Flight.arrivalAirportId'), '=', col('arrivalAirport.code'))
                },
                include:[
                    {model: 'City', required: true}
                ]

            }]
        })
        return response;
    }
    
}

module.exports = FlightRepository;