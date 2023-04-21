## Apresentação

O presente projeto apresenta uma tabela de classificação dinâmica, como as encontradas nos mais diversos sites de esporte. Construímos aqui um *backend dockerizado*, utilizando modelagem de dados através do *Sequelize*. Além disso, trabalhamos na costumização de um frontend previamente desenvolvido pela equipe da *Trybe*.

O projeto apresenta uma estrutura de login, que verifica um token gerado no caso dos dados de acesso do usuário ou administrador estarem em acordo com as informações do banco de dados. Através desse login, o usuário ou administrador poderão incluir ou modificar resultados de partidas, alterando de maneira dinâmica a tabela de classificação.

Para aproximarmos o projeto de um uso real, alteramos o frontend, caracterizando-o com dados do *Campeonato Brasileiro de 2023, série A*. Vejamos como o projeto está estruturado, para compreendermos melhor seu funcionamento.

<br />

## Estrutura do projeto

<br />

### `Banco de dados : db`

- É criado em um container docker MySQL configurado no docker-compose através de um serviço definido como `db`;
- O banco de dados é responsável por alimentar os serviços do backend;
- Seu acesso foi feito utilizando o *Sequelize* e através da porta `3002` do `localhost`;
- O acesso a esse banco de dados pode ser feito também através do cliente MySQL de sua escolha, desde que sejam alteradas as credenciais de acesso do serviço `db`, no arquivo de coniguração do **docker-compose** (`app/docker-compose.yml`)
  
### `Back-end : backend`

- O serviço do backend é executado na porta `3001`, onde por padrão o frontend realizará suas requisições;
- Configure as variáveis de ambiente em um arquivo `env` que deverá estar localizado em `app/backend/.env`. Na mesma pasta há um arquivo `env.example`. Por padrão, as seguintes variáveis devem assumir os respectivos valores: `DB_USER=root`, `DB_PASS=123456` e `DB_HOST=localhost `, a não ser que sejam realizadas alterações no serviço `db` do docker compose.
- Não esqueça de verificar as dependências utilizadas em nosso projeto no `package.json`

### `Front-end : frontend`

- O acesso ao frontend é feito na porta `3000` do `localhost`, por padrão;
- Foi utilizado o `React` para a construção das páginas, lançando mão da componentização, para deixar o layout mais dinâmico;
- A estilização dos componentes foi feita com CSS, sem utilização de qualquer framework;
- O projeto ainda não é totalmente responsivo. Para melhores resultados o ideal é que ele seja exibido em uma resolução mínima de `600 x 400` pixels.

### `Docker`

- O `docker-compose`faz a união de todos os serviços conteinerizados;
- O *build* do projeto deve ser executado pelo comando `npm run compose:up`, na pasta raiz.
- Para parar os containers do projeto, execute: `npm run compose:down`.

<br />

## Configurações Mínimas

- Sistema Operacional baseado em Unix;
- Node versão 16;
- Docker;
- Docker Compose versão mínima 1.29.2
  
<br />

## Help

<br />

Aqui seguem alguns comandos úteis, se você tem pouca familiariadade com o github:

- Clonar o repositório, se você tem a chave SSH confiugurada: `git clone git@github.com:lobotelho22/tabela_de_jogos.git`
- Para fazer a instalação das dependências do projeto, na branch `main` e na pasta raiz do projeto, execute: `npm install`
- Caso esteja ten problemas com a compatibilidade da versão do node, considere [instalar o NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
- Se precisar, [instale o Doker Compose](./utils/como_instalar_docker_compose.md).

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto no qual você pode customizar e reutilizar todas as vezes que for executar o trybe-publisher.

Para deixá-lo com a sua cara, basta alterar o seguinte arquivo da sua máquina: ~/.student-repo-publisher/custom/_NEW_README.md

É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
