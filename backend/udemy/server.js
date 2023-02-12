const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
})

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ' + err.stack)
    return;
  }
  console.log('Conectado a la base de datos con el id ' + connection.threadId)
})

module.exports = connection