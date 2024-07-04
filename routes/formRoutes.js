import { Router } from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Asegúrate de que esto está aquí al principio

// Imprimir las variables de entorno para verificar
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);
console.log('asdasdasdasd');

const router = Router();

// Configura la conexión a MariaDB
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

router.post('/submit', async (req, res) => {
  try {
    const { attend, guestsCount, overnightCount, allergies, ...names } = req.body;

    if (!attend) {
      return res.status(400).json({ error: 'Attendance response is required.' });
    }

    const [results] = await pool.query(
      'INSERT INTO formulario_respuestas (attend, guests_count, overnight_count, allergies) VALUES (?, ?, ?, ?)',
      [attend, guestsCount || 0, overnightCount || 0, allergies || '']
    );

    const respuestaId = results.insertId;
    const guestNames = [];
    const overnightNames = [];

    for (let key in names) {
      if (key.startsWith('nombreInvitado')) {
        guestNames.push([respuestaId, names[key]]);
      } else if (key.startsWith('overnightGuestName')) {
        overnightNames.push([respuestaId, names[key]]);
      }
    }

    if (guestNames.length > 0) {
      await pool.query(
        'INSERT INTO nombres_invitados (respuesta_id, nombre) VALUES ?',
        [guestNames]
      );
    }

    if (overnightNames.length > 0) {
      await pool.query(
        'INSERT INTO nombres_dormir (respuesta_id, nombre) VALUES ?',
        [overnightNames]
      );
    }

    res.status(200).json({ id: respuestaId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al guardar los datos' });
  }
});

export default router;
