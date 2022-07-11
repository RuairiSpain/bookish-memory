<h2>
Basic graphQL challenge with a service and child version API
</h2>

## Description

I ran out of time writing the code. I didn't get a chance to write unit or e2e tests for the new features.  And didn't complete the paging of service list results as requested in the functional requirements.  Or develop the user authorization aspects of the system.


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

## How to run

```
docker compose up
```

Connect to the database amin panel:
http://localhost:8080/?pgsql=postgres&username=postgres&db=kong-service_db_1

Check the .env config files for the password in path: src/common/envs/.env

If the .env file doesn't exist it's because it's not pulled with the git clone/pull command.  Use the sample development.env for a set of examples.

For connecting to the STG and PROD database, in a real world environment we'd use secrets and a secrets manager to sync to Kubernetes secrets.  Ideally secrets are stored in a locally mounted disk in the POD and only accessible though code. For simplicity I'm using environment vairables for this challenge.

Hint for this challenge the password is: SuperSecret!23

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
