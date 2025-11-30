const {StatusCodes} = require('http-status-codes');
const {ErrorResponse}  = require('../utils/common/index');
const AppError = require('../utils/error/app-error');
const validateCreateFlight = (req, res, next) => {
    try{
        const { flightNumber,airplaneId,departureAirportId,arrivalAirportId,arrivalTime, departureTime,price,totalSeats } = req.body;
        if(!flightNumber){
            ErrorResponse.message = "Flight Number is required",
            ErrorResponse.error = new AppError(["Flight Number is required"], StatusCodes.BAD_REQUEST);
        }
        if(!airplaneId){
            ErrorResponse.message = "Airplane ID is required",
            ErrorResponse.error = new AppError(["Airplane ID is required"], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!departureAirportId){
            ErrorResponse.message = "Departure Airport ID is required",
            ErrorResponse.error = new AppError(["Departure Airport ID is required"], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!arrivalAirportId){
            ErrorResponse.message = "Arrival Airport ID is required",
            ErrorResponse.error = new AppError(["Arrival Airport ID is required"], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!arrivalTime){
            ErrorResponse.message = "Arrival Time is required",
            ErrorResponse.error = new AppError(["Arrival Time is required"], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!departureTime){
            ErrorResponse.message = "Departure Time is required",
            ErrorResponse.error = new AppError(["Departure Time is required"], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!price){
            ErrorResponse.message = "Price is required",
            ErrorResponse.error = new AppError(["Price is required"], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!totalSeats){
            ErrorResponse.message = "Total Seats is required",
            ErrorResponse.error = new AppError(["Total Seats is required"], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }

        if(departureAirportId === arrivalAirportId){
            ErrorResponse.message = "Departure and Arrival Airports cannot be the same",
            ErrorResponse.error = new AppError(["Departure and Arrival Airports cannot be the same"], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(new Date(arrivalTime) <= new Date(departureTime)){
            ErrorResponse.message = "Arrival time must be after Departure time",
            ErrorResponse.error = new AppError(["Arrival time must be after Departure time"], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(price < 0){
            ErrorResponse.message = "Price must be greater than zero",
            ErrorResponse.error = new AppError(["Price must be greater than zero"], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }

        
        next();


    }catch(err){
        return res.status(StatusCodes.BAD_REQUEST).json({
                message: err.message,
                success: false,
                error: {"explanation":"Something went wrong while validating the airplane creation request"},
                data: {},
            });
    }
}


module.exports = {
    validateCreateFlight
}