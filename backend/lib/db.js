var connect = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'imso',
        password: 'P@$$w0rd',
        database: 'imso',
    }
})
module.exports = connect;