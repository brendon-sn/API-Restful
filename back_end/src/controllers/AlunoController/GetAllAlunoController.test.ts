import createConnection from '../../database';
import { getConnection } from 'typeorm';
import { makeMockRequest } from '../../utils/mocks/mockRequest';
import { makeMockResponse } from '../../utils/mocks/mockResponse';
import { FakeData } from '../../utils/FakeData';
import { GetAllAlunoController } from './GetAllAlunoController';

describe('GetAllAlunoController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        connection.query('DELETE FROM Aluno')
        connection.close()
    })

    const fakeData = new FakeData();

    it('Deve retornar status 200 quando pegar todos os Alunos', async()=>{
        await fakeData.execute();

        const getAllAlunoController = new GetAllAlunoController();

        const request = makeMockRequest({})

        const response = makeMockResponse()

        await getAllAlunoController.handle(request, response)

        expect(response.state.status).toBe(200)
    })
})