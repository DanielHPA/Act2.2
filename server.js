const express = require('express');
const pool = require('./db'); // Asegúrate de que db.js está en la misma carpeta

const app = express();
app.use(express.json()); // Middleware para JSON


app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Productos');
});


app.get('/productos', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM productos');
        res.json(rows);
    } catch (err) {
        console.error('❌ Error al obtener productos:', err);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});


app.post('/productos', async (req, res) => {
    const { nombre, descripcion, precio, cantidad } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO productos (nombre, descripcion, precio, cantidad) VALUES (?, ?, ?, ?)',
            [nombre, descripcion, precio, cantidad]
        );
        res.json({ mensaje: 'Producto agregado con éxito', id: result.insertId });
    } catch (err) {
        console.error('❌ Error al agregar producto:', err);
        res.status(500).json({ error: 'Error al agregar el producto' });
    }
});


app.delete('/productos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM productos WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({ mensaje: 'Producto eliminado con éxito' });
    } catch (err) {
        console.error('❌ Error al eliminar producto:', err);
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
});


app.put('/productos/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, cantidad } = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, cantidad = ? WHERE id = ?',
            [nombre, descripcion, precio, cantidad, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json({ mensaje: 'Producto actualizado con éxito' });
    } catch (err) {
        console.error('❌ Error al actualizar producto:', err);
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});