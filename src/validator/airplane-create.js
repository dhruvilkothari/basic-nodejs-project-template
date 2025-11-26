const joi =require('joi');

const airplaneCreateSchema = joi.object({
    modelNumber: joi.string().min(3).max(20).required(),
    capacity: joi.number().min(50).max(850).required()
});

 module.exports = airplaneCreateSchema
