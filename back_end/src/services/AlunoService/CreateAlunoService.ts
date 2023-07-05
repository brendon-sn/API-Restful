import { getRepository } from 'typeorm';
import { Aluno } from '../../entities/Aluno';

interface IAluno {
    codigo: string,
    nome: string,
}

class CreateAlunoService {
    async execute({ codigo, nome }:IAluno){
        
        const aluno = await getRepository(Aluno)
            .createQueryBuilder()
            .insert()
            .into(Aluno)
            .values([
                {
                    codigo: codigo,
                    nome: nome,
                }
            ])
            .execute();

        console.log(aluno.identifiers[0])

        return aluno.identifiers[0]
    }
}

export { CreateAlunoService }