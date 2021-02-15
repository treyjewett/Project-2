module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define('Trip', {
        author: DataTypes.STRING,
        name: DataTypes.STRING,
        summary: DataTypes.TEXT,
        rating: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 10
            }
        },
        password: DataTypes.STRING
    }, {
        freezeTableName: true,
        tableName: 'Trip'
    });
    return Trip
};