import { getRepository } from "typeorm";
import { Aluno } from "../../entities/Aluno";

interface IAluno {
    codigo: string;
}

class DeleteAlunoService {
    async execute({ codigo }: IAluno){
        const aluno = await getRepository(Aluno)
            .createQueryBuilder()
            .delete()
            .from(Aluno)
            .where('codigo = :codigo', { codigo })
            .execute();

        console.log(aluno);
        return aluno.raw
    }
}

export { DeleteAlunoService }