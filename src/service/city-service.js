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


module.exports = {
    createCity,
};