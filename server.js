 }
        res.json({ mensaje: 'Producto eliminado con éxito' });
    });
});

app.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, cantidad } = req.body;

    pool.query(
        'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, cantidad = ? WHERE id = ?',
        [nombre, descripcion, precio, cantidad, id],
        (err, result) => {
            if (err) {
                console.error('❌ Error al actualizar producto:', err);
                return res.status(500).json({ error: 'Error al actualizar el producto' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json({ mensaje: 'Producto actualizado con éxito' });
        }
    );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});


