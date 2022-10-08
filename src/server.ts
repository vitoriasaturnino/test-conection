import express, { json } from "express";

const app =  express();

app.use(json());

app.listen(3001, async () => {
  console.log('Rodando em localhost:3001');
}); 