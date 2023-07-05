import { getRepository } from "typeorm";
import { Curso } from "../../entities/Curso";

interface ICurso {
    codigo: string;
    descricao: string;
    ementa: string;
}

class UpdateCursoService {
    async execute({ codigo, descricao, ementa}: ICurso){
        const curso = await getRepository(Curso)
            .createQueryBuilder()
            .update()
            .set({
                descricao: descricao,
                ementa: ementa,
            })
            .where('codigo = :codigo', { codigo })
            .execute()
        
        console.log(curso)
        return curso.raw
    }
}

export { UpdateCursoService }