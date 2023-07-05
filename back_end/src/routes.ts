import { Router, Request, Response } from 'express';
import { CreateAlunoController } from './controllers/AlunoController/CreateAlunoController';
import { DeleteAlunoController } from './controllers/AlunoController/DeleteAlunoController';
import { GetAllAlunoController } from './controllers/AlunoController/GetAllAlunoController';
import { UpdateAlunoController } from './controllers/AlunoController/UpdateAlunoController';

import { CreateCursoController } from './controllers/CursoController/CreateCursoController';
import { DeleteCursoController } from './controllers/CursoController/DeleteCursoController';
import { GetAllCursoController } from './controllers/CursoController/GetAllCursoController';
import { UpdateCursoController } from './controllers/CursoController/UpdateCursoController';



const router = Router();
const createAlunoController = new CreateAlunoController();
const deleteAlunoController = new DeleteAlunoController();
const getAllAlunoController = new GetAllAlunoController();
const updateAlunoController = new UpdateAlunoController();

const createCursoController = new CreateCursoController();
const deleteCursoController = new DeleteCursoController();
const getAllCursoController = new GetAllCursoController();
const updateCursoController = new UpdateCursoController();



router.get('/', (request: Request, response: Response) => {
    return response.json({mensagem: 'TesteVR API RESTful' })
})
router.post('/alunos', createAlunoController.handle)
router.get('/alunos', getAllAlunoController.handle)
router.patch('/alunos', updateAlunoController.handle)
router.delete('/alunos/:codigo', deleteAlunoController.handle)

router.post('/cursos', createCursoController.handle)
router.get('/cursos', getAllCursoController.handle)
router.patch('/cursos', updateCursoController.handle)
router.delete('/cursos/:codigo', deleteCursoController.handle)

export { router }
