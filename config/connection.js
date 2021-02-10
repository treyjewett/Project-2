const mysql = require('mysql');

const connection = mysql.createConnection(
  process.env.JAWSDB_URL ||
  {
    host: 'localhost',
    // Your port, if not 3306
    port: 3306,
  
    // Your MySQL username
    user: 'root',
  
    // Your MySQL password
    password: '',
  
    // Name of database
    database: 'tripper_db'
  });

module.exports = connection;