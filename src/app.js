import express from "express";
import cors from "cors";
import equipoRoutes from "./routes/equipo.route.js";
import grupoRoutes from "./routes/grupo.route.js";
import path from "path";
import partidoRoutes from "./routes/partido.route.js";
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static(path.resolve('uploads')));

// Rutas de ejemplo
app.use('/api/equipos', equipoRoutes);
app.use('/api/grupos', grupoRoutes);
app.use('/api/partidos',partidoRoutes);
export default app;
