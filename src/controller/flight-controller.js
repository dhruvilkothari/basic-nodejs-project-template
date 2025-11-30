const {FlightService} = require("../service/index"); 
const { StatusCodes } = require("http-status-codes");   
const {SuccessResponse,ErrorResponse} = require("../utils/common/index");
const { createFlight } = require("../service/flight-service");
const createFlight = async (req, res) => {
    try {
        console.log("Inside create flight controller", req.body);
        const flight = await FlightService.createFlight(req.body);
        SuccessResponse.data = flight;
        res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while creating flight";
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
};



module.exports =  {createFlight};