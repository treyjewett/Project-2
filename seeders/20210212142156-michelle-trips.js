'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trip', [{
        author: 'Anonymous',
        name: 'Colorado',
        summary: 'Colorado has grown in popularity over the years for its beauty. The scenic hiking is what attracted me initially in 2016. My favorite experience in Colorado took within the Rocky Mountains on a drive up the 14,000 ft. peak of Mt.Evans. There are several parks and lodges along the way too. I enjoy how new and jagged these mountains appeared once we reached the top.',
        rating: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Trip', null, {});
  }
};

