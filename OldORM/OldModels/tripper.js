// var orm = require('../config/orm.js');

// var tripper = {
//     selectAll: function(cb) {
//         orm.selectAll('trip', function(res) {
//             cb(res);
//         });
//     },
//     insertOne: function(cols, vals, cb) {
//         orm.insertOne('trip', cols, vals, function(res) {
//             cb(res);
//         });
//     }
// };

module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define('Trip', {
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return Trip
};


