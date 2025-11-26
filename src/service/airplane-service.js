
const {AirplaneRepository} = require('../repositories/index');
const {Logger} = require('../config/index');
const airplaneRepository = new AirplaneRepository();
const {StatusCodes} = require("http-status-codes")
const AppError = require('../utils/error/app-error');
const createAirplane = async (data) => {
    console.log("Inside airplane service layer", data);
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
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

const getAirplanes = async () => {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        console.log("cannot fetch airplanes from db");
        throw new AppError("cannot fetch airplanes from db", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
const getAirplane = async (id) => {
    try {
        const airplane = await airplaneRepository.get(id);
        
        return airplane;
    } catch (error) {
        console.log("cannot fetch airplanes from db");
        
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested is not present", StatusCodes.NOT_FOUND);
        }
        throw new AppError("cannot fetch airplanes from db", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

const destroyAirplane = async (id) => {
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested is not present", StatusCodes.NOT_FOUND);
        }
        Logger.error("Something went wrong in the Service Layer");
        throw error;
    }
}

const updateAirplane = async (id, data) => {
    try {
        const response = await airplaneRepository.update(id, data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested is not present", StatusCodes.NOT_FOUND);
        }
        Logger.error("Something went wrong in the Service Layer");
        throw error;
    }
}


module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
};