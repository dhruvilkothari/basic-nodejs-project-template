'use strict';
const {
  Model
} = require('sequelize');
const { SEAT_TYPES } = require('../utils/common');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Seat.belongsTo(models.Airplane, {foreignKey: 'airplaneId', as: 'airplane'});
    }
  }
  Seat.init({
    airplaneId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Airplanes', key: 'id'}},
    row: {type: DataTypes.INTEGER, allowNull: false},
    col: {type: DataTypes.STRING, allowNull: false},
    type: {type: DataTypes.ENUM(SEAT_TYPES.ECONOMY, SEAT_TYPES.BUSINESS, SEAT_TYPES.FIRST),values: [
      SEAT_TYPES.ECONOMY, SEAT_TYPES.BUSINESS, SEAT_TYPES.FIRST
    ], allowNull: false,
    defaultValue: SEAT_TYPES.ECONOMY
  }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};