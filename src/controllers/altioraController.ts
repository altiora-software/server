import { Request, Response, NextFunction } from 'express';
import { botAltioraService } from '../services/botAltioraService';

const botAltioraController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await botAltioraService(req);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

export default botAltioraController;
