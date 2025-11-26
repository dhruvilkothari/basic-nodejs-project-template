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

const deleteCity = async (req, res) => {
    try {
        const cityId = req.params.id;
        // Here you would typically call a service method to delete the city
        const response = await CityService.deleteCity(cityId);
        SuccessResponse.data = response;
        SuccessResponse.message = "City deleted successfully";
        res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while deleting city";
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
};  

const getAllCities = async (req, res) => {
    try {
        const cities = await CityService.getAllCities();
        SuccessResponse.data = cities;
        res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while fetching cities";
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
};


const getCity = async (req, res) => {
    try {
        const cityId = req.params.id;
        const city = await CityService.getCity(cityId);
        SuccessResponse.data = city;
        res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Something went wrong while fetching the city";
        res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
};

module.exports = {
    createCity,
    deleteCity,
    getAllCities,
    getCity
};