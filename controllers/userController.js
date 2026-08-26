// controllers/userController.js
// Concentra a lógica de negócio (regras de manipulação dos dados) relacionada a usuários.
// As rotas apenas delegam a chamada para as funções definidas aqui.

const { users, gerarProximoId } = require('../data/users');

// Lista todos os usuários cadastrados
function listarUsuarios(req, res) {
  res.status(200).json(users);
}

// Cria um novo usuário a partir dos dados enviados no corpo (body) da requisição
function criarUsuario(req, res) {
  const { nome, email } = req.body;

  // Validação de entrada: nome e email são campos obrigatórios.
  // Sem essa checagem, a API aceitaria registros incompletos ou corrompidos.
  if (!nome || !email) {
    return res.status(400).json({
      error: 'Os campos "nome" e "email" são obrigatórios.'
    });
  }

  const novoUsuario = {
    id: gerarProximoId(),
    nome,
    email
  };

  users.push(novoUsuario);

  // Status 201 (Created) indica que um novo recurso foi criado com sucesso.
  // A resposta segue o padrão de envelope { data: ... } para casos de sucesso.
  res.status(201).json({ data: novoUsuario });
}

// Busca um único usuário a partir do ID informado na URL
function buscarUsuarioPorId(req, res) {
  const id = parseInt(req.params.id);

  const usuario = users.find(user => user.id === id);

  if (!usuario) {
    // Status 404 (Not Found) indica que o recurso solicitado não existe na base de dados.
    return res.status(404).json({ erro: `Usuário com id ${id} não encontrado.` });
  }

  res.status(200).json(usuario);
}

// Atualiza os dados de um usuário existente, localizado pelo ID
function atualizarUsuario(req, res) {
  const id = parseInt(req.params.id);
  const { nome, email } = req.body;

  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: `Usuário com id ${id} não encontrado.` });
  }

  // Sobrescreve apenas os campos de dados, preservando o ID original do registro
  users[index] = { id, nome, email };

  res.status(200).json(users[index]);
}

// Remove um usuário existente, localizado pelo ID
function removerUsuario(req, res) {
  const id = parseInt(req.params.id);

  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: `Usuário com id ${id} não encontrado.` });
  }

  // Remove 1 elemento do array a partir da posição (índice) encontrada
  users.splice(index, 1);

  // Status 204 (No Content) indica sucesso na operação, sem corpo de resposta.
  res.status(204).send();
}

module.exports = {
  listarUsuarios,
  criarUsuario,
  buscarUsuarioPorId,
  atualizarUsuario,
  removerUsuario
};