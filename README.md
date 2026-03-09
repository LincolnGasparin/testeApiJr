# API de Autenticação com Node.js, Prisma e JWT

## 📌 Descrição

Esta API foi desenvolvida utilizando **Node.js** com **Express**, **Prisma ORM**, **JWT (JSON Web Token)** e **bcrypt** para implementar um sistema simples de autenticação de usuários.

A aplicação permite:

* Criar usuários
* Realizar login
* Gerar token JWT
* Proteger rotas utilizando autenticação baseada em token

Essa API segue uma arquitetura organizada em **Controller, Service e Repository**, separando responsabilidades e facilitando manutenção e escalabilidade.

---

# 🚀 Tecnologias utilizadas

* Node.js
* Express
* Prisma ORM
* JWT (JSON Web Token)
* bcrypt
* PostgreSQL / MySQL / SQLite (dependendo da configuração do Prisma)

---

# 📂 Estrutura do projeto

```
src
│
├── controller
│   └── userController.js
│
├── services
│   └── userServices.js
│
├── repositories
│   └── userRepositorie.js
│
├── prisma
│   └── prismaCliente.js
│
├── util
│   └── jwt.js
│
└── routes
```

### Explicação das camadas

**Controller**

* Recebe requisições HTTP
* Retorna respostas para o cliente

**Service**

* Contém a lógica de negócio da aplicação

**Repository**

* Responsável pela comunicação com o banco de dados utilizando Prisma

---

# 🔐 Autenticação

A autenticação é feita utilizando **JWT (JSON Web Token)**.

Fluxo:

1. Usuário realiza login
2. A API valida email e senha
3. Se estiver correto, um **token JWT é gerado**
4. O cliente utiliza esse token para acessar rotas protegidas

Exemplo de header:

```
Authorization: Bearer TOKEN_AQUI
```

---

# 👤 Criar usuário

A API permite cadastrar novos usuários.

### Endpoint

```
POST /register
```

### Body da requisição

```json
{
  "name": "Lincoln",
  "email": "lincoln@email.com",
  "password": "123456"
}
```

### O que acontece no cadastro

* A senha é criptografada utilizando **bcrypt**
* O usuário é salvo no banco de dados utilizando **Prisma**

### Exemplo de resposta

```json
{
  "id": 1,
  "name": "Lincoln",
  "email": "lincoln@email.com"
}
```

---

# 🔑 Login

### Endpoint

```
POST /login
```

### Body

```json
{
  "email": "lincoln@email.com",
  "password": "123456"
}
```

### Resposta

```json
{
  "token": "JWT_TOKEN_AQUI"
}
```

Esse token deve ser enviado no **header Authorization** para acessar rotas protegidas.

---

# 🔒 Rotas protegidas

Rotas protegidas exigem o envio do token JWT.

Exemplo de header:

```
Authorization: Bearer SEU_TOKEN
```

O middleware valida o token antes de permitir acesso à rota.

---

# ⚙️ Instalação do projeto

1️⃣ Clonar o repositório

```
git clone https://github.com/seu-repositorio/api-auth.git
```

2️⃣ Instalar dependências

```
npm install
```

3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env`:

```
DATABASE_URL="sua_string_de_conexao"
JWT_SECRET="sua_chave_secreta"
```

4️⃣ Rodar as migrations do Prisma

```
npx prisma migrate dev
```

5️⃣ Iniciar o servidor

```
npm run dev
```

---

# 🧪 Testando a API

Você pode testar utilizando:

* Postman
* Insomnia
* Thunder Client (VSCode)

---

# 📌 Funcionalidades implementadas

✔ Cadastro de usuário
✔ Criptografia de senha com bcrypt
✔ Login de usuário
✔ Geração de token JWT
✔ Estrutura organizada em camadas
✔ Integração com banco via Prisma

---

# 📄 Licença

Este projeto foi desenvolvido para fins educacionais.
