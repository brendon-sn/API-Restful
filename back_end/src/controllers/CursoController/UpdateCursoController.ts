import { Request, Response } from 'express';
import { UpdateCursoService } from '../../services/CursoService/UpdateCursoService';

class UpdateCursoController{
    async handle(request: Request, response: Response){
        const updateCursoService = new UpdateCursoService();

        const { codigo, descricao, ementa } = request.body

        if(codigo.length === 0){
            return response.status(400).json({mensagem: 'Código não informado'})
        }

        if(descricao.length === 0){
            return response.status(400).json({mensagem: 'Informe uma descrição para o curso'})
        }

        await updateCursoService.execute({ codigo, descricao, ementa })

        return response.status(204).json()
    }
}

export { UpdateCursoController }