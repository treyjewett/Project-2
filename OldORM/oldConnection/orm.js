//takes in the connection
// var connection = require('../config/connection.js');

// function printQuestionMarks(num) {
//     var arr = [];
//     for (i = 0; i < num; i++) {
//         arr.push('?');
//     }
//     return arr.toString();
// }

// function objToSql(ob) {
//     var arr = [];
//     for (var key in ob) {
//         var value = ob[key];
//         if (Object.hasOwnProperty.call(ob, key)) {
//             if (typeof value === 'string' && value.indexOf(' ') >= 0) {
//                 value = '"' + value + '"';
//             }
//             arr.push(key + '=' + value);
//         }
//     }
//     return arr.toString();
// }

// var orm = {
//     selectAll: function(tableInput, cb) {
//         var queryString = 'SELECT * FROM ' + tableInput + ';';
//         connection.query(queryString, function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     },
//     insertOne: function(table, cols, vals, cb) {
//         var queryStr = 'INSERT INTO ' + table;

//         queryStr += " (";
//         queryStr += cols.toString();
//         queryStr += ") ";
//         queryStr += "VALUES (";
//         queryStr += printQuestionMarks(vals.length);
//         queryStr += ") ";

//         console.log(queryStr);

//         connection.query(queryStr, vals, function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             cb(result);
//         });
//     }
// };

// module.exports = orm;


//===================connection info================
// const mysql = require('mysql');

// const connection = mysql.createConnection(
//   process.env.JAWSDB_URL ||
//   {
//     host: 'localhost',
//     // Your port, if not 3306
//     port: 3306,
  
//     // Your MySQL username
//     user: 'root',
  
//     // Your MySQL password
//     password: '',
  
//     // Name of database
//     database: 'tripper_db'
//   });

// module.exports = connection;

// {

