const {AirportService} = require("../service/index"); 
const { StatusCodes } = require("http-status-codes");   
const {SuccessResponse,ErrorResponse} = require("../utils/common/index");
const createAirport = async (req, res) => {
    try {
        console.log("Inside create airport controller", req.body);
        const airport = await AirportService.createAirport(req.body);
        SuccessResponse.data = airport;
        res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while creating airport";
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
};


const getAirports = async(req,res,next)=>{
    try{

        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while fetching airports";
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
const getAirport = async(req,res,next)=>{
    try{
        console.log("Inside get airport controller", req.params.id);
        
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        res.status(StatusCodes.OK).json(SuccessResponse);

    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while fetching airport";
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

const destroyAirport = async(req,res,next)=>{
    try{
        console.log("Inside delete airport controller", req.params.id);
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while deleting airport";
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
const updateAirport = async(req,res,next)=>{
    try{
        console.log("Inside update airport controller", req.params.id, req.body);
        const response = await AirportService.updateAirport(req.params.id, req.body);
        SuccessResponse.data = response;
        res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(error){
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while updating airport";
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports =  {createAirport, getAirports, getAirport, destroyAirport, updateAirport};