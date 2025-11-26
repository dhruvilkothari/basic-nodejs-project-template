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
      validate: {
          isAlphanumeric: true
      }

    },
    capacity: {
      type: DataTypes.INTEGER,
      defaultValue: 0 ,
      validate: {
          max:1000
        }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};