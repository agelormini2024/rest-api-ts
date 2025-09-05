import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import healthRoute from './routes/healthRoute';
import { notFound, errorHandler } from './middleware/errorMiddleware';

const app = express();

// 1️⃣ SEGURIDAD
app.use(helmet());

// 2️⃣ LOGGING
app.use(morgan('combined'));

// 3️⃣ PARSING
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// 4️⃣ CORS
app.use(
    cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:3000',
        credentials: true,
    })
);

// 5️⃣ RUTAS
app.use('/api/users', userRoutes);
app.use('/health', healthRoute);

// 6️⃣ ERROR HANDLERS (SIEMPRE AL FINAL)
app.use(notFound);
app.use(errorHandler);

export default app;
