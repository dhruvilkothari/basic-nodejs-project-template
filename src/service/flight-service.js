
const {FlightRepository} = require('../repositories/index');
const {Logger} = require('../config/index');
const {StatusCodes} = require("http-status-codes")
const AppError = require('../utils/error/app-error');
const flightRepository = new FlightRepository();
const createFlight = async (data) => {
    console.log("Inside Flight service layer", data);
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            let explanation = [] ;
            error.errors.forEach(element => {
                explanation.push(element.message);
            });
            console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw error;
    }
};




module.exports = {
    createFlight,
    
};