module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define('Trip', {
        author: DataTypes.STRING,
        name: DataTypes.STRING,
        summary: DataTypes.TEXT,
        rating: DataTypes.INTEGER,
    }, {
        freezeTableName: true,
        tableName: 'Trip'
    });
    return Trip
};