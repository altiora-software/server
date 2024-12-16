import { Request, Response, NextFunction } from 'express';
import { consultService } from '../services/consultService'

const getConsultController = async (req:Request, res: Response, next: NextFunction) => {
    try {
        // const response = await consultService(req)
        res.status(200).json({ data: 'Esta data enviamos de la request' });    
    } catch(error){
        next(error);
    }
}

export default getConsultController;