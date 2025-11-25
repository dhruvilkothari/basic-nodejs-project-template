const {AirplaneService} = require("../service/index"); 
const { StatusCodes } = require("http-status-codes");   
const createAirplane = async (req, res) => {
    try {
        console.log("Inside create airplane controller", req.body);
        const airplane = await AirplaneService.createAirplane(req.body);
        res.status(StatusCodes.CREATED).json({
            message: "Airplane created successfully",
            success: true,
            data: airplane,
            error: {}
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong while creating airplane",
            success: false,
            data: {},
            error: error
        });
    }
};


module.exports =  {createAirplane};