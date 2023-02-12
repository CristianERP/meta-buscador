const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    port: process.env.MARIADB_PORT,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DB
});

async function getConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("Mariadb Connected")
        return connection;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getConnection };