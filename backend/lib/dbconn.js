const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'imso',
    password: 'P@$$w0rd',
    database: 'imso',
});

connection.connect(function(error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Connected!:)');
    }
});
module.exports = connection;