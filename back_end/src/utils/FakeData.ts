import { v4 as uuid } from 'uuid';
import { CreateAlunoService } from '../services/AlunoService/CreateAlunoService';

class FakeData{
    createAlunoService = new CreateAlunoService();

    async execute(){
        await this.createAlunoService.execute({
            codigo: uuid(),
            nome: 'Nome de teste',
        })

        await this.createAlunoService.execute({
            codigo: uuid(),
            nome: 'Outro nome de teste',
        })
    }

    async createAluno(){
        const aluno = await this.createAlunoService.execute({
            codigo: uuid(),
            nome: 'ALUNOOO',
        })
        return aluno
    }
}

export { FakeData }
