import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { CreateAlunoService } from '../../services/AlunoService/CreateAlunoService';

class CreateAlunoController{
    async handle(request: Request, response: Response) {

        const createAlunoService = new CreateAlunoService();
        
        const nome = request.body.nome;
        const codigo = uuid();

        if(nome.length === 0){
            return response.status(400).json({mensagem: 'Nome obrigatório'})
        }

        const aluno = await createAlunoService.execute({codigo, nome})

        return response.status(201).json(aluno)
    }
}

export { CreateAlunoController }