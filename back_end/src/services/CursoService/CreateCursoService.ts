import { getRepository } from 'typeorm';
import { Curso } from '../../entities/Curso';

interface ICurso {
    codigo: string,
    descricao: string,
    ementa: string,
}

class CreateCursoService {
    async execute({ codigo, descricao, ementa }:ICurso){
        
        const curso = await getRepository(Curso)
            .createQueryBuilder()
            .insert()
            .into(Curso)
            .values([
                {
                    codigo: codigo,
                    descricao: descricao,
                    ementa: ementa,
                }
            ])
            .execute();

        console.log(curso.identifiers[0])

        return curso.identifiers[0]
    }
}

export { CreateCursoService }