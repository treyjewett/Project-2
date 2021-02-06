var orm = require('../config/orm.js');

var tripper = {
    selectAll: function(cb) {
        orm.selectAll('trip', function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne('trip', cols, vals, function(res) {
            cb(res);
        });
    }
};


module.exports = tripper;