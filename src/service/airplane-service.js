
const {AirplaneRepository} = require('../repositories/index');
const {Logger} = require('../config/index');
const airplaneRepository = new AirplaneRepository();
const createAirplane = async (data) => {
    console.log("Inside airplane service layer", data);
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        console.log("Error in airplane service layer", error);
        Logger.error("Something went wrong in the Airplane Service Layer");
        throw error;
    }
};

module.exports = {
    createAirplane
};