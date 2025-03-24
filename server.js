const express = require('express');
const connection = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.get('/productos', (req, res) => {
    connection.query('SELECT * FROM productos', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});


app.post('/productos', (req, res) => {
    const { nombre, descripcion, precio, cantidad } = req.body;
    connection.query(
        'INSERT INTO productos (nombre, descripcion, precio, cantidad) VALUES (?, ?, ?, ?)',
        [nombre, descripcion, precio, cantidad],
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ id: result.insertId, ...req.body });
            }
        }
    );
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
