const {StatusCodes} = require("http-status-codes");

const info = (req, res) => {
    return res
        .status(StatusCodes.OK)
        .json({
        success: true,
        message: "OK",
        error: null,
        data: {}
    });
};

module.exports = {
    info
};