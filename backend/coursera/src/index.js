const app = require('./app');

const port = process.env.PORT || 3000
async function main() {
    await app.listen(port);
    console.log('Servidor corriendo en el puerto ' + port)
}

main();