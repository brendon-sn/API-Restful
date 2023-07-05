import { getConnection } from 'typeorm';
import createConnection from '../../database'
import { Request } from 'express'
import { makeMockResponse } from '../../utils/mocks/mockResponse';
import { CreateAlunoController } from './CreateAlunoController';

describe('CreateAlunoController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM Aluno')
        await connection.close()
    })

    const createAlunoController = new CreateAlunoController();

    const response = makeMockResponse()
    it('Deve retornar status 201 quando o Aluno for criado', async()=>{
        const request = {
            body: {
                nome: 'Algum usuário'
            }
        } as Request

        await createAlunoController.handle(request, response)

        expect(response.state.status).toBe(201)
    })

    it('Deve retornar status 400 quando o nome não for informado', async() => {
        const request = {
            body: {
                nome: ''
            }
        } as Request

        await createAlunoController.handle(request, response)

        expect(response.state.status).toBe(400)
    })   
})
