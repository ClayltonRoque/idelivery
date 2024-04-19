/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import server from 'json-server';
import express from 'express';

import db from '../db.json';

export const app = server.create();

app.use(
  server.defaults({
    readOnly: true,
  })
);

app.use('/api', express.json()); // Middleware para analisar JSON

// Rota padrão para o JSON Server apontando para o arquivo db.json
app.use('/api', (req, res, next) => {
  const router = server.router(db);
  router(req, res, next);
});
