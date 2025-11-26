
const {StatusCodes} = require('http-status-codes');
const {ErrorResponse}  = require('../utils/common/index');
const AppError = require('../utils/error/app-error');

const validateCityRequest = (req, res, next) => {
    try{
        const { name } = req.body;
        ErrorResponse.message = "City Name is required",
        ErrorResponse.error = new AppError(["City Name is required"], StatusCodes.BAD_REQUEST);

        if(!name){
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
        next();


    }catch(err){
        return res.status(StatusCodes.BAD_REQUEST).json({
                message: err.message,
                success: false,
                error: {"explanation":"Something went wrong while validating the city creation request"},
                data: {},
            });
    }
}


module.exports = {
    validateCityRequest
}