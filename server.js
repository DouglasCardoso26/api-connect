// server.js
// Ponto de entrada da aplicação API Connect

const express = require('express');

// Instancia a aplicação Express
const app = express();

// Middleware global para interpretar (parse) o corpo das requisições em JSON.
// Sem isso, req.body chegaria "undefined" nas rotas que recebem dados via POST/PUT.
app.use(express.json());

// Importa e registra as rotas de usuários sob o prefixo /users
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Define a porta em que o servidor irá escutar as requisições HTTP
const PORT = 3000;

// Inicializa o servidor e o coloca em modo de escuta (listen)
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});