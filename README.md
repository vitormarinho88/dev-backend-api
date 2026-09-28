# 🚀 Dev Backend API

API REST desenvolvida com **Node.js e Express**, criada com o objetivo de praticar e consolidar conceitos de desenvolvimento backend, arquitetura MVC, autenticação, validação de dados, integração com bancos de dados e organização de aplicações.

O projeto simula uma estrutura de e-commerce, contendo recursos para **usuários, produtos, categorias, sessões e pedidos**.

---

## 📌 Sobre o projeto

Este projeto faz parte da minha evolução nos estudos de desenvolvimento **Backend**.

Durante o desenvolvimento, estou aplicando conceitos importantes utilizados na construção de APIs, buscando manter uma estrutura organizada e com responsabilidades bem definidas entre as diferentes camadas da aplicação.

A API possui uma arquitetura baseada em **MVC (Model-View-Controller)** e utiliza **Docker** para executar os bancos de dados utilizados pelo projeto.

---

## 🛠️ Tecnologias utilizadas

* **Node.js**
* **Express.js**
* **JavaScript**
* **Sequelize**
* **PostgreSQL**
* **MongoDB**
* **Docker**
* **Yup**
* **JWT**
* **Insomnia**
* **pnpm**

---

## 🏗️ Arquitetura

O projeto utiliza uma organização baseada no padrão **MVC**, separando as principais responsabilidades da aplicação.

```text
src/
│
├── app/
│   ├── controllers/
│   │   ├── categoryController.js
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   ├── sessionController.js
│   │   └── userController.js
│   │
│   ├── middlewares/
│   │   ├── admin.js
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── category.js
│   │   ├── product.js
│   │   └── user.js
│   │
│   └── schemas/
│       └── order.js
│
├── config/
│   ├── auth.js
│   ├── database.cjs
│   ├── fileRoutes.cjs
│   └── multer.cjs
│
├── database/
│   └── migrations/
│
├── app.js
├── routes.js
└── server.js
```

### Responsabilidade das principais camadas

**Controllers**
Responsáveis pela lógica das requisições e respostas da API.

**Models**
Representam as estruturas e informações persistidas nos bancos de dados.

**Middlewares**
Responsáveis por funcionalidades executadas durante o fluxo das requisições, como autenticação e autorização administrativa.

**Schemas**
Utilizados para validação e definição da estrutura dos dados recebidos pela API.

**Routes**
Definem os endpoints disponíveis e direcionam as requisições para seus respectivos controllers.

**Config**
Centraliza configurações importantes da aplicação, como banco de dados, autenticação e upload de arquivos.

---

## 🗄️ Banco de dados

O projeto trabalha com **dois bancos de dados**, executados através do **Docker**.

A utilização dos containers facilita a configuração do ambiente de desenvolvimento e permite trabalhar com os bancos de forma isolada da instalação principal do sistema.

A comunicação com o banco relacional é realizada utilizando **Sequelize**, incluindo estrutura de migrations para controle da evolução do banco.

---

## 🔐 Autenticação

A API possui fluxo de autenticação baseado em **JWT**, permitindo controlar o acesso a determinadas rotas.

Também existem middlewares responsáveis por verificar:

* Usuário autenticado
* Permissões administrativas
* Acesso a determinados recursos

---

## 📦 Recursos da API

Entre os principais recursos desenvolvidos estão:

### 👤 Usuários

* Cadastro de usuários
* Autenticação
* Controle de acesso

### 🔑 Sessão

* Login
* Geração de token
* Autenticação através de JWT

### 📦 Produtos

* Cadastro
* Atualização
* Consulta
* Organização por categorias
* Upload e gerenciamento de imagens

### 🏷️ Categorias

* Cadastro
* Atualização
* Consulta

### 🛒 Pedidos

O projeto possui um fluxo para criação de pedidos, relacionando:

* Usuário
* Produtos
* Quantidade
* Valores
* Status do pedido

---

## 🧪 Testes da API

Durante o desenvolvimento, os endpoints são testados utilizando o **Insomnia**.

Exemplo de requisição:

```http
POST http://localhost:3001/order
```

Através do Insomnia é possível testar diferentes métodos HTTP, payloads, autenticação e respostas da API.

---

## 🐳 Docker

Os bancos de dados utilizados no projeto são executados através do Docker.

Exemplo de estrutura:

```text
Docker
│
├── Database 1
│
└── Database 2
```

Isso permite reproduzir o ambiente de desenvolvimento de maneira mais consistente e facilita o gerenciamento dos serviços necessários para a aplicação.

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/vitormarinho88/dev-backend-api.git
```

Entre na pasta:

```bash
cd dev-backend-api
```

### 2. Instale as dependências

Utilizando pnpm:

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure as informações necessárias para conexão com os bancos de dados e autenticação.

Exemplo:

```env
APP_URL=http://localhost:3001

AUTH_SECRET=sua_chave_secreta

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=seu_database
```

> Os nomes e valores das variáveis devem seguir a configuração utilizada no projeto.

### 4. Inicie os containers

Com o Docker configurado:

```bash
docker compose up -d
```

### 5. Execute as migrations

Caso o projeto esteja configurado para utilizar Sequelize CLI:

```bash
pnpm sequelize db:migrate
```

### 6. Inicie a aplicação

```bash
pnpm dev
```

A API estará disponível em:

```text
http://localhost:3001
```

---

## 📚 Principais conceitos praticados

Durante o desenvolvimento deste projeto, estou aprofundando conhecimentos em:

* Desenvolvimento de APIs REST
* Node.js
* Express
* Arquitetura MVC
* Middlewares
* Autenticação e autorização
* JWT
* Validação de dados
* Sequelize ORM
* Migrations
* PostgreSQL
* MongoDB
* Docker
* Upload de arquivos
* Relacionamento entre entidades
* Organização e separação de responsabilidades
* Testes de endpoints com Insomnia

---

## 🎯 Objetivo

O principal objetivo deste projeto é consolidar conhecimentos de **desenvolvimento backend** através da construção de uma aplicação completa, colocando em prática conceitos que fazem parte do desenvolvimento de APIs profissionais.

O projeto continua em desenvolvimento e novas funcionalidades poderão ser adicionadas conforme avanço nos estudos.

---

## 👨‍💻 Autor

**Vitor Marinho**

Desenvolvedor Front-End em evolução para **Full Stack**, atualmente aprofundando conhecimentos em desenvolvimento backend com Node.js, APIs REST, bancos de dados e arquitetura de aplicações.

### 🔗 Links

* GitHub: [@vitormarinho88](https://github.com/vitormarinho88)
* LinkedIn: [Vitor Marinho](https://www.linkedin.com/in/vitormarinho93/)

---

⭐ Se este projeto foi útil ou interessante para você, considere deixar uma estrela no repositório.
