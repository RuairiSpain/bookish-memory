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

## Learning outcomes

I did n't get time to do the challenge justice.  There are a lot of things I would like to do but can't devote time to:

- Unit testing
- E2E testing
- Creating a K8s Helm folder and YAML/values deployment folder
- Adding the CRUD to validate Parent-Child data
- Add limits to what is possible with Service/Version - Minimum number of versions, use semVer for version
- Change UUID to use hash with salt to have control of ID in application logic rather than DB - Better migration to other DBs and scale the unique IDs using hash of individual POD name + version + ISO Datetime.
- Remove Sync feature in TypeOrm and use migration folder to do all DDL (tables, Indexes and Views) and basic CRUD initialization
- Deployment would be to RDS with at least two AZs for replication and redundancy.  If it's mission critical then switch to Aurora and have multi-DB replication per regions.
- Add authentication using JWTs connected to PassportStrategy with Google and other connections
= Logging, add enterpirce logging and connection to either ELK or DataDog or CloudWatch
- Add DB caching of most popular services and top 12 lists.  Cache to redis and invalidate the cached item if the underlying data changes in the database.
- Add CI/CD Pipeline and run steps for build, linting, unit tests, e2e test (maybe), publish to private Docker hub, deploy the Helm to K8s cluster/namespace.  Setup the same pipeline for DEV/STG/PROD with parameters.  Also allow for easy revert strategy by creating a deploy only pipleline (promote from dev to stg to prod)

## License

Nest is [MIT licensed](LICENSE).
