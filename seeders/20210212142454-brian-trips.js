'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('trip', [{
        author: 'Brian',
        name: 'Amsterdam',
        summary: 'Amsterdam lives and breathes art. I visited to attend Amsterdam Dance Event in 2019. The city itself is dense with a growing population. Transportation varies between biking, running, driving and even sailing. I would reccomend this city to anyone who is craving a new experience at a leisurely pace.',
        rating: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('trip', null, {});
  }
};
