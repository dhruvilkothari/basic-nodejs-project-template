
const {FlightRepository} = require('../repositories/index');
const {Logger} = require('../config/index');
const {StatusCodes} = require("http-status-codes")
const AppError = require('../utils/error/app-error');
const {Op} = require("sequelize");
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


const getAllFlights = async (query) => {
    //trip: 
    try {
        let customFilter = {};
        let sort = [];
        if (query.trips) {

            [departureAirportId, arrivalAirportId] = query.trips.split("-");
            customFilter.departureAirportId = departureAirportId;
            customFilter.arrivalAirportId = arrivalAirportId;
            if(departureAirportId == arrivalAirportId){
                throw new AppError("Departure and Arrival airports cannot be the same", StatusCodes.BAD_REQUEST);
            }

        }
        if(query.price){
            [minPrice, maxPrice] = query.price.split("-");
            customFilter.price =  {[Op.between]: [minPrice, maxPrice== undefined ? 1000000 : maxPrice]};
        }
        if(query.travellers){
            customFilter.totalSeats = {[Op.gte]: parseInt(query.travellers)};
        }
        if(query.tripDate){
            customFilter.departureTime = {[Op.between]: [new Date(query.tripDate), new Date(query.tripDate).setHours(23,59,59)]};
        }
        if(query.sort){
            const params = query.sort.split(",");
            const sortFilter = params.map((param) => {
                const [field, order] = param.split("_");
                return [field, order.toUpperCase()];
            });
            sort = sortFilter;

        }
        try{
            const flights = await flightRepository.getAllFlights(customFilter, sort);
            return flights;

        }  catch(err){
            throw new AppError("Invalid trip format", StatusCodes.BAD_REQUEST);
        }
        
        
    } catch (error) {
        console.log("Something went wrong in the service layer");
        throw error;
    }
};



module.exports = {
    createFlight,
    getAllFlights
    
};