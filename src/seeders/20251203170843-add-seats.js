'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Seats', [
      {
        airplaneId: 1,
        row: 1,
        col: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
        type: 'business'
      },
      {
        airplaneId: 1,
        row: 1,
        col: 'B',
        createdAt: new Date(),
        updatedAt: new Date(),
        type: 'business'
      },
      {
        airplaneId: 1,
        row: 10,
        col: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
        type: 'economy'
      },
      {
        airplaneId: 1,
        row: 10,
        col: 'B',
        createdAt: new Date(),
        updatedAt: new Date(),
        type: 'economy'
      },  {
        airplaneId: 2,
        row: 1,
        col: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
        type: 'business'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Seats', null, {}); 
  }
};
