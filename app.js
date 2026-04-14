require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// rotas
const topicosRoutes = require('./src/Routes/topicos.Routes');
app.use('/topicos', topicosRoutes);

const questoesRoutes = require('./src/Routes/questoes.Routes');
app.use('/questoes', questoesRoutes);

app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('🚀 Servidor rodando!');
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`💾 Banco: PostgreSQL (${process.env.DB_NAME})`);
  console.log(`🌍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log('='.repeat(50));
});