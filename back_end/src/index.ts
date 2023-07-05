import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import createConnection from './database';

createConnection();
const server = express();
const cors = require('cors');
server.use(cors({
    origin: 'http://localhost:4200', 
  }));

server.use(express.json())
server.use(router)

server.listen(3000, () => {
    console.log('Servidor on na porta 3000 http://localhost:3000/')
})
