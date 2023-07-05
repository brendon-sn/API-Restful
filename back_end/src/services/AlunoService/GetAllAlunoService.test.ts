import { getConnection } from 'typeorm';
import createConnection from '../../database';
import { FakeData } from '../../utils/FakeData';
import { GetAllAlunoService } from './GetAllAlunoService';

describe('GetAllAlunoService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM Aluno')
        await connection.close()
    })

    const fakeData = new FakeData();

    it('Deve retornar todos os alunos cadastrados', async()=> {

        await fakeData.execute()

        const expectedResponse = [
            {
                nome: 'Algum usuario'
            },
            {
                nome: 'Outro usuario'
            }
        ]

        const getAllAlunoService = new GetAllAlunoService();

        const result = await getAllAlunoService.execute();

        expect(result).toMatchObject(expectedResponse)
    })
})