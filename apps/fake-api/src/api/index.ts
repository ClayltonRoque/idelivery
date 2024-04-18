/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import server from 'json-server';
import express from 'express';

import * as path from 'path';

const dbPath = process.env.VERCEL_ENV
  ? 'db.json'
  : path.join(__dirname, 'db.json');

export const app = server.create();

app.use('/api', express.json()); // Middleware para analisar JSON

app.use(
  server.defaults({
    readOnly: true,
  })
);

// Rota padrão para o JSON Server apontando para o arquivo db.json
app.use('/api', (req, res, next) => {
  const router = server.router(dbPath);
  router(req, res, next);
});
