import express, { json } from "express";
import { db } from "./database/db";

const app =  express();

app.use(json());

app.listen(3001, async () => {
  await db.sync();
  console.log('Rodando em localhost:3001');
}); 