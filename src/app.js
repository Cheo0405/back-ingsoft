import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import fileUpload from "express-fileupload";

import authRoutes from './routes/auth.routes.js'
import sectorRoutes from './routes/sector.routes.js'
import StudentsRoutes from './routes/student.routes.js';
import eventoRoutes from './routes/eventos.routes.js';
import cursosRoutes from './routes/cursos.routes.js';
import docenteRoutes from './routes/docente.routes.js';
import actividadRoutes from './routes/actividad.routes.js';

const app = express();

app.use(cors({
    origin: 'https://misionesinfantiles.netlify.app',
    credentials: true,
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(
    fileUpload({
         useTempFiles: true,
         tempFileDir: './upload'
    })
);
app.use(cookieParser());

app.use("/api", authRoutes); 
app.use("/api", sectorRoutes); 
app.use("/api", StudentsRoutes);
app.use("/api", eventoRoutes);
app.use("/api", cursosRoutes);
app.use("/api", docenteRoutes);
app.use("/api", actividadRoutes);

export default app;