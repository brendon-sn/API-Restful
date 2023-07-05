import { Request, Response } from 'express';
import { GetAllAlunoService } from '../../services/AlunoService/GetAllAlunoService';

class GetAllAlunoController{
    async handle(request: Request, response: Response){
        const getAllAlunoService = new GetAllAlunoService();

        const alunos = await getAllAlunoService.execute();

        return response.status(200).json(alunos)
    }
}

export { GetAllAlunoController }