const {AirplaneService} = require("../service/index"); 
const { StatusCodes } = require("http-status-codes");   
const {SuccessResponse,ErrorResponse} = require("../utils/common/index");
const createAirplane = async (req, res) => {
    try {
        console.log("Inside create airplane controller", req.body);
        const airplane = await AirplaneService.createAirplane(req.body);
        SuccessResponse.data = airplane;
        res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while creating airplane";
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
};


const getAirplanes = async(req,res,next)=>{
    try{

        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while fetching airplane";
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports =  {createAirplane, getAirplanes};