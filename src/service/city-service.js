const {CityRepository} = require('../repositories/index');
const {Logger} = require('../config/index');
const cityRepository = new CityRepository();
const {StatusCodes} = require("http-status-codes")
const AppError = require('../utils/error/app-error');


const createCity = async (data) => {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if(error.name == 'SequelizeUniqueConstraintError' || error.name == 'SequelizeValidationError'){
            let explanation = [] ;
            console.log("Line  "+ error.errors.length);    
            error.errors.forEach(element => {
                
                explanation.push(element.message);
            });
            console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw error;
    }
}
const deleteCity = async (cityId) => {
    try {
        const city = await cityRepository.destroy(cityId);   
        return city;
    } catch (error) {

        Logger.error("Something went wrong in the service layer");
        throw error;
    }
}

const getAllCities = async () => {
    try {
        const cities = await cityRepository.getAll();   
        return cities;
    } catch (error) {
        Logger.error("Something went wrong in the service layer");
        throw error;
    }
}
const getCity = async (cityId) => {
    try {
        const city = await cityRepository.get(cityId);
        return city;
    } catch (error) {
        Logger.error("Something went wrong in the service layer");
        throw error;
    }
}


module.exports = {
    createCity,
    deleteCity,
    getAllCities,
    getCity
};