import { Request, Response } from 'express';
import { GetAllCursoService } from '../../services/CursoService/GetAllCursoService';

class GetAllCursoController{
    async handle(request: Request, response: Response){
        const getAllCursoService = new GetAllCursoService();

        const cursos = await getAllCursoService.execute();

        return response.status(200).json(cursos)
    }
}

export { GetAllCursoController }