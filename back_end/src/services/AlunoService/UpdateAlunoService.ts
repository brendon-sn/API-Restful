import { getRepository } from "typeorm";
import { Aluno } from "../../entities/Aluno";

interface IAluno {
    codigo: string;
    nome: string;
}

class UpdateAlunoService {
    async execute({ codigo, nome}: IAluno){
        const aluno = await getRepository(Aluno)
            .createQueryBuilder()
            .update()
            .set({
                nome: nome,
            })
            .where('codigo = :codigo', { codigo })
            .execute()
        
        console.log(aluno)
        return aluno.raw
    }
}

export { UpdateAlunoService }