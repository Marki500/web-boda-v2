import express from 'express';
import bodyParser from 'body-parser';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import formRoutes from './routes/formRoutes.js';
import excelRoutes from './routes/excelRoutes.js';

dotenv.config(); // Asegúrate de que esto está aquí al principio

// Imprimir las variables de entorno para verificar
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("PORT:", process.env.PORT);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Usar las rutas importadas
app.use('/api/form', formRoutes);
app.use('/api/excel', excelRoutes);

// Proxy para redirigir solicitudes al servidor de desarrollo de Astro
app.use('/', createProxyMiddleware({ target: 'http://localhost:4321', changeOrigin: true }));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
