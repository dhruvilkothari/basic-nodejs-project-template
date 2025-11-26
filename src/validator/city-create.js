const joi = require('joi');

const cityCreateSchema = joi.object({
    name: joi.string().min(3).max(50).required(),
});

module.exports = cityCreateSchema