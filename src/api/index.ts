import { VercelRequest, VercelResponse } from '@vercel/node';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from '../routes';
import whatsappRoutes from '../routes/whatsappRoutes';
import altioraRoutes from '../routes/altioraRoutes';

// Configuración del servidor de Express
const server = express();
server.use(cors());
server.use(express.json());

// Ruta de salud
server.get('/', (req: Request, res: Response) => {
  res.status(200).send('Services Up!');
});

// Rutas específicas
server.use('/v1/server', router);
server.use('/v1/webhook', whatsappRoutes);
server.use('/v1/altioraBot', altioraRoutes);

// Manejo de errores
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});
server.listen(8080, () => console.log(`Server listening at http://lolcalhost:8080`));
// Adaptar Express para Vercel
export default (req: VercelRequest, res: VercelResponse) => {
  server(req as any, res as any);
};
