import { Router } from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

// Configura la conexión a la base de datos
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Ruta para manejar el envío de formularios para guardar canciones
router.post('/form-cancion', async (req, res) => {
    const { nombreCancion } = req.body;
    console.log('ASDFASDFASDFASDFASDF' + req.body);

    try {
        // Insertar nombre de la canción en la base de datos
        const [result] = await pool.query('INSERT INTO canciones (cancion) VALUES (?)', [nombreCancion]);
        res.status(200).json({ message: 'Canción guardada exitosamente' });
    } catch (error) {
        console.error('Error al guardar los datos:', error);
        res.status(500).json({ error: 'Error al guardar los datos' });
    }
});

export default router;
