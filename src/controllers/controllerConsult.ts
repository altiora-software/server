import { Request, Response, NextFunction } from 'express';
import { consultService } from '../services/consultService'

const consultController = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const response = await consultService(req)
        
        return res.status(200).json(response);
    } catch(error){
        next(error);
    }
}

export default consultController;