N8N - RANDOM NUMBERS - DESAFIO ONFLY

- Descrição
Repositório com o desafio da Onfly para criação de um nó personalizado na plataforma de automação de workflows n8n, utilizando a API do Random.org para gerar números inteiros aleatórios. No desenvolvimento, utilizei containers com Docker Compose e um banco de dados PostgreSQL para persistência dos dados.


- Features do Nó

Nome do Nó: Random
Operação: True Random Number Generator

Parâmetros de Entrada:
Min: O valor mínimo do intervalo (inclusivo).
Max: O valor máximo do intervalo (inclusivo).

Saída: Retorna um único número inteiro aleatório dentro do intervalo definido pelo usuário, utilizando a API do Random.org.


- Tecnologias:

Plataforma de Automação: n8n
Linguagem do Nó: Node.js v22, TypeScript
Containerização: Docker, Docker Compose
Banco de Dados: PostgreSQL


- Instalação e Execução 
Siga o passos para realizar o teste da aplicação

1. Clone o Repositório


2. Suba a Infraestrutura com Docker Compose 
docker-compose up -d --build


