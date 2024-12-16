import express from 'express';
import { verifyWebhook, handleMessage } from '../controllers/whatsappController';

const router = express.Router();

// Ruta para verificar el webhook
router.get('/', verifyWebhook);

// Ruta para manejar mensajes entrantes
router.post('/', handleMessage);

export default router;
