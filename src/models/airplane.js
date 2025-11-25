'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    modelNumber: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: ''
    },
    capacity: {
      type: DataTypes.INTEGER,
      defaultValue: 0 
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};