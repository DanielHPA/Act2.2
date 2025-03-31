const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost', // Fallback a localhost si no hay variable de entorno
    user: process.env.DB_USER || 'root',      // Fallback a root si no hay variable de entorno
    password: process.env.DB_PASSWORD || '',  // Fallback a contraseña vacía si no hay variable de entorno
    database: process.env.DB_NAME || 'test',  // Fallback a base de datos test si no hay variable de entorno
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();