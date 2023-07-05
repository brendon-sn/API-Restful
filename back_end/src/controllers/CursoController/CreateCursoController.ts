import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { CreateCursoService } from '../../services/CursoService/CreateCursoService';

class CreateCursoController{
    async handle(request: Request, response: Response) {

        const createCursoService = new CreateCursoService();
        
        const ementa = request.body.ementa;
        const descricao = request.body.descricao;
        const codigo = uuid();

        if(descricao.length === 0){
            return response.status(400).json({mensagem: 'Descrição obrigatória'})
        }

        const curso = await createCursoService.execute({codigo, descricao, ementa})

        return response.status(201).json(curso)
    }
}

export { CreateCursoController }