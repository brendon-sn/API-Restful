import { Request, Response } from 'express';
import { DeleteCursoService } from '../../services/CursoService/DeleteCursoService';

class DeleteCursoController{
    async handle(request: Request, response: Response){
        const deleteCursoService = new DeleteCursoService();
        
        const { codigo } = request.params;

        await deleteCursoService.execute({ codigo })

        return response.status(204).json()
    }
}

export { DeleteCursoController }