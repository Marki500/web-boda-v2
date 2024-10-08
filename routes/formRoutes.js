import { Router } from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Asegúrate de que esto está aquí al principio

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
    let { attend, guestsCount, overnightCount, allergies, peluCount, ...names } = req.body;

    console.log('Form data received:', req.body);

    if (attend === undefined) {
      return res.status(400).json({ error: 'Attendance response is required.' });
    }

    // Insertar datos principales
    const [results] = await pool.query(
      'INSERT INTO formulario_respuestas (attend, guests_count, overnight_count, allergies) VALUES (?, ?, ?, ?)',
      [attend, guestsCount || 0, overnightCount || 0, allergies || '']
    );

    const respuestaId = results.insertId;
    const guestNames = [];
    const overnightNames = [];
    const guestNoAssistNames = [];
    const preferences = [];

    // Dividir los nombres en las categorías apropiadas
    for (let key in names) {
      if (key.startsWith('nombreInvitado')) {
        guestNames.push([respuestaId, names[key]]);
      } else if (key.startsWith('overnightGuestName')) {
        overnightNames.push([respuestaId, names[key]]);
      } else if (key.startsWith('peluGuestName')) {
        // Validar el nombre
        if (names[key] && names[key] !== 'on') {
          preferences.push({
            respuesta_id: respuestaId,
            nombre: names[key],
            peluqueria: names[`${key}_pelu`] === 'on',
            maquillaje: names[`${key}_maquillaje`] === 'on'
          });
        }
      } else if (key.startsWith('NoAsiste')) {
        guestNoAssistNames.push([respuestaId, names[key]]);
      }
    }

    console.log('Guest names to insert:', guestNames);
    console.log('Overnight names to insert:', overnightNames);
    console.log('Preferences to insert:', preferences);
    console.log('Guest no assist names to insert:', guestNoAssistNames);

    // Insertar nombres de invitados y de noche si asisten
    if (attend === 'yes') {
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

      // Insertar o actualizar preferencias de peluquería
      for (const pref of preferences) {
        // Actualizar la fila existente
        await pool.query(
          'INSERT INTO nombres_peluqueria (respuesta_id, nombre, peluqueria, maquillaje) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE peluqueria = VALUES(peluqueria), maquillaje = VALUES(maquillaje)',
          [pref.respuesta_id, pref.nombre, pref.peluqueria ? 1 : 0, pref.maquillaje ? 1 : 0]
        );
      }
    } else {
      if (guestNoAssistNames.length > 0) {
        const [noAssistResult] = await pool.query(
          'INSERT INTO invitados_no_asisten (respuesta_id, nombre) VALUES ?',
          [guestNoAssistNames]
        );
        console.log('No assist names inserted:', noAssistResult);
      }
    }

    res.status(200).json({ id: respuestaId });
  } catch (error) {
    console.error('Error during form submission:', error);
    res.status(500).json({ error: 'Error al guardar los datos' });
  }
});

export default router;
