import createConnection from '../../database';
import { getConnection } from 'typeorm'
import { FakeData } from '../../utils/FakeData';
import { DeleteAlunoService } from './DeleteAlunoService';

describe('DeleteAlunoService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.close();
    })

    const fakeData = new FakeData();

    it('Deve retornar um array vazio quando o Aluno for deletado', async () => {
        const mockAluno = await fakeData.createAluno();

        const deleteAlunoService = new DeleteAlunoService();

        const result = await deleteAlunoService.execute({ codigo: mockAluno.codigo })

        expect(result).toHaveLength(0)
    })
})