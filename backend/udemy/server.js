const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'udemy_db'
})

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ' + err.stack)
    return;
  }
  console.log('Conectado a la base de datos con el id ' + connection.threadId)
})

module.exports = connection