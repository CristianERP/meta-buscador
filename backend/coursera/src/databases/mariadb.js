const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    port: process.env.MARIADB_PORT,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DB
});

pool.getConnection((err) => {
    if (err) {
        console.error('Error de conexión: ' + err.stack)
        return
    }
    console.log('Mariadb Connected')
})


module.exports = pool;