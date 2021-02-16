'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trip', [{
        author: 'Angelee',
        name: 'Istanbul',
        summary: 'I visted Istanbul in 2018 after a recommendation from a friend. One thing you will quickly discover is just how vast and expansive the country of Turkey is. Istanbul remains coated in a warm haze, making it an ideal destination for photography at all hours of the day. Street vendors and merchants fill every corner to sell fresh juices, pastries and tea. Walking is no simple task in Istanbul since most streets are very steep and aged.',
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Trip', null, {});
  }
};