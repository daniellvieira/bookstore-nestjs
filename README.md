## Descrição

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

### Validação de dados

Para a validação dos dados, utilizei as bibliotecas class-transformer e class-validator, nas versões "0.5.1" e "0.13.2" respectivamente.

Respositório do [class-transformer](https://github.com/typestack/class-transformer)

Respositório do [class-validator](https://github.com/typestack/class-validator)
Mais detalhes dos decorators que podemos utilizar:
https://github.com/typestack/class-validator#validation-decorators

Iremos utilizar os [Pipes](https://docs.nestjs.com/pipes) do NestJS para que possamos validar os dados antes de chegar no controller. Pipes são utilizados para transformações e validações de dados.

### Interceptors

São utilizados para interceptar as requisições tanto na entrada quando na saída.
Nesse projeto, utilizamos um interceptador utilizado pela 'class-tranformer' e criamos um interceptador que informa o tempo da requisição.
Documentação dos [Interceptor](https://docs.nestjs.com/interceptors)

## Instalação

```bash
$ npm install
```

## Executando

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Contato

- Aluno - [Daniel Vieira](https://github.com/daniellvieira)
- NestJS - [https://nestjs.com](https://nestjs.com/)
