import createConnection from '../../database';
import { getConnection } from 'typeorm'
import { FakeData } from '../../utils/FakeData';
import { UpdateAlunoService } from './UpdateAlunoService';

describe('UpdateAlunoService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM Aluno')
        await connection.close();
    })

    const fakeData = new FakeData();

    it('Deve editar o nome do Aluno', async () => {

        const mockAluno = await fakeData.createAluno()

        const updateAlunoService = new UpdateAlunoService();

        const result = await updateAlunoService.execute({
            codigo: mockAluno.codigo,
            nome: 'Outro usuário'
        });

        expect(result).toHaveLength(0);
    })
})