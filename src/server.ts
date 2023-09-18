//Importing modules:
import express, { Router, Request, Response } from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();

const PORT = process.env.PORT;

// const router = Router();

//Configurando servidor para aceitar requisições de determinada URL:
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Configurando servidor para entender tanto requisições com JSON quanto com formulário:
app.use(express.json()); //json
app.use(express.urlencoded({ extended: false })); //form

//Importando e utilizando as rotas:
//!Rotas devem ficar abaixo de qualquer outra coisa que for usada no app, como, por exemplo, o método "express.json()"
const router = require('./routes/Routes');
app.use(router);

//Rodando servidor:
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});