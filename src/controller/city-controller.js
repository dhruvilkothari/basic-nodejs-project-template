const {CityService} = require("../service/index"); 
const { StatusCodes } = require("http-status-codes");   
const {SuccessResponse,ErrorResponse} = require("../utils/common/index");

const createCity = async (req, res) => {
    try {
        console.log("Inside create city controller", req.body);
        const city = await CityService.createCity(req.body);
        SuccessResponse.data = city;
        res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while creating city";
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
};

module.exports = {
    createCity,
};