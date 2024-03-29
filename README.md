## Apresentação

<div align="center">
<img src=./app/frontend/src/images/brasileirao_assai.svg height=250>
</div>

<br>

Este projeto apresenta uma tabela dinâmica de classificação, como aquelas que você encontra em sites de esporte. Nós construímos um **backend dockerizado** e usamos o **Sequelize** para modelar os dados. Também personalizamos um frontend que foi desenvolvido anteriormente pela equipe da **[Trybe](http://betrybe.com)**.

O projeto possui um sistema de login que verifica se as informações de acesso do usuário ou administrador estão corretas. Se estiverem, é gerado um token. Usando este token, o usuário ou administrador pode adicionar ou modificar resultados de jogos, fazendo com que a tabela de classificação seja atualizada em tempo real.

Para tornar o projeto mais realista, personalizamos o frontend para o Campeonato Brasileiro de 2023, série A. Vamos dar uma olhada na estrutura do projeto para entender melhor como ele funciona.

<br />

## Estrutura do projeto

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
- O projeto ainda não é totalmente responsivo. Para melhores resultados o ideal é que ele seja exibido em uma resolução mínima de `600 x 400` pixels;
- Para testar o login da aplicação, use as contas: `admin@admin.com`, senha: `secret_admin` e `user@user.com` senha: `secret_user`.

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

<br />

## Principais Ferramentas Utilizadas no Projeto

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" height=37/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" height=37/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" height=37/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height=37/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=37/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" height=37/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height=37/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height=37/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" height=37/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" height=37/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height=37/>

