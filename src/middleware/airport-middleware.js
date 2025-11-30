const {StatusCodes} = require('http-status-codes');
const {ErrorResponse}  = require('../utils/common/index');
const AppError = require('../utils/error/app-error');
const validateCreateAirport = (req, res, next) => {
    try{
        const { name,code,address,city_id } = req.body;
        if(!name){
            ErrorResponse.message = "Name is required",
            ErrorResponse.error = new AppError(["Name is required"], StatusCodes.BAD_REQUEST);
        }
        if(!code){
            ErrorResponse.message = "Code is required",
            ErrorResponse.error = new AppError(["Code is required"], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!address){
            ErrorResponse.message = "Address is required",
            ErrorResponse.error = new AppError(["Address is required"], StatusCodes.BAD_REQUEST);
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        if(!city_id){
            ErrorResponse.message = "City ID is required",
            ErrorResponse.error = new AppError(["City ID is required"], StatusCodes.BAD_REQUEST);
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
    validateCreateAirport
}