const CrudRepository = require("./crud-repository");
const { Booking } = require("../models/booking");

class BookingRepository extends CrudRepository {

    constructor() {
        super(Booking);
    }

}

module.exports = BookingRepository;