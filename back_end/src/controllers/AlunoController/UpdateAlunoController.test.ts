import createConnection from '../../database';
import { getConnection } from 'typeorm';
import { Request } from 'express';
import { makeMockResponse } from '../../utils/mocks/mockResponse';
import { FakeData } from '../../utils/FakeData';
import { UpdateAlunoController } from './UpdateAlunoController';

describe('UpdateAlunoController', () => {
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

    it('Deve retornar status 204 quando Aluno for editado', async () => {
        
        const mockUser = await fakeData.createAluno()
        
        const updateAlunoController = new UpdateAlunoController()

        const request = {
            body: {
                codigo: mockUser.codigo,
                nome: 'MUDAR NOME'
            }
        } as Request

        const response = makeMockResponse();

        await updateAlunoController.handle(request, response)

        expect(response.state.status).toBe(204)
    })
})