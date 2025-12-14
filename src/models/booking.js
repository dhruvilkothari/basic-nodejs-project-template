'use strict';
const {
  Model
} = require('sequelize');
import Sequelize from 'sequelize';
import { Booking_STATUS } from '../utils/common/enum';
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    flightId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: [Booking_STATUS.PENDING, Booking_STATUS.CONFIRMED, Booking_STATUS.CANCELLED, Booking_STATUS.INITIATED]
      },
      totalCost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      noOfSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};