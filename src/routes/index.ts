import express from 'express';
import consultController from '../controllers/controllerConsult'
import getControllerConsult from '../controllers/getControllerConsult'

const router = express.Router();

// router.post('/v1/consult', consultController);
router.get('/', getControllerConsult);

export default router;