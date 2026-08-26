# API Connect

API REST desenvolvida para o MVP de uma plataforma de gerenciamento de usuários. Projeto criado como parte da Experiência Prática II da disciplina de Desenvolvimento Back-end (Escola da Nuvem).

## Objetivo

Fornecer uma API funcional para operações de cadastro, listagem, busca, atualização e remoção de usuários (CRUD completo), seguindo os padrões da arquitetura REST e a semântica correta dos métodos e códigos de status HTTP.

## Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript no back-end
- **Express** — microframework para criação do servidor HTTP e roteamento
- **Nodemon** (dependência de desenvolvimento) — reinicialização automática do servidor durante o desenvolvimento

## Estrutura do projeto
api-connect/
├── server.js # Ponto de entrada da aplicação
├── routes/
│ └── userRoutes.js # Definição dos endpoints de usuários
├── controllers/
│ └── userController.js # Lógica de negócio das rotas
├── data/
│ └── users.js # Persistência simulada em memória
├── package.json
└── .gitignore

## Como executar o projeto localmente

1. Clone o repositório:
git clone https://github.com/DouglasCardoso26/api-connect.git
cd api-connect

2. Instale as dependências:
npm install

3. Inicie o servidor:

node server.js


4. O servidor estará disponível em `http://localhost:3000`.

## Endpoints disponíveis

| Método | Endpoint      | Descrição                                | Status de sucesso | Status de erro |
|--------|---------------|-------------------------------------------|--------------------|-----------------|
| GET    | `/users`      | Lista todos os usuários cadastrados       | 200 OK             | —               |
| POST   | `/users`      | Cadastra um novo usuário                  | 201 Created        | 400 Bad Request |
| GET    | `/users/:id`  | Busca um usuário específico pelo ID       | 200 OK             | 404 Not Found   |
| PUT    | `/users/:id`  | Atualiza os dados de um usuário existente | 200 OK             | 404 Not Found   |
| DELETE | `/users/:id`  | Remove um usuário existente               | 204 No Content     | 404 Not Found   |

## Exemplos de uso

### Listar todos os usuários

GET /users

Resposta (200 OK):
```json
[
  { "id": 1, "nome": "Ana Silva", "email": "ana.silva@email.com" },
  { "id": 2, "nome": "Bruno Costa", "email": "bruno.costa@email.com" }
]
```

### Cadastrar um novo usuário

POST /users
Content-Type: application/json

{
"nome": "Fernanda Souza",
"email": "fernanda.souza@email.com"
}

Resposta (201 Created):
```json
{
  "data": {
    "id": 3,
    "nome": "Fernanda Souza",
    "email": "fernanda.souza@email.com"
  }
}
```

### Cadastro com dados incompletos (erro de validação)

POST /users
Content-Type: application/json

{
"nome": "Gabriel Alves"
}

Resposta (400 Bad Request):
```json
{
  "error": "Os campos \"nome\" e \"email\" são obrigatórios."
}
```

### Buscar usuário por ID

GET /users/1

Resposta (200 OK):
```json
{ "id": 1, "nome": "Ana Silva", "email": "ana.silva@email.com" }
```

### Buscar usuário com ID inexistente

GET /users/9999

Resposta (404 Not Found):
```json
{ "erro": "Usuário com id 9999 não encontrado." }
```

### Atualizar um usuário

PUT /users/2
Content-Type: application/json

{
"nome": "Bruno Costa Silva",
"email": "bruno.novo@email.com"
}

Resposta (200 OK):
```json
{ "id": 2, "nome": "Bruno Costa Silva", "email": "bruno.novo@email.com" }
```

### Remover um usuário

DELETE /users/1

Resposta: `204 No Content` (sem corpo)

## Observações técnicas

- A persistência dos dados é simulada em memória (array JavaScript), sendo reiniciada a cada nova execução do servidor. Em uma evolução futura do projeto, essa camada seria substituída por um banco de dados real.
- O projeto segue o princípio de Separação de Responsabilidades (SoC), isolando rotas, lógica de negócio e dados em camadas distintas.
- Todas as respostas seguem o formato JSON, com sucesso padronizado na chave `data` e erros de validação padronizados na chave `error`.

## Autor

Douglas Cardoso — [github.com/DouglasCardoso26](https://github.com/DouglasCardoso26)