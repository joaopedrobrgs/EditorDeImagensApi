import express, { Router, Request, Response } from "express";
const router = Router();
import tinify from 'tinify';

// const KEY = process.env.TINIFY_API_KEY
// if(!!KEY){
//   tinify.key = KEY;
// }


router.get("/", (req: Request, res: Response) => {
  res.json({ message: `Tinify Key: ${process.env.TINIFY_API_KEY}` });
});
