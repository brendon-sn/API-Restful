import { Request, Response } from 'express';
import { UpdateAlunoService } from '../../services/AlunoService/UpdateAlunoService';

class UpdateAlunoController{
    async handle(request: Request, response: Response){
        const updateAlunoService = new UpdateAlunoService();

        const { codigo, nome } = request.body

        if(codigo.length === 0){
            return response.status(400).json({mensagem: 'Código não informado'})
        }

        if(nome.length === 0){
            return response.status(400).json({mensagem: 'Informe um nome'})
        }

        await updateAlunoService.execute({ codigo, nome })

        return response.status(204).json()
    }
}

export { UpdateAlunoController }