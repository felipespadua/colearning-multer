# Query string parameters => /book?nome="" => req.query

## Método GET

## Realizar alguma busca no servidor

# Path parameters => /book/:id => req.params

## Métodos GET, PUT, DELETE

## Realizar alguma operação (busca ou criação ou atualização ou deleção)

## em algum determinado recurso (identificado pelo id)

# Body => { } => req.body

## Métodos POST e PUT

## Realizar algum tipo de autenticação no sistema ou envio de dados

## de um formulário para o servidor para a criação ou atualização de um recurso

# Exercícios

### 1. Renderizar a página index construindo uma tabela com a relação de todos usuários no sistema

- rota GET users

### 2. Criar um formulário de dados para a criação de um novo usuário

- rota POST users

### 3. Inserir um campo de upload de imagem para a foto do usuário

### 4. Na tabela de usuários inserir botão "Exibir" para cada linha. Esse botão redirecionará para uma nova página com todas informações do usuário, incluindo a renderização de sua foto.

- rota GET user/:id => retornar dados do usuário de um determinado ID.

### 5. Na tabela de usuários inserir botão "Atualizar" para cada linha. Esse botão redirecionará para uma nova página carregando um formulário com todos os dados desse usuário já preenchidos. Esse formulário possuirá um botão "Atualizar" que irá atualizar os dados desse usuário.

- rota PUT user/:id => atualizar os dados do usuário.
