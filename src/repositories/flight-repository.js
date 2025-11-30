
const CrudRepository = require('./crud-repository');
const {Flight} = require('../models');
const { where } = require('sequelize');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filterOptions) {
        const response = await Flight.getAll({
            where: filterOptions
        })
        return response;
    }
    
}

module.exports = FlightRepository;