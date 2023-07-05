import { getRepository } from 'typeorm'
import { Aluno } from '../../entities/Aluno'

class GetAllAlunoService {
    async execute(){
        const alunos = await getRepository(Aluno)
            .createQueryBuilder('Aluno')
            .select()
            .getMany()

        console.log(alunos)
        return alunos
    }
}

export { GetAllAlunoService }