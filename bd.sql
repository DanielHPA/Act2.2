CREATE DATABASE inventario_db;
USE inventario_db;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    cantidad INT NOT NULL
);

INSERT INTO productos (nombre, descripcion, precio, cantidad) VALUES
('Laptop HP', 'Laptop HP con procesador Intel i5', 15000.50, 10),
('Mouse Logitech', 'Mouse inalámbrico con sensor óptico', 500.75, 30),
('Teclado Mecánico Redragon', 'Teclado mecánico RGB con switches rojos', 1200.00, 15),
('Monitor Samsung 24"', 'Monitor LED Full HD de 24 pulgadas', 3500.00, 8),
('Silla Gamer Cougar', 'Silla ergonómica para gaming color negro y rojo', 4500.99, 5),
('SSD Kingston 1TB', 'Unidad de estado sólido NVMe de 1TB', 1800.50, 20),
('Audífonos HyperX Cloud II', 'Audífonos con micrófono y sonido envolvente', 2300.00, 12),
('Tarjeta Gráfica RTX 4060', 'Tarjeta gráfica NVIDIA RTX 4060 8GB GDDR6', 8900.00, 7),
('Fuente de Poder 750W', 'Fuente de poder certificada 80 Plus Gold', 2500.00, 10),
('Router TP-Link WiFi 6', 'Router de alta velocidad con tecnología WiFi 6', 3200.75, 6);
