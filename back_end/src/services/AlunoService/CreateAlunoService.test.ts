import { getConnection } from 'typeorm';
import createConnection from '../../database';
import { v4 as uuid } from 'uuid'
import { CreateAlunoService } from './CreateAlunoService';

describe('CreateAlunoService', () =>{
    beforeAll(async()=>{
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async()=>{
        const connection = getConnection();
        await connection.query('DELETE FROM Aluno')
        await connection.close();
    })

    it('Deve retornar o codigo do aluno criado', async()=>{
        const createAlunoService = new CreateAlunoService();

        const result = await createAlunoService.execute({
            codigo: uuid(),
            nome: 'Algum usuário'
        })

        expect(result).toHaveProperty('codigo')
    })
})
