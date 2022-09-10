const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    port: 3309,
    database: 'wuye',
    user: 'root',
    password: '123456',
    multipleStatements: true
})