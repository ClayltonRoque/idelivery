/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { app } from './api';

const PORT = process.env.PORT || 3000;

// Iniciar o servidor JSON Server
app.listen(PORT, () => {
  console.log(`JSON Server está rodando em http://localhost:${PORT}/api`);
});
