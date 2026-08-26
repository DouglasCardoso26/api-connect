// routes/userRoutes.js
// Define os endpoints (URLs) relacionados a usuários e associa cada um
// ao método HTTP correspondente e à função do controller responsável por tratá-lo.

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /users -> retorna a lista de usuários
router.get('/', userController.listarUsuarios);

// POST /users -> cria um novo usuário
router.post('/', userController.criarUsuario);

// GET /users/:id -> retorna um único usuário pelo ID
router.get('/:id', userController.buscarUsuarioPorId);

// PUT /users/:id -> atualiza um usuário existente
router.put('/:id', userController.atualizarUsuario);

// DELETE /users/:id -> remove um usuário existente
router.delete('/:id', userController.removerUsuario);

module.exports = router;