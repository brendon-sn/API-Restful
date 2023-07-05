import { getRepository } from "typeorm";
import { Curso } from "../../entities/Curso";

interface ICurso {
    codigo: string;
}

class DeleteCursoService {
    async execute({ codigo }: ICurso){
        const curso = await getRepository(Curso)
            .createQueryBuilder()
            .delete()
            .from(Curso)
            .where('codigo = :codigo', { codigo })
            .execute();

        console.log(curso);
        return curso.raw
    }
}

export { DeleteCursoService }