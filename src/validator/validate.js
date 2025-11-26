const AppError = require("../../src/utils/error/app-error");
const { ErrorResponse } = require("../utils/common");
const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
           ErrorResponse.error = error.details.map((detail) => detail.message).join(", ");
           return res.status(400).json(ErrorResponse);
        }
        next();
    };
};

module.exports = {
    validate
};