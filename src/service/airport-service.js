
const {AirportRepository} = require('../repositories/index');
const {Logger} = require('../config/index');
const airportRepository = new AirportRepository();
const {StatusCodes} = require("http-status-codes")
const AppError = require('../utils/error/app-error');
const createAirport = async (data) => {
    console.log("Inside airport service layer", data);
    try {
        const airport = await airportRepository.create(data);
        return airport;
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

const getAirports = async () => {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        console.log("cannot fetch airports from db");
        throw new AppError("cannot fetch airports from db", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
const getAirport = async (id) => {
    try {
        const airport = await airportRepository.get(id);
        
        return airport;
    } catch (error) {
        console.log("cannot fetch airports from db");
        
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested is not present", StatusCodes.NOT_FOUND);
        }
        throw new AppError("cannot fetch airports from db", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

const destroyAirport = async (id) => {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested is not present", StatusCodes.NOT_FOUND);
        }
        Logger.error("Something went wrong in the Service Layer");
        throw error;
    }
}

const updateAirplane = async (id, data) => {
    try {
        const response = await airportRepository.update(id, data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested is not present", StatusCodes.NOT_FOUND);
        }
        Logger.error("Something went wrong in the Service Layer");
        throw error;
    }
}


module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
};