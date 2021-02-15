'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trip', [{
        author: 'Will',
        name: 'Colombia',
        summary: 'I absolutely love Colombia. The beaches are gorgeous. The food is absolutely amazing, and the night life is second to none. The most popular locations in the country are Bogota, Cali, Medellin, Cartegena, and Baranquilla. Plus, its CHEAP to have a good time!!',
        rating: 10,
        password: "password",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Trip', null, {});
  }
};
