import { getRepository } from 'typeorm'
import { Curso } from '../../entities/Curso'

class GetAllCursoService {
    async execute(){
        const cursos = await getRepository(Curso)
            .createQueryBuilder('Curso')
            .select()
            .getMany()

        console.log(cursos)
        return cursos
    }
}

export { GetAllCursoService }