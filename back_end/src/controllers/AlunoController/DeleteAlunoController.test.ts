import createConnection from '../../database';
import { getConnection } from 'typeorm';
import { makeMockResponse } from '../../utils/mocks/mockResponse';
import { makeMockRequest } from '../../utils/mocks/mockRequest';
import { FakeData } from '../../utils/FakeData';
import { DeleteAlunoController } from './DeleteAlunoController';


describe('DeleteAlunoController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        connection.close()
    })

    const fakeData = new FakeData();

    it('Deve retornar status 204 quando o Aluno for removido', async() => {
        const mockUser = await fakeData.createAluno();

        const deleteAlunoController = new DeleteAlunoController();

        const request = makeMockRequest({
            params: {
                codigo: mockUser.codigo
            }
        });

        const response = makeMockResponse()

        await deleteAlunoController.handle(request, response);

        expect(response.state.status).toBe(204)
    })
})