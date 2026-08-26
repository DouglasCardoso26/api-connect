// data/users.js
// Simula uma base de dados em memória para o MVP.
// Em uma versão futura, este array seria substituído por um banco real (ex: MongoDB, PostgreSQL).

let users = [
  { id: 1, nome: 'Ana Silva', email: 'ana.silva@email.com' },
  { id: 2, nome: 'Bruno Costa', email: 'bruno.costa@email.com' }
];

// Controla o próximo ID disponível para novos cadastros.
// Inicia a partir do maior ID já existente no array, garantindo que
// nenhum novo registro seja criado com um ID duplicado.
let nextId = users.length > 0
  ? Math.max(...users.map(user => user.id)) + 1
  : 1;

// Gera e retorna um novo ID único, incrementando o contador a cada chamada.
function gerarProximoId() {
  const id = nextId;
  nextId += 1;
  return id;
}

module.exports = {
  users,
  gerarProximoId
};