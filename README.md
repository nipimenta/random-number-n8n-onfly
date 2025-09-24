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

1. Instalar o docker
    Garanta que o Docker Desktop esteja instalado e em execução na sua máquina. Ele é necessário para criar os containers da aplicação.
    Links de Instalação:
    Windows https://docs.docker.com/desktop/setup/install/windows-install/
    Mac https://docs.docker.com/desktop/setup/install/mac-install/

2. Clone o Repositório
    Com o docker instalado, clone o projeto e acesse a pasta criada.

    git clone https://github.com/nipimenta/random-number-n8n-onfly
    cd seu-repositorio-n8n

3. Suba a Infraestrutura com Docker Compose 
Utilize o comando a baixo para criar o nó customizado e inicializar o containers
docker-compose up -d --build

4. Acessar aplicação
 A aplicação agora está disponível no localhost na porta 5678
localhost:5678

5. Após acessar a aplicação, selecione um novo fluxo de trabalho. Em seguida, utilize a barra de pesquisa para buscar por "random" e selecione a opção que exibe a imagem de um dado.




