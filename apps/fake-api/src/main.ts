/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import server from 'json-server';
import express from 'express';

import * as path from 'path';

const dbPath = path.join(__dirname, 'db.json');
const jsonServer = server.create();
const PORT = process.env.PORT || 3333;

jsonServer.use('/assets', express.static(path.join(__dirname, 'assets'))); // Opcional: para servir arquivos estáticos
jsonServer.use('/api', express.json()); // Middleware para analisar JSON

// Rota padrão para o JSON Server apontando para o arquivo db.json
jsonServer.use('/api', (req, res, next) => {
  const router = server.router(dbPath);
  router(req, res, next);
});

// Iniciar o servidor JSON Server
jsonServer.listen(PORT, () => {
  console.log(`JSON Server está rodando em http://localhost:${PORT}/api`);
});
