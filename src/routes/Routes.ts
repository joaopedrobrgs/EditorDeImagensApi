import express, { Router, Request, Response } from "express";
const router = Router();

//Importando/Utilizando rota Users para toda a aplicação:
router.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript!" });
});
router.post("/", (req, res) => {
  res.send(JSON.stringify(req.body));
});
router.use("/api", require("./TinyPngApi"))

module.exports = router;
