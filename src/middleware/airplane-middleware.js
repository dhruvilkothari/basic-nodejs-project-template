const {StatusCodes} = require('http-status-codes');
const {ErrorResponse}  = require('../utils/common/index');
const AppError = require('../utils/error/app-error');
const validateCreateAirplane = (req, res, next) => {
    try{
        const { modelNumber, capacity } = req.body;
        ErrorResponse.message = "Model Number is required",
        ErrorResponse.error = new AppError(["Model Number is required"], StatusCodes.BAD_REQUEST);

        if(!modelNumber){
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
    validateCreateAirplane
}