const { Router } = require('express');
const router = Router();

const pool = require('../databases/mariadb');

router.get('/', (req, res) => res.json({ message: 'Api Working!' }));

router.get('/products', async (req, res) => {
    try {
        // get connection
        const conn = await pool.getConnection();

        // create new query
        const query = 'select * from products';

        // executing the query
        const rows = await conn.query(query);

        // response to the client
        res.status(200).json(rows);
    } catch (error) {
        console.log(error);
    }

});

router.post('/newproduct', async (req, res) => {
    console.log(req.body);

    // get connection
    const conn = await pool.getConnection();

    // create new query
    const query = 'INSERT INTO products VALUE (?)';

    // executing the query
    const result = await conn.query(query, [req.body.name]);

    // response to the client
    res.status(200).json({ message: "Successfully Registered" });

    // query
    console.log(result);

});


//Proyecto cursos
router.get('/courses', async (req, res) => {
    try {
        // get connection
        const conn = await pool.getConnection();

        // create new query
        const query = 'select * from courses';

        // executing the query
        const rows = await conn.query(query);

        // response to the client
        res.status(200).json(rows);
    } catch (error) {
        console.log(error);
    }

});

router.post('/addcursos', async (req, res) => {
    console.log(req.body);
    const { titulo, descripcion, precio, link } = req.body;

    // get connection
    const conn = await pool.getConnection();

    // create new query
    const query = 'INSERT INTO cursos VALUES (?,?,?,?)';

    // executing the query
    const result = await conn.query(query, [titulo, descripcion, precio, link]);

    // response to the client
    res.status(200).json({ message: "Successfully Registered" });

    // query
    console.log(result);

});


module.exports = router;