import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import router from '../routes';
import whatsappRoutes from '../routes/whatsappRoutes';
import altioraRoutes from '../routes/altioraRoutes';

const server = express();
server.use(cors());
server.use(express.json());
server.get('/', (req: Request, res: Response) => {
    res.status(200).send('Services Up!')
});

server.use('/v1/server', router);
server.use('/v1/webhook', whatsappRoutes);
server.use('/v1/altioraBot', altioraRoutes);

server.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
  });

export default server
