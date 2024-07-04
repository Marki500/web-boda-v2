import { Router } from 'express';
import mysql from 'mysql2/promise';
import ExcelJS from 'exceljs';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

// Configura la conexión a MariaDB
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

router.get('http://localhost:3000/api/excel/descargar-respuestas', async (req, res) => {
  try {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Respuestas del Formulario');

    sheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Asistencia', key: 'attend', width: 15 },
      { header: 'Conteo de Invitados', key: 'guests_count', width: 20 },
      { header: 'Conteo de Pernoctaciones', key: 'overnight_count', width: 25 },
      { header: 'Alergias', key: 'allergies', width: 30 },
      { header: 'Creado en', key: 'created_at', width: 20 }
    ];

    const [rows] = await pool.query('SELECT * FROM formulario_respuestas');
    sheet.addRows(rows);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="RespuestasFormulario.xlsx"');
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar el archivo Excel' });
  }
});

router.get('http://localhost:3000/api/excel/descargar-dormir', async (req, res) => {
  try {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Invitados que Pernoctan');

    sheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'ID de Respuesta', key: 'respuesta_id', width: 15 },
      { header: 'Nombre', key: 'nombre', width: 30 }
    ];

    const [rows] = await pool.query('SELECT * FROM nombres_dormir');
    sheet.addRows(rows);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="InvitadosPernoctan.xlsx"');
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar el archivo Excel' });
  }
});

router.get('http://localhost:3000/api/excel/descargar-invitados', async (req, res) => {
  try {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Todos los Invitados');

    sheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'ID de Respuesta', key: 'respuesta_id', width: 15 },
      { header: 'Nombre', key: 'nombre', width: 30 }
    ];

    const [rows] = await pool.query('SELECT * FROM nombres_invitados');
    sheet.addRows(rows);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="TodosLosInvitados.xlsx"');
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar el archivo Excel' });
  }
});

export default router;
