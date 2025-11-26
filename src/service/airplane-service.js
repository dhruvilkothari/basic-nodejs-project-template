
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

module.exports = {
    createAirplane,
    getAirplanes
};