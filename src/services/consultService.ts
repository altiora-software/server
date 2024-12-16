import axios from 'axios';
import { Request } from 'express';
import { enviroment } from '../configuration/environment';

export const consultService = async (req: Request) => {

    const url = `${enviroment.URI}`
    const { data } = await axios
    .post(url, req.body, {headers: {}})
    .catch((error: any) => {
        throw new Error("Error en service consul");
        
    })
}