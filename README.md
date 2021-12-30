## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Esse projeto é referente ao Curso de NestJS: Criando uma API Rest com TypeScript.

Link do curso: [Alura-NestJS](https://cursos.alura.com.br/course/nestjs-api-rest-typescript)

### Providers

O NestJS utiliza o conceito de Providers ( Provedores ) que são classes que podem
ser injetadas automaticamente em outras.
Para transformar uma classe em um Provider, basta adicionar o decorator @Injectable

### Injeção de dependência

É um importante padrão de projeto que ajuda a manter um baixo nível de acoplamento entre classes. Nesta solução, as dependências de uma classe não são definidas programaticamente, mas sim pelo framework ou pela linguagem utilizada. Ou seja, quando utilizamos injeção de dependência delegamos a responsabilidade de criar e fornecer um objeto para o framework.

### ORM ( Sequelize )

Mapeamento objeto relacional, ou seja, algo que traduza o nosso modelo de livros em uma tabela no nosso banco de dados.
Para isso vamos usar o Sequelize.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
