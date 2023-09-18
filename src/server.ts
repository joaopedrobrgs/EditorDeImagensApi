//Importing modules:
import express from 'express'
import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env["PORT"];

const router = Router();

app.use(express.json())

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript!' })
})

app.use(router)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});