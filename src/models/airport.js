'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airport.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    code: {type: DataTypes.STRING, unique: true, allowNull: false,
      validate: {
        len: [3, 5]
      }
    },
    address: {type: DataTypes.STRING, allowNull: false, unique: true},
    city_id: {type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};