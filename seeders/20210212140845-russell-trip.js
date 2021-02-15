'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trip', [{
        author: 'Russel',
        name: 'Ireland',
        summary: 'Ireland was a trip I will always cherish. The people are kind, the food is amazing, and the landscape is breathtaking. There was never a dull day and there is always plenty of activities to try, especially if you take an intrest in Irish alcohol products.',
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


