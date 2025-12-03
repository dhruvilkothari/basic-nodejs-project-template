'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Airplanes', key: 'id'}
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      col: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      type: {
        type: DataTypes.ENUM(SEAT_TYPES.ECONOMY, SEAT_TYPES.BUSINESS, SEAT_TYPES.FIRST),
        values: [
      SEAT_TYPES.ECONOMY, SEAT_TYPES.BUSINESS, SEAT_TYPES.FIRST
    ]

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};