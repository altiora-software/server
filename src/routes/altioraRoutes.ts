import express from 'express';
import botAltioraController from '../controllers/altioraController';

const router = express.Router();

// Ruta para responder consultas sobre Altiora
router.post('/query', botAltioraController);

// Ruta para notificar al equipo sobre ventas aseguradas
// router.post('/notify', notifySalesTeam);

export default router;
