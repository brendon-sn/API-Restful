import { Request, Response } from 'express';
import { DeleteAlunoService } from '../../services/AlunoService/DeleteAlunoService';

class DeleteAlunoController{
    async handle(request: Request, response: Response){
        const deleteAlunoService = new DeleteAlunoService();
        
        const { codigo } = request.params;

        await deleteAlunoService.execute({ codigo })

        return response.status(204).json()
    }
}

export { DeleteAlunoController }