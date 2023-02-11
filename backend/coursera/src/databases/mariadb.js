const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    port: 3310,
    user: 'root',
    password: 'password',
    database: 'courseradb'
});

async function getConnection() {
    try {
        const connection = await pool.getConnection();
        return connection;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getConnection };